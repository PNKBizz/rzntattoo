const express = require('express')
const cors = require('cors')
const cloudinaryUpload = require('vue-cloudinary-manager')
const router = require('./router')

const app = express()
const cloudName = 'drwukl5fv'
const apiKey = '792578474857178'

app.use(express.json())
app.use(cors())

app.use(cloudinaryUpload(cloudName, apiKey))
app.use('/', router)

app.use(express.static(`${__dirname}/`))
app.listen(process.env.PORT || 4001, () => {
    console.log('App listening on port 4001')
})

