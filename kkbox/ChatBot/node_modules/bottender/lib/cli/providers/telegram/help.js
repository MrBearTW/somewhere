"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const help = () => {
  console.log(`
    bottender telegram <command> <action> [options]

    ${_chalk.default.dim('Commands:')}

      webhook   <action>    Manage webhook

    ${_chalk.default.dim('Actions:')}

      get                   Get the webhook information
      set                   Set the property you request
      del, delete           Delete the webhook

    ${_chalk.default.dim('Options:')}

      -w                    Webhook callback URL
      -t, --token           Specify Telegram access token.
      --ngrok-port          Ngrok port(default: 4040)

    ${_chalk.default.dim('Examples:')}

    ${_chalk.default.dim('-')} Set telegram webhook

      ${_chalk.default.cyan('$ bottender telegram webhook set -w http://example.com')}
  `);
};

var _default = help;
exports.default = _default;