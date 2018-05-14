'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _validation = require('../../validation');

var _validation2 = _interopRequireDefault(_validation);

var _checkWeb = require('../../utils/checkWeb3');

var _checkWeb2 = _interopRequireDefault(_checkWeb);

var _getContractInstance = require('./getContractInstance');

var _getContractInstance2 = _interopRequireDefault(_getContractInstance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @async
 * @function call
 *
 * @description Wrapper for callContractMethod function (@see callContractMethod)
 */
function call(payload) {
  return prepareContractInstanceMethod(payload).then(callContractMethod);
} /**
   * @file Manages web3.eth.contract wrapper
   * @author Ivan Violentov <ivan.violentov@jibrel.network>
   */

function prepareContractInstanceMethod(payload) {
  return _bluebird2.default.bind(this, payload).then(_validation2.default).then(_checkWeb2.default).then(_getContractInstance2.default);
}

/**
 * @async
 * @function callContractMethod
 *
 * @description Calls specific contract method with provided arguments
 *
 * @param {object} payload - Payload object
 * @param {object} payload.contractInstance - Contract instance
 * @param {string} payload.interfaceName - Interface name
 * @param {string} payload.method - Method name
 * @param {array} payload.args - Method arguments
 *
 * @returns Promise that will be resolved with the result of contract method execution
 */
function callContractMethod(payload) {
  var contractInstance = payload.contractInstance,
      interfaceName = payload.interfaceName,
      method = payload.method,
      args = payload.args;


  return _bluebird2.default.promisify(contractInstance[method].call).apply(undefined, (0, _toConsumableArray3.default)(args)).timeout(_config2.default.promiseTimeout, new Error('Can not call ' + interfaceName + '.' + method + ' within ' + _config2.default.promiseTimeout + 'ms'));
}

exports.default = { call: call };