"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _invariant = _interopRequireDefault(require("invariant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ngrok;
/* eslint-disable global-require, no-empty, import/no-extraneous-dependencies */

try {
  ngrok = require('ngrok');
} catch (err) {}
/* eslint-enable */


const connectNgrok = (port, ngrokHandler) => {
  (0, _invariant.default)(ngrok, 'You must install `ngrok` npm package using `npm install ngrok` or `yarn add ngrok` to connect ngrok.');

  if (typeof port === 'number') {
    return ngrok.connect(port, ngrokHandler);
  }

  return ngrok.connect(ngrokHandler);
};

var _default = connectNgrok;
exports.default = _default;