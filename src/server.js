const http = require('http');
require("dotenv").config();
const port = process.env.APP_LISTEN_PORT;
const env = process.env.APP_ENV;

const { client } = require ("./db.js");

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    client.query("SELECT content FROM web_content WHERE page LIKE 'hello';", (err, querry_result) => {
	if (err) throw err
	console.log(querry_result)
	res.send(querry_result.rows[0].content + " - environment is: " + env);
    });
})

app.get('/health_check', (req, res) => {
    res.send("OK")
})

app.listen(port, () => {
  console.log(`Hello app listening on port ${port}`)
})
