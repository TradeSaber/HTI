import express from 'express'
import bodyParser from 'body-parser'
import { genHandler } from './handlers'

const app = express()
const port = process.env.PORT || '6000'

app.use(bodyParser.json())

app.get('/hti', genHandler)

app.listen(port, err => {
    if (err) return console.error("Failed to start HTI web server: " + err)
    return console.log("HTI web server listening on " + port)
})