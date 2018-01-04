const express = require('express')
const fs = require('fs')
const jsonfile = require('jsonfile')
const { promisify } = require('util')

const readJsonAsync = promisify(jsonfile.readFile)
const writeJsonAsync = promisify(jsonfile.writeFile)
const readDirAsync = promisify(fs.readdir)

const router = express.Router()

router.get('/api/masters', async (req, res) => {
    try {
        const data = await readJsonAsync('./src/assets/masters.json')
        res.json(data)
    } catch (err) {
        if (err && process.env.NODE_ENV !== 'production') console.error(err)
    }
})

router.get('/api/update', async (req, res) => {
    try {
        const masters = await readDirAsync('./src/assets/gallery')

        const galleryPromises = masters.map(master => readDirAsync(`./src/assets/gallery/${master}`))
        const galleryImages = await Promise.all(galleryPromises)
        const toWrite = masters.map((master, i) => ({ name: master, gallery: galleryImages[i].filter(file => file !== 'master.jpg' && file !== 'thumbs') }))
        await writeJsonAsync('./src/assets/masters.json', { masters: toWrite })
        res.status(200).send({ message: 'done' })
    } catch (error) {
        if (process.env.NODE_ENV !== 'production') console.error(error)
        res.status(500).send({ error })
    }
})

module.exports = router
