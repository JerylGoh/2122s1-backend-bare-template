//require the express api which gives users access to rest api methods
const express = require('express');

//require http protocol which defines the rules of how the frontend contacts
//the backend
const http = require('http');

const app = express();
const server = http.Server(app);

module.exports = { app, server };