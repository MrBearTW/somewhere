"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadModule;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadModule(modulePath) {
  let mod;

  try {
    mod = require(_path.default.resolve(modulePath)); // eslint-disable-line import/no-dynamic-require
  } catch (err) {} // eslint-disable-line


  if (!mod) return null;

  if (typeof mod === 'object' && mod.default) {
    return mod.default;
  }

  return mod;
}