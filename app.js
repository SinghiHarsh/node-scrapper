'use strict'

import Express from 'express'
import bodyParser from 'body-parser'
import startServer from './startServer'
import cors from 'cors'
import Router from './Routes'

const app = new Express()
const BODY_LIMIT = '5mb'

app.use(cors())
app.use(bodyParser.json({ limit: BODY_LIMIT }))
app.use(bodyParser.urlencoded({ limit: BODY_LIMIT, extended: true }))

// Start Server
startServer(app)

// APIs
app.use('/', Router)

module.export = app