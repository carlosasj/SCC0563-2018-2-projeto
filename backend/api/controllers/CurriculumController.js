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
];

function findOnePopulateAll(criteria) {
  let query = Curriculum.findOne(criteria);
  fks.forEach(fk => query = query.populate(fk.key));
  return query;
}

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
  }

};
