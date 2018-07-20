"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const verifyLineSignature = bot => (req, res, next) => {
  if (bot.connector.verifySignature(req.rawBody, req.headers['x-line-signature'])) {
    return next();
  }

  const error = {
    message: 'LINE Signature Validation Failed!',
    request: {
      rawBody: req.rawBody,
      headers: {
        'x-line-signature': req.headers['x-line-signature']
      }
    }
  };
  console.error(error);
  res.status(400);
  res.send({
    error
  });
};

var _default = verifyLineSignature;
exports.default = _default;