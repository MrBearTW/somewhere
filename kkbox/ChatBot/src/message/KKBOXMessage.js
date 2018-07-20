const Message = require('./Message')
const {Line} = require('messaging-api-line')

module.exports = class KKBOXMessage extends Message {
    constructor(data) {
        super(data)
    }

    toLineMessage() {
        const columns = this.data.map(el => {
            return {
                thumbnailImageUrl: el.images === undefined ? el.album.images[1].url : el.images[1].url,
                title: el.name === undefined ? el.title : el.name,
                text: el.description === undefined || el.description === '' ? ' ' : el.description.slice(0, 60),
                actions: [{
                    type: 'uri',
                    label: 'Open in KKBOX',
                    uri: el.url
                }]
            }
        }).slice(0, 10)
        return Line.createCarouselTemplate('為您播放', columns, {imageAspectRatio: 'square', imageSize: 'cover'})
    }

    toMessengerMessage() {
        const elements = this.data.map(el => {
            return {
                title: el.name === undefined ? el.title : el.name,
                subtitle: el.description === undefined || el.description === '' ? ' ' : el.description.slice(0, 60),
                image_url: el.images === undefined ? el.album.images[1].url : el.images[1].url,
                default_action: {
                    type: "web_url",
                    url: el.url,
                    messenger_extensions: true,
                    webview_height_ratio: "full"
                }
            }
        }).slice(0, 4)
        return {
            attachment: {
                type: 'template',
                payload: {
                    "template_type": "list",
                    "top_element_style": "large",
                    "elements": elements
                }
            }
        }
    }
}