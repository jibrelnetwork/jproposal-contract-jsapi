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
 * @param {string} payload.interfaceName - Interface name
 *
 * @returns {object} Contract instance
 */
/**
 * @file Manages helper function for getting of contract instance
 * @author Ivan Violentov <ivan.violentov@jibrel.network>
 */

function getContractInstance(payload) {
  var props = payload.props,
      interfaceName = payload.interfaceName;

  var contractInstance = getContractAt(props.contractAddress, interfaceName);

  return (0, _extends3.default)({}, payload, { contractInstance: contractInstance });
}

function _getContract(interfaceName) {
  var contractABI = _abi2.default[interfaceName];

  var isContractInterfaceSupported = contractABI != null;

  if (!isContractInterfaceSupported) {
    throw new Error('Contract interface ' + interfaceName + ' is not supported');
  }

  return jWeb3.eth.contract(contractABI);
}

var getContract = (0, _memoize2.default)(_getContract);

function _getContractAt(contractAddress, interfaceName) {
  var contract = getContract(interfaceName);

  return contract.at(contractAddress);
}

var getContractAt = (0, _memoize2.default)(_getContractAt);