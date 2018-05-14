/**
 * @file Exposes validation schemas for Voting interface
 * @author Ivan Violentov <ivan.violentov@jibrel.network>
 */

import Joi from 'joi-browser'

import validationRules, { generalContractKeys } from '../validationRules'

const getTokensInSupport = Joi.object().keys({
  ...generalContractKeys,
  proposalId: validationRules.proposalId.required(),
})

const getTokensAgainst = Joi.object().keys({
  ...generalContractKeys,
  proposalId: validationRules.proposalId.required(),
})

export default { getTokensInSupport, getTokensAgainst }
