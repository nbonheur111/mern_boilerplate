const express = require('express')
const path = require('path');

const app = express()

// server build folder
app.use(express.static(path.join(__dirname, 'build')));




app.get('/test_route', (req, res) => {
    res.send("good route")

})


app.listen(5000, () => {
    console.log(`Server is Listening on 5000...`)
})