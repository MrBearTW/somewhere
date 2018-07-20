"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const subMenuItemSchema = _joi.default.object().keys({
  type: _joi.default.string(),
  title: _joi.default.string(),
  url: _joi.default.string().when('type', {
    is: 'web_url',
    then: _joi.default.string().required()
  }),
  payload: _joi.default.string().when('type', {
    is: 'postback',
    then: _joi.default.string().required()
  }),
  webview_height_ratio: _joi.default.string(),
  messenger_extensions: _joi.default.boolean(),
  fallback_url: _joi.default.string(),
  webview_share_button: _joi.default.string()
});

const secondLayerMenuItemSchema = _joi.default.object().keys({
  call_to_actions: _joi.default.array().items().when('type', {
    is: 'nested',
    then: _joi.default.array().items(subMenuItemSchema).max(5)
  })
}).concat(subMenuItemSchema);

const firstLayerMenuItemSchema = _joi.default.object().keys({
  call_to_actions: _joi.default.array().items().when('type', {
    is: 'nested',
    then: _joi.default.array().items(secondLayerMenuItemSchema).max(5)
  })
}).concat(secondLayerMenuItemSchema);

const schema = _joi.default.object().keys({
  messenger: _joi.default.object().keys({
    accessToken: _joi.default.string(),
    verifyToken: _joi.default.string(),
    appId: _joi.default.string(),
    appSecret: _joi.default.string(),
    fields: _joi.default.array().items(_joi.default.string()),
    profile: _joi.default.object().keys({
      get_started: _joi.default.object().keys({
        payload: _joi.default.string()
      }),
      persistent_menu: _joi.default.array().items(_joi.default.object().keys({
        locale: _joi.default.string(),
        composer_input_disabled: _joi.default.boolean(),
        call_to_actions: _joi.default.array().items(firstLayerMenuItemSchema).max(3).when('composer_input_disabled', {
          is: true,
          then: _joi.default.array().items(firstLayerMenuItemSchema).max(3).required()
        })
      })),
      greeting: _joi.default.array().items(_joi.default.object().keys({
        locale: _joi.default.string(),
        text: _joi.default.string()
      })),
      whitelisted_domains: _joi.default.array().items(_joi.default.string())
    })
  }),
  line: _joi.default.object().keys({
    channelSecret: _joi.default.string().required(),
    accessToken: _joi.default.string().required(),
    richMenus: _joi.default.array().items(_joi.default.object().keys({
      size: _joi.default.object().keys({
        width: _joi.default.number().integer().required(),
        height: _joi.default.number().integer().required()
      }).required(),
      selected: _joi.default.boolean().required(),
      name: _joi.default.string().required(),
      chatBarText: _joi.default.string().required(),
      areas: _joi.default.array().items(_joi.default.object().keys({
        bounds: _joi.default.object().keys({
          x: _joi.default.number().integer().required(),
          y: _joi.default.number().integer().required(),
          width: _joi.default.number().integer().required(),
          height: _joi.default.number().integer().required()
        }).required(),
        action: _joi.default.object().keys({
          type: _joi.default.string().required(),
          data: _joi.default.string().required()
        })
      })).required()
    })).max(10)
  }),
  telegram: _joi.default.object().keys({
    accessToken: _joi.default.string().required()
  }),
  slack: _joi.default.object().keys({
    accessToken: _joi.default.string().required(),
    verificationToken: _joi.default.string()
  }),
  viber: _joi.default.object().keys({
    accessToken: _joi.default.string().required()
  }),
  ngrok: _joi.default.boolean()
});

var _default = schema;
exports.default = _default;