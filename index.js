const express = require("express")
const app = express()
const fetch = require("node-fetch")

app.get("/", (req, res) => {
  let url = "https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=t&n=1";

	fetch(url).then(data => data.json())
	.then(result => res.send(result))
})

app.listen(process.env.PORT || 3000, console.log("ok"))