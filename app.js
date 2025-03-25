const express = require('express')
const app = express()
const port = 3000

app.get('/student', (req, res) => {

    res.status(200).json({
        msg: 'Hello i am get student api',
        studname:"Ram"
    })
})
app.get('/employee', (req, res) => {

    res.status(200).json({
        msg: 'Hello i am get employee api',
        studname:"Amar"
    })
})
app.post('/', (req, res) => {

    res.status(201).json({
        msg: 'This is post api'
    })
})

app.put('/', (req, res) => {

    res.status(201).json({
        msg: 'This is put api'
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})