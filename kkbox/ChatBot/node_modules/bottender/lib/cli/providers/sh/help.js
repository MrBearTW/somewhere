"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const help = () => {
  console.log(`
    bottender <command>

    ${_chalk.default.dim('Commands:')}

      ${_chalk.default.dim('Platform')}

        messenger   <command>   Manage your Messenger command
        telegram    <command>   Manage your Telegram command
        line        <command>   Manage your LINE command
        viber       <command>   Manage your Viber command

      ${_chalk.default.dim('Global')}

        init                    Init a bot skeleton
        help                    Show this help

    ${_chalk.default.dim('Configs:')}

        --skip-validate         Skip the config validation

    ${_chalk.default.dim('Examples:')}

    ${_chalk.default.dim('-')} Init a bot

      ${_chalk.default.cyan('$ bottender init')}

    ${_chalk.default.dim('-')} Get the help

      ${_chalk.default.cyan('$ bottender help')}
      ${_chalk.default.cyan('$ bottender messenger help')}

    ${_chalk.default.dim('-')} Manage the Messenger command

      ${_chalk.default.cyan('$ bottender messenger webhook set')}

    ${_chalk.default.dim('-')} Skip config validation

      ${_chalk.default.cyan('$ bottender messenger profile set --skip-validate')}
  `);
};

var _default = help;
exports.default = _default;