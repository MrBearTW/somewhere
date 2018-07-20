"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const verifySlackSignature = bot => ({
  request,
  response
}, next) => {
  if (bot.connector.verifySignature(request.body.token)) {
    return next();
  }

  const error = {
    message: 'Slack Verification Token Validation Failed!',
    request: {
      body: request.body
    }
  };
  console.error(error);
  response.status = 400;
  response.body = {
    error
  };
};

var _default = verifySlackSignature;
exports.default = _default;