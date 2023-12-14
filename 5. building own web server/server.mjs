
import express from 'express'
import path from 'path'

    const app = express()
    const port = process.env.PORT || 5001

    app.get('/water', (req, res) => {
        console.log(`${req.ip} is asking for some water`)
    res.send('Here is some water for you')
    })

    app.get('/food', (req, res) => {
        console.log(`${req.ip} is asking for some food`)
    res.send('Here is some food for you')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })


const __dirname = path.resolve();

console.log("__dirname:", __dirname)
console.log("__dirname:", path.join(__dirname, "/web-page"))

app.get('/', express.static(path.join(__dirname,"/web-page")))
app.use('/*', express.static(path.join(__dirname,"/web-page")))