"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const help = () => {
  console.log(`
    bottender messenger <command> <action>

    ${_chalk.default.dim('Commands:')}

      get-started             <action>    Manage get-started
      greeting                <action>    Manage greeting text
      menu, persistent-menu   <action>    Manage persistent-menu
      profile                 <action>    Manage Messenger profile
      webhook                 <action>    Manage webhook
      domains,
      whitelisted-domains     <action>    Manage whitelisted-domains
      attachment              <action>    Manage attachment

    ${_chalk.default.dim('Actions:')}

      set           Set the property you request
      del, delete   Delete the property you request
      help          Show more detail usage for the command

    ${_chalk.default.dim('Examples:')}

    ${_chalk.default.dim('-')} Set the messenger profile

      ${_chalk.default.cyan('$ bottender messenger profile set')}

    ${_chalk.default.dim('-')} Delete the persistent-menu

      ${_chalk.default.cyan('$ bottender messenger persistent-menu del')}

    ${_chalk.default.dim('-')} Show attachment command usage

      ${_chalk.default.cyan('$ bottender messenger attachment help')}
  `);
};

var _default = help;
exports.default = _default;