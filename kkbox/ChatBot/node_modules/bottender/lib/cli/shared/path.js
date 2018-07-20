"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toAbsolutePath = toAbsolutePath;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toAbsolutePath(relativeOrAbsolutePath) {
  if (_path.default.isAbsolute(relativeOrAbsolutePath) || relativeOrAbsolutePath.startsWith('~')) {
    return relativeOrAbsolutePath;
  }

  return _path.default.join(process.cwd(), relativeOrAbsolutePath);
}