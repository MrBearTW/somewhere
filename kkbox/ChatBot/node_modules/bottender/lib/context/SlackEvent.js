"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pascalCase = _interopRequireDefault(require("pascal-case"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SlackEvent {
  constructor(rawEvent) {
    _defineProperty(this, "_rawEvent", void 0);

    this._rawEvent = rawEvent;
  }
  /**
   * Underlying raw event from Slack.
   *
   */


  get rawEvent() {
    return this._rawEvent;
  }
  /**
   * Determine if the event is a message event.
   *
   */


  get isMessage() {
    return this._rawEvent.type === 'message';
  }
  /**
   * Determine if the event is a message event sent from channels.
   *
   */


  get isChannelsMessage() {
    if (!this.isMessage || !this.message) return false;
    const message = this.message;
    return message.channel.startsWith('C');
  }
  /**
   * Determine if the event is a message event sent from groups.
   *
   */


  get isGroupsMessage() {
    if (!this.isMessage || !this.message) return false;
    const message = this.message;
    return message.channel.startsWith('G');
  }
  /**
   * Determine if the event is a message event sent from instant messaging.
   *
   */


  get isImMessage() {
    if (!this.isMessage || !this.message) return false;
    const message = this.message;
    return message.channel.startsWith('D');
  }
  /**
   * Determine if the event is a message event sent from multiple people instant messaging.
   *
   */


  get isMpimMessage() {
    if (!this.isMessage || !this.message) return false;
    const message = this.message;
    return message.channel.startsWith('G');
  }
  /**
   * The message object from Slack raw event.
   *
   */


  get message() {
    if (!this.isMessage) return;
    const message = this._rawEvent;
    return message;
  }
  /**
   * Determine if the event is a message event which includes text.
   *
   */


  get isText() {
    return this.isMessage;
  }
  /**
   * The text string from Slack raw event.
   *
   */


  get text() {
    if (this.isText) {
      return this.message.text;
    }

    return null;
  }
  /**
   * Determine if the event is a interactive message (button/menu) event.
   *
   */


  get isInteractiveMessage() {
    return this._rawEvent.type === 'interactive_message';
  }
  /**
   * The callback_id from Slack interactive message.
   *
   */


  get callbackId() {
    if (this.isInteractiveMessage) {
      return this._rawEvent.callback_id;
    }

    return null;
  }
  /**
   * The action from Slack interactive message.
   *
   */


  get action() {
    if (this.isInteractiveMessage) {
      return this._rawEvent.actions[0];
    }

    return null;
  }

} // https://api.slack.com/events


exports.default = SlackEvent;
const eventTypes = ['app_uninstalled', 'channel_archive', 'channel_created', 'channel_deleted', 'channel_history_changed', 'channel_rename', 'channel_unarchive', 'dnd_updated', 'dnd_updated_user', 'email_domain_changed', 'emoji_changed', 'file_change', 'file_comment_added', 'file_comment_deleted', 'file_comment_edited', 'file_created', 'file_deleted', 'file_public', 'file_shared', 'file_unshared', 'grid_migration_finished', 'grid_migration_started', 'group_archive', 'group_close', 'group_history_changed', 'group_open', 'group_rename', 'group_unarchive', 'im_close', 'im_created', 'im_history_changed', 'im_open', 'link_shared', 'member_joined_channel', 'member_left_channel', 'pin_added', 'pin_removed', 'reaction_added', 'reaction_removed', 'star_added', 'star_removed', 'subteam_created', 'subteam_members_changed', 'subteam_self_added', 'subteam_self_removed', 'subteam_updated', 'team_domain_change', 'team_join', 'team_rename', 'tokens_revoked', 'url_verification', 'user_change'];
eventTypes.forEach(event => {
  Object.defineProperty(SlackEvent.prototype, `is${(0, _pascalCase.default)(event)}`, {
    enumerable: false,
    configurable: true,

    get() {
      return this._rawEvent.type === event;
    }

  });
});