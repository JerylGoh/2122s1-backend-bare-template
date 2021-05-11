//model layer
//unit testing done here

const dbManager = require('./db_manager');

//enqueue
//chain promised continued from db_manager.js, a json object { customer_id: customerId }
//is returned to the user
module.exports.enqueue = function () {
    return dbManager.enqueue().then((customerId) => ({ customer_id: customerId }));
};

//dequeue
module.exports.dequeue = function () {
    return dbManager.dequeue().then((customerId) => ({ customer_id: customerId }));
};