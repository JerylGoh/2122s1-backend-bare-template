//controller layer

//require express to use restapi methods
const express = require('express');

//require queue_manager.js which contains methods which returns json objects
//of enqueue and dequeue
const queueManager = require('../managers/queue_manager');

const router = express.Router();

// enqueue
//when a post request is made, this mf gets run, router.post contains the mf which is an arrow function which gets run
router.post('/', (req, res, next) =>
    queueManager
        .enqueue()
        .then((response) => res.status(201).json(response)) //a json object is returned as shown in queue_manager.js
        .catch(next),
);

//dequeue
router.delete('/', (req, res, next) =>
    queueManager
        .dequeue()
        .then((response) => res.json(response))
        .catch(next),
);


module.exports = router;