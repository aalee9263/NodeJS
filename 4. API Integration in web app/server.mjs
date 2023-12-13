

import express from 'express'
const app = express()
const port = 3000
import path from 'path'

app.get('/weather', (req, res) => {

    console.log(`${req.ip} is asking for some water`)
    res.send('Here is some water for you')
})

const __dirname = path.resolve();
console.log("__dirname:", __dirname)
console.log("__dirname:", path.join(__dirname, "/web"))
    // 8. app.get('/', express.static(path.join(__dirname,"/web")))
    //  app.use('/*', express.static(path.join(__dirname,"/web")))


app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, 'public')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})