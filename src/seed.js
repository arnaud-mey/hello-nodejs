const { readFileSync } = require('fs');
var path = require('path');
const { client } = require ("./db.js");

const sqlSeed = readFileSync(path.resolve(__dirname, 'seed.sql')).toString();

client.query(sqlSeed, (err, res) => {
  if (err) throw err
  console.log(res)
  client.end()
})
