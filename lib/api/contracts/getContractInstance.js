'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = getContractInstance;

var _memoize = require('../../utils/memoize');

var _memoize2 = _interopRequireDefault(_memoize);

var _abi = require('../../abi');

var _abi2 = _interopRequireDefault(_abi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function getContractInstance
 *
 * @description Gets contract instance
 *
 * @param {object} payload - Payload object
 * @param {object} payload.props - API function properties
 * @param {string} payload.props.contractAddress - Contract address
 *
 * @returns {object} Contract instance
 */
/**
 * @file Manages helper function for getting of contract instance
 * @author Ivan Violentov <ivan.violentov@jibrel.network>
 */

function getContractInstance(payload) {
  var contractInstance = getContractAt(payload.props.contractAddress);

  return (0, _extends3.default)({}, payload, { contractInstance: contractInstance });
}

function _getContract() {
  return jWeb3.eth.contract(_abi2.default);
}

var getContract = (0, _memoize2.default)(_getContract);

function _getContractAt(contractAddress) {
  var contract = getContract();

  return contract.at(contractAddress);
}

var getContractAt = (0, _memoize2.default)(_getContractAt);