const dbManager = require('./db_manager');

//enqueue
module.exports.enqueue = function () {
    return dbManager.enqueue().then((customerId) => ({ customer_id: customerId }));
};

//dequeue
module.exports.dequeue = function () {
    return dbManager.dequeue().then((customerId) => ({ customer_id: customerId }));
};