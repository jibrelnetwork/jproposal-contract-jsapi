/**
 * @file Manages rules for validation of API functions
 * @author Ivan Violentov <ivan.violentov@jibrel.network>
 */

import Joi from 'joi-browser'

/**
 * @typedef {Object} BigNumber
 * @property {boolean} [isBigNumber] - type identifier, optional, because supported from v3.1.0
 * @property {number[]} c - coefficient
 * @property {number} e - exponent
 * @property {number} s - sign
 */
const bigNumber = Joi.object().keys({
  isBigNumber: Joi.boolean().valid(true),
  c: Joi.array().items(Joi.number()).required(),
  e: Joi.number().integer().min(-1000000000).max(1000000000).required(),
  s: Joi.number().integer().valid([-1, 1]).required(),
})

const hash = Joi.string().regex(/^[a-fx0-9]+$/i)

const validationRules = {
  host: Joi.string().min(3).max(300),
  port: Joi.number().integer().min(1).max(65535),
  ssl: Joi.boolean(),
  address: hash.length(42),
  method: Joi.string().alphanum().min(1).max(99),
  proposalId: bigNumber,
}

const generalETHKeys = {
  rpcaddr: validationRules.host.required(),
  rpcport: validationRules.port.required(),
  ssl: validationRules.ssl,
}

const generalContractKeys = {
  ...generalETHKeys,
  contractAddress: validationRules.address.required(),
}

export { generalContractKeys, validationRules as default }
