const express = require('express')
const cors = require('cors')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', router)

app.use(express.static(`${__dirname}/`))
app.listen(process.env.PORT || 4001, () => {
    console.log('App listening on port 4001')
})

