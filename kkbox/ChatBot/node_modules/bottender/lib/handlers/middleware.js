"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaCompose = _interopRequireDefault(require("koa-compose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const middleware = m => (0, _koaCompose.default)(m.map(item => item.build ? item.build() : item));

var _default = middleware;
exports.default = _default;