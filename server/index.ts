const path = require("path")
const express = require('express')
const app = express()
const port = 3000

const pathholder = path.join(__dirname, '../public');
app.use(express.static(pathholder))

app.listen(port, () => console.log(`App listening on port ${port}!`)) 