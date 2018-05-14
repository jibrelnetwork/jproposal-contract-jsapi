'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _joiBrowser = require('joi-browser');

var _joiBrowser2 = _interopRequireDefault(_joiBrowser);

var _schemas = require('./schemas');

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @async
 * @function validate
 *
 * @description Validates input parameters by schema
 *
 * @param {object} payload - Payload object
 * @param {object} payload.props - API function properties
 * @param {string} payload.interfaceName - Interface name
 * @param {string} payload.method - API function name
 * @param {array} payload.args - API function arguments
 *
 * @returns Promise that will be resolved with received payload comprising validated properties
 */
function validate(payload) {
  var props = payload.props,
      interfaceName = payload.interfaceName,
      method = payload.method,
      args = payload.args;


  var schema = getSchema(interfaceName, method);

  return new _bluebird2.default(function (resolve, reject) {
    return _joiBrowser2.default.validate(props, schema, function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve({ interfaceName: interfaceName, method: method, args: args, props: result });
    });
  }).catch(function (err) {
    throw new Error(err);
  });
} /**
   * @file Manages function, that used to validate API function input params
   * @author Ivan Violentov <ivan.violentov@jibrel.network>
   */

function getSchema(interfaceName, method) {
  var interfaceSchemas = _schemas2.default[interfaceName];

  if (!interfaceSchemas) {
    _bluebird2.default.reject(new Error('Validation schemas for ' + interfaceName + ' not found'));
  }

  var methodSchema = interfaceSchemas[method];

  if (!methodSchema) {
    _bluebird2.default.reject(new Error('Validation schema for ' + interfaceName + '.' + method + ' not found'));
  }

  return methodSchema;
}