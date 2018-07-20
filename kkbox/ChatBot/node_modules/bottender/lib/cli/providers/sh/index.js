"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  title: 'Bottender',
  subcommands: new Set(['help', 'init', 'test']),

  get init() {
    return require('./init').default;
  },

  get test() {
    return require('./test').default;
  },

  get help() {
    return require('./help').default;
  }

};
exports.default = _default;