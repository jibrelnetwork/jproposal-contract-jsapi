'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.generalContractKeys = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _joiBrowser = require('joi-browser');

var _joiBrowser2 = _interopRequireDefault(_joiBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {Object} BigNumber
 * @property {boolean} [isBigNumber] - type identifier, optional, because supported from v3.1.0
 * @property {number[]} c - coefficient
 * @property {number} e - exponent
 * @property {number} s - sign
 */
var bigNumber = _joiBrowser2.default.object().keys({
  isBigNumber: _joiBrowser2.default.boolean().valid(true),
  c: _joiBrowser2.default.array().items(_joiBrowser2.default.number()).required(),
  e: _joiBrowser2.default.number().integer().min(-1000000000).max(1000000000).required(),
  s: _joiBrowser2.default.number().integer().valid([-1, 1]).required()
}); /**
     * @file Manages rules for validation of API functions
     * @author Ivan Violentov <ivan.violentov@jibrel.network>
     */

var hash = _joiBrowser2.default.string().regex(/^[a-fx0-9]+$/i);

var validationRules = {
  host: _joiBrowser2.default.string().min(3).max(300),
  port: _joiBrowser2.default.number().integer().min(1).max(65535),
  ssl: _joiBrowser2.default.boolean(),
  address: hash.length(42),
  method: _joiBrowser2.default.string().alphanum().min(1).max(99),
  proposalId: bigNumber
};

var generalETHKeys = {
  rpcaddr: validationRules.host.required(),
  rpcport: validationRules.port.required(),
  ssl: validationRules.ssl
};

var generalContractKeys = (0, _extends3.default)({}, generalETHKeys, {
  contractAddress: validationRules.address.required()
});

exports.generalContractKeys = generalContractKeys;
exports.default = validationRules;