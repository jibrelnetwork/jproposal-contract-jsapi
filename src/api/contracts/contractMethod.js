/**
 * @file Manages web3.eth.contract wrapper
 * @author Ivan Violentov <ivan.violentov@jibrel.network>
 */

import Promise from 'bluebird'

import config from '../../config'
import validate from '../../validation'
import checkWeb3 from '../../utils/checkWeb3'
import getContractInstance from './getContractInstance'

/**
 * @async
 * @function call
 *
 * @description Wrapper for callContractMethod function (@see callContractMethod)
 */
function call(payload) {
  return prepareContractInstanceMethod(payload).then(callContractMethod)
}

function prepareContractInstanceMethod(payload) {
  return Promise
    .bind(this, payload)
    .then(validate)
    .then(checkWeb3)
    .then(getContractInstance)
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
  const { contractInstance, interfaceName, method, args } = payload

  return Promise
    .promisify(contractInstance[method].call)(...args)
    .timeout(
      config.promiseTimeout,
      new Error(`Can not call ${interfaceName}.${method} within ${config.promiseTimeout}ms`)
    )
}

export default { call }
