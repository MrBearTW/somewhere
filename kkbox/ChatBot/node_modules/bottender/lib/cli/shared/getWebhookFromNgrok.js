"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWebhookFromNgrok;

var _axios = _interopRequireDefault(require("axios"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getWebhookFromNgrok(ngrokPort) {
  const ngrokAxios = _axios.default.create({
    baseURL: `http://localhost:${ngrokPort}`
  }); // TODO: use ngrok Client API? - https://ngrok.com/docs#client-api


  const res = await ngrokAxios.get('/api/tunnels');
  return (0, _get.default)(res, 'data.tunnels[1].public_url'); // tunnels[1] return `https` protocol
}