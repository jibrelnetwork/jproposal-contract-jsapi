/**
 * @file Exposes Voting API
 * @author Ivan Violentov <ivan.violentov@jibrel.network>
 */

import contractMethod from './contractMethod'

const interfaceName = 'Voting'

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
export function getTokensInSupport(props) {
  return contractMethod.call({
    props,
    interfaceName,
    method: 'getTokensInSupport',
    args: [props.proposalId],
  })
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
export function getTokensAgainst(props) {
  return contractMethod.call({
    props,
    interfaceName,
    method: 'getTokensAgainst',
    args: [props.proposalId],
  })
}

export default { getTokensInSupport, getTokensAgainst }
