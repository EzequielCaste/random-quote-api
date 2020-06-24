const express = require("express")
const app = express()
const fetch = require("node-fetch")
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  let url = "https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=t&n=1";

	fetch(url).then(data => res.status(400).send(data))
	
})

app.listen(process.env.PORT || 3000, console.log("ok"))