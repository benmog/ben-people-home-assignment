const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const api = require('./index');

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(cors());
app.use('/api', api);
app.use('/hi', (req, res) => {res.send('Hey There')})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})