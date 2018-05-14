'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTokensInSupport = getTokensInSupport;
exports.getTokensAgainst = getTokensAgainst;

var _contractMethod = require('./contractMethod');

var _contractMethod2 = _interopRequireDefault(_contractMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var interfaceName = 'Voting';

/**
 * @async
 * @function getTokensInSupport
 *
 * @description Gets total value of tokens in support for specific proposal
 *
 * @param {object} props - API function properties
 * @param {string} props.rpcaddr - RPC address of Ethereum node to connect on
 * @param {number} props.rpcport - RPC port of Ethereum node to connect on
 * @param {string} props.contractAddress - Contract address
 * @param {number} props.proposalId - Id of proposal
 * @param {boolean} [props.ssl] - Defines using of ssl for connection or not
 *
 * @returns Promise that will be resolved with the total value of tokens
 */
/**
 * @file Exposes Voting API
 * @author Ivan Violentov <ivan.violentov@jibrel.network>
 */

function getTokensInSupport(props) {
  return _contractMethod2.default.call({
    props: props,
    interfaceName: interfaceName,
    method: 'getTokensInSupport',
    args: [props.proposalId]
  });
}

/**
 * @async
 * @function getTokensAgainst
 *
 * @description Gets total value of tokens against of specific proposal
 *
 * @param {object} props - API function properties
 * @param {string} props.rpcaddr - RPC address of Ethereum node to connect on
 * @param {number} props.rpcport - RPC port of Ethereum node to connect on
 * @param {string} props.contractAddress - Contract address
 * @param {number} props.proposalId - Id of proposal
 * @param {boolean} [props.ssl] - Defines using of ssl for connection or not
 *
 * @returns Promise that will be resolved with the total value of tokens
 */
function getTokensAgainst(props) {
  return _contractMethod2.default.call({
    props: props,
    interfaceName: interfaceName,
    method: 'getTokensAgainst',
    args: [props.proposalId]
  });
}

exports.default = { getTokensInSupport: getTokensInSupport, getTokensAgainst: getTokensAgainst };