'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _joiBrowser = require('joi-browser');

var _joiBrowser2 = _interopRequireDefault(_joiBrowser);

var _validationRules = require('../validationRules');

var _validationRules2 = _interopRequireDefault(_validationRules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Exposes validation schemas for Voting interface
 * @author Ivan Violentov <ivan.violentov@jibrel.network>
 */

var getTokensInSupport = _joiBrowser2.default.object().keys((0, _extends3.default)({}, _validationRules.generalContractKeys, {
  proposalId: _validationRules2.default.proposalId.required()
}));

var getTokensAgainst = _joiBrowser2.default.object().keys((0, _extends3.default)({}, _validationRules.generalContractKeys, {
  proposalId: _validationRules2.default.proposalId.required()
}));

exports.default = { getTokensInSupport: getTokensInSupport, getTokensAgainst: getTokensAgainst };