const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json(["a", "b", "c"])
})

app.listen('3333',() => console.log('App running on port 4444'))
