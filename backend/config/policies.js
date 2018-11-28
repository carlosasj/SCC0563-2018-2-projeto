/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  CurriculumController: {
    mineGet: ['checkToken'],
    minePost: ['checkToken'],
    search: ['checkToken'],
    getById: ['checkToken'],
    block: ['checkToken', 'checkAdmin'],
  },
  UserController: {
    setAdmin: ['checkToken', 'checkAdmin'],
  },
  HealthcheckController: {
    index: true,
    protected: ['checkToken']
  },
  '*': true,


};
