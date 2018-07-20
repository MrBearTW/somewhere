"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const verifyViberSignature = bot => ({
  request,
  response
}, next) => {
  if (bot.connector.verifySignature(request.rawBody, request.headers['x-viber-content-signature'])) {
    return next();
  }

  const error = {
    message: 'Viber Signature Validation Failed!',
    request: {
      rawBody: request.rawBody,
      headers: {
        'x-viber-content-signature': request.headers['x-viber-content-signature']
      }
    }
  };
  console.error(error);
  response.status = 400;
  response.body = {
    error
  };
};

var _default = verifyViberSignature;
exports.default = _default;