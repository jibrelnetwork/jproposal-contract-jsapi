/**
 * @file Manages helper function for getting of contract instance
 * @author Ivan Violentov <ivan.violentov@jibrel.network>
 */

import memoize from '../../utils/memoize'

import votingInterfaceABI from '../../abi'

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
export default function getContractInstance(payload) {
  const contractInstance = getContractAt(payload.props.contractAddress)

  return { ...payload, contractInstance }
}

function _getContract() {
  return jWeb3.eth.contract(votingInterfaceABI)
}

const getContract = memoize(_getContract)

function _getContractAt(contractAddress) {
  const contract = getContract()

  return contract.at(contractAddress)
}

const getContractAt = memoize(_getContractAt)
