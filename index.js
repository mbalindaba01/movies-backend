const express = require('express')
const app = express()
const route = require('./routes/movieRoutes')

app.use(express.json())

// app.use('/movies', route)
app.get('/', (req, res) => {
    res.send('It works!')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server running at port ' + PORT))