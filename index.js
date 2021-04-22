const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', routes.Query.getList);

app.listen('3333',() => console.log('App running on port 3333'));
