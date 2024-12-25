const express = require("express");

const app = express();

app.use(epxress.json());

app.get("/", (req, res) {
    res.json({
	success : true , 
	message : " hi there" 
	})
});

app.listen(3000)
