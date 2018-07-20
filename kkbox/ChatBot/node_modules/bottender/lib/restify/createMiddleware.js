"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createMiddleware(bot) {
  const requestHandler = bot.createRequestHandler();
  return async (req, res, next) => {
    if ((0, _isEmpty.default)(req.query) && !req.body) {
      throw new Error('createMiddleware(): Missing query and body, you may need a body parser. Use `restify.plugins.bodyParser()` before this middleware.');
    }

    const response = await requestHandler(_objectSpread({}, req.query, req.body), {
      req,
      res
    });

    if (response) {
      res.send(response.status || 200, response.body || '', response.headers);
    } else {
      res.send(200);
    }

    return next();
  };
}

var _default = createMiddleware;
exports.default = _default;