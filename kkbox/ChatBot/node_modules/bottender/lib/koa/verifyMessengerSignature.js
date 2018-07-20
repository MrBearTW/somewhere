"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const verifyMessengerSignature = bot => ({
  request,
  response
}, next) => {
  if (bot.connector.verifySignature(request.rawBody, request.headers['x-hub-signature'])) {
    return next();
  }

  const error = {
    message: 'Messenger Signature Validation Failed!',
    request: {
      rawBody: request.rawBody,
      headers: {
        'x-hub-signature': request.headers['x-hub-signature']
      }
    }
  };
  console.error(error);
  response.status = 400;
  response.body = {
    error
  };
};

var _default = verifyMessengerSignature;
exports.default = _default;