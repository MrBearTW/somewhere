"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
exports.print = print;
exports.warn = warn;
exports.error = error;
exports.bold = bold;

var _chalk = _interopRequireDefault(require("chalk"));

var _figures = _interopRequireDefault(require("figures"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
function log(msg, color = 'blue', icon = 'pointer') {
  // https://github.com/facebook/flow/issues/6181
  // https://github.com/facebook/flow/issues/6321
  // $FlowFixMe: An indexer property is missing in `Chalk` [1].
  console.log(`${_chalk.default[color](_figures.default[icon])} ${msg}`);
}

function print(msg) {
  log(msg, 'green');
}

function warn(msg) {
  log(msg, 'yellow', 'warning');
}

function error(msg) {
  log(msg, 'red', 'cross');
}

function bold(msg) {
  return _chalk.default.bold(msg);
}