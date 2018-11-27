/**
 * CurriculumController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

function getId(obj) { return obj.id; }

function diffToRemoveEditOrCreate(objListFromDB, objListFromBrowser) {
  if (!Boolean(objListFromDB) || !objListFromDB.length) {
    // se a lista do BD está vazia, então tudo em objListFromBrowser é para ser criado.
    return {
      remove: [], // number[]
      edit: [], // object[]
      create: objListFromBrowser, // object[]
    };
  } else {
    const idsListFromDB = objListFromDB.map(getId);
    const idsListFromBrowser = objListFromBrowser.map(getId);
    return {
      remove: idsListFromDB.filter(id => !idsListFromBrowser.includes(id)),
      edit: objListFromBrowser.filter(obj => idsListFromDB.includes(obj.id)),
      create: objListFromBrowser.filter(obj => !idsListFromDB.includes(obj.id)),
    };
  }
}

async function applyRemoveEditOrCreateOperations(Model, operationsObj) {
  await Model.destroy({ id: { in: operationsObj.remove } });
  await Promise.all(operationsObj.edit.map(async obj => { return await Model.update(obj.id).set(obj); }));
  const created = await Model.createEach(operationsObj.create).fetch();
  return operationsObj.edit.concat(created).map(getId);
}

const fks = [
  { key: 'education', model: Education },
  { key: 'work', model: Work },
  { key: 'publications', model: Publication },
  { key: 'skillsGroups', model: SkillsGroup },
];

function findOnePopulateAll(criteria) {
  return functionPopulateAll('findOne', criteria);
}

function streamPopulateAll(criteria) {
  return functionPopulateAll('stream', criteria);
}

function findPopulateAll(criteria) {
  return functionPopulateAll('find', criteria);
}

function functionPopulateAll(fnName, criteria) {
  let query = Curriculum[fnName](criteria);
  fks.forEach(fk => query = query.populate(fk.key));
  return query;
}

function flat(acc, curr) { return acc.concat(curr);}

module.exports = {
  mineGet: async (req, res) => {
    try{
      const curriculum = await findOnePopulateAll({ owner: req.user.id });
      return res.json(curriculum);
    } catch (err) {
      return res.json(null);
    }
  },

  minePost: async (req, res) => {
    let curriculum = await Curriculum.findOne({ owner: req.user.id });

    // Garante que o currículo existe antes de prosseguir
    const base = _.pick(req.body, ['name', 'headline', 'phone', 'email', 'github', 'linkedin']);
    if (curriculum) {
      await Curriculum.update(curriculum.id).set(base);
    } else {
      await Curriculum.create(Object.assign({ owner: req.user.id }, base));
    }

    curriculum = await findOnePopulateAll({ owner: req.user.id });

    await Promise.all(fks.map(async fk => {
      const operationsObj = diffToRemoveEditOrCreate(curriculum[fk.key], req.body[fk.key]);
      const resultIds = await applyRemoveEditOrCreateOperations(fk.model, operationsObj);
      base[fk.key] = resultIds;
    }))

    await Curriculum.update(curriculum.id).set(base);

    curriculum = await findOnePopulateAll({ owner: req.user.id });

    return res.json(curriculum);
  },

  search: async (req, res) => {
    const query = req.body.query.toLowerCase().split(' ').filter(Boolean);
    const results = [];

    (await findPopulateAll()).forEach(async curr => {
      const stringified = [
        curr.name,
        curr.headline,
        curr.email,
        curr.github,
      ].concat(
        curr.work.map(w => [w.place, w.role]).reduce(flat, []),
        curr.education.map(e => [e.universityName, e.course]).reduce(flat, []),
        curr.publications.map(p => p.title),
        curr.skillsGroups.map(s => [s.sk1, s.sk2, s.sk3, s.sk4, s.sk5].filter(Boolean)).reduce(flat, []),
      ).join(' ').toLowerCase();

      if (query.every(q => stringified.includes(q))) {
        results.push(curr);
      }
    });

    return res.json({ results: results });
  },

};
