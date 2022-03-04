const { Client } = require('pg')

require("dotenv").config()

const client = new Client({
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_SERVICE_PORT,
    host: process.env.POSTGRES_SERVICE_HOST,
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

module.exports = { client };
