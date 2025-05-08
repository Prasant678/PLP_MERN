const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const port = 5000
const ConnectToMongo = require('./db')

dotenv.config({ path: "config.env" })

ConnectToMongo();

app.use(cors())
app.use(express.json())
app.use('/api/v1/auth', require('./routes/Auth.js'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})