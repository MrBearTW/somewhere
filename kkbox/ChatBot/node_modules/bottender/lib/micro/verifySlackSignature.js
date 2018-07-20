"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _micro = require("micro");

const verifySlackSignature = bot => async (req, res) => {
  const body = await (0, _micro.json)(req);
  const verified = bot.connector.verifySignature(body.token);

  if (!verified) {
    (0, _micro.send)(res, 400, {
      error: {
        message: 'Slack Verification Token Validation Failed!',
        request: {
          body
        }
      }
    });
  }

  return verified;
};

var _default = verifySlackSignature;
exports.default = _default;