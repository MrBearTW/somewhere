"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _url = _interopRequireDefault(require("url"));

var _micro = require("micro");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const verifyMessengerWebhook = ({
  verifyToken
}) => (req, res) => {
  const {
    query
  } = _url.default.parse(req.url, true);

  if (query['hub.mode'] === 'subscribe' && query['hub.verify_token'] === verifyToken) {
    (0, _micro.send)(res, 200, query['hub.challenge']);
  } else {
    console.error('Failed validation. Make sure the validation tokens match.');
    (0, _micro.send)(res, 403);
  }
};

var _default = verifyMessengerWebhook;
exports.default = _default;