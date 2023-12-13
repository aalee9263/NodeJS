

import express from 'express'
const app = express()
const port = 5001
import path from 'path'

app.get('/weather', (req, res) => {

    console.log(`${req.ip} is asking for some water`)
    res.send('Here is some water for you')
})

const __dirname = path.resolve();
console.log("__dirname:", __dirname)
console.log("__dirname:", path.join(__dirname, "/web"))

app.get('/', express.static(path.join(__dirname,"/web")))
app.use('/*', express.static(path.join(__dirname,"/web")))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})