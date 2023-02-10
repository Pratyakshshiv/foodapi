const express = require('express')
const mongoDB = require('./db')
const app = express()
const port = process.env.PORT || 5000;


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header(
        "Access-control-Allow-Headers",
        "origin, X-Requested-Width, Content-Type, Accept"
    )
    next()
})

app.use(express.json())

mongoDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', require("./Routes/CreateUser"))
app.use('/api', require("./Routes/DisplayData"))
app.use('/api', require("./Routes/OrderData"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})