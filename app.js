const bluzelle = require('bluzelle');
const uuidv1 = require('uuid/v1');
const uuidv4 = require('uuid/v4');

const Joi = require('joi');

//load the express module
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); //support URL-encoded bodies
app.use(bodyParser.json()); //support json encoded bodies


// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));

const UUID = uuidv4();

console.log(`UUID = ${UUID}`);

bluzelle.connect('ws://13.78.131.94:51011', UUID);
