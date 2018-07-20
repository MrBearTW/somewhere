"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  title: 'LINE',
  subcommands: new Set(['menu']),

  get menu() {
    return require('./menu').default;
  }

};
exports.default = _default;