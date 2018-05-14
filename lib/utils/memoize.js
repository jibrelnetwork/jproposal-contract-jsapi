'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = memoize;
/**
 * @file Manages helper function to memoize another functions.
 * @author Ivan Violentov <ivan.violentov@jibrel.network>
 */

/**
 * @function memoize
 *
 * @description Caches result of some function
 *
 * @param {function} fn - Function to memoize
 *
 * @returns Result from cache (if exists) or result of the provided function excecution
 */
function memoize(fn) {
  var cache = {};

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /**
     * current jWeb3Endpoint is necessary
     */
    var key = [jWeb3Endpoint].concat(args).join(':');

    if (key in cache) {
      return cache[key];
    }

    var value = fn.apply(undefined, args);
    cache[key] = value;

    return value;
  };
}