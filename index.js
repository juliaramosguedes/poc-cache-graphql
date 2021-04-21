const express = require('express');
const cache = require('./cache');
const app = express();

let route = (request, response) => {
  console.log('chamou a rota');
  const result = ["a", "b", "c"];
  response.json(result);
  return result;
}

route = cache(route);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', route);

app.listen('3333',() => console.log('App running on port 3333'));
