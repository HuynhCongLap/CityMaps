const express = require('express')
const app = express()

var path = require("path");

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+"/../Client/index.html"))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.use("/dist", express.static(path.join(__dirname, "/../Client/dist")))
