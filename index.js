const express = require("express")
const app = express()
const fetch = require("node-fetch")
const cors = require("cors")

app.use(cors())

app.get("/", (req, res) => {
  let url = "https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=t&n=1";

	fetch(url)
		.then(data => data.json())
		.then(result => res.status(200).send(result))

	
})

app.listen(process.env.PORT || 3000, console.log("ok"))