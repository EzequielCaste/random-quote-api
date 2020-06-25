const express = require("express")
const app = express()
const fetch = require("node-fetch")
const cors = require("cors")

app.use(cors())

app.get("/:num", (req, res) => {
  let url = "https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=t&n=" + req.params.num;

	fetch(url)
		.then(data => data.json())
		.then(result => res.json(result))		
})

app.get("/", (req, res) => {
	res.redirect("/1");
})

app.listen(process.env.PORT || 3000, console.log("ok"))