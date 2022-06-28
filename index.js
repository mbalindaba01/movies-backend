const express = require('express')
const router = require('express').Router()
const app = express()
const route = require('./routes/movieRoutes')

app.use(express.json())

router.get('/', (req, res) => {
    res.send('it works')
})

app.use('/movies', route)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server running at port ' + PORT))