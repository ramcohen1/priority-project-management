const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const userRoute = require('./routers/user')

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRoute)

app.listen(3000, () => console.log('listen on port 3000'))