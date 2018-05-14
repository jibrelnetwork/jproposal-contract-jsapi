'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkWeb3;

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function checkWeb3
 *
 * @description Checks web3 connection status. Sets web3 globally if it does not exist
 *
 * @param {object} payload - Payload object
 * @param {object} payload.props - API function properties
 * @param {string} payload.props.rpcaddr - RPC address of Ethereum node to connect on
 * @param {number} payload.props.rpcport - RPC port of Ethereum node to connect on
 * @param {boolean} [payload.props.ssl] - Defines using of ssl for connection or not
 *
 * @returns {object} The same (as input) payload object
 */
function checkWeb3(payload) {
  return _bluebird2.default.bind(this, payload.props).then(getRPCEndpoint).then(checkIsWeb3Inited).return(payload);
} /**
   * @file Manages helper functions to check web3 connection
   * @author Ivan Violentov <ivan.violentov@jibrel.network>
   */

function getRPCEndpoint(_ref) {
  var rpcaddr = _ref.rpcaddr,
      rpcport = _ref.rpcport,
      ssl = _ref.ssl;

  return 'http' + (ssl ? 's' : '') + '://' + rpcaddr + ':' + rpcport;
}

function checkIsWeb3Inited(rpcEndpoint) {
  var globalScope = getGlobalScope();

  // check if web3 object already injected in global scope
  if (globalScope.jWeb3Endpoint === rpcEndpoint) {
    return checkWeb3Connection(globalScope.jWeb3);
  }

  return setGlobalWeb3(rpcEndpoint);
}

function setGlobalWeb3(rpcEndpoint) {
  var jWeb3 = new _web2.default(new _web2.default.providers.HttpProvider(rpcEndpoint));

  return _bluebird2.default.bind(this, jWeb3).then(checkWeb3Connection).then(function () {
    return initWeb3(jWeb3, rpcEndpoint);
  });
}

function initWeb3(jWeb3, rpcEndpoint) {
  var globalScope = getGlobalScope();

  globalScope.jWeb3 = jWeb3;
  globalScope.jWeb3Endpoint = rpcEndpoint;
}

function checkWeb3Connection(jWeb3) {
  var err = 'Web3 is not connected to the node';

  return new _bluebird2.default(function (resolve, reject) {
    if (!jWeb3 /* && jWeb3.isConnected() */) {
      return reject(new Error(err));
    }

    return resolve(jWeb3);
  }).timeout(_config2.default.promiseConnectionTimeout, new Error(err)).then(checkSupportedMethods);
}

function checkSupportedMethods(jWeb3) {
  var web3eth = jWeb3.eth;

  if (!web3eth) {
    throw new Error('web3.eth is not supported');
  }

  var supportedMethods = ['getBalance', 'getBlock', 'contract', 'filter', 'getTransaction', 'getTransactionCount', 'getTransactionReceipt', 'getGasPrice', 'estimateGas', 'sendRawTransaction'];

  supportedMethods.forEach(function (method) {
    if (!(method in web3eth)) {
      throw new Error('web3.eth.' + method + ' is not supported');
    }
  });
}

function getGlobalScope() {
  return typeof window !== 'undefined' ? window : global;
}