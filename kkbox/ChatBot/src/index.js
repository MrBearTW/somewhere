const express = require('express')
const bodyParser = require('body-parser')
const {LineBot} = require('bottender')
const {registerRoutes} = require('bottender/express')

const {lineHandler} = require('./handler')
const config = require('../config')

const server = new express()

server.use(
    bodyParser.json({
        verify: (req, res, buf) => {
            req.rawBody = buf.toString()
        }
    })
)

const bots = {
    line: new LineBot(config.line).onEvent(lineHandler)
}

registerRoutes(server, bots.line, {path: '/line'})

server.listen(process.env.PORT || 5000, () => {
    console.log('server is listening on 5000 port...')
})