// const { getPool } = require('./database/database.js');
// const dbManager = require('./managers/db_manager');

// const pool = getPool();

// //enqueue
// /*
//     adding people to the back of the queue
// */
// dbManager
//     .enqueue()
//     .then(function (queueId) {
//         console.log(`First enqueue: ${queueId}`);
//         return dbManager.enqueue();
//     })
//     .then(function (queueId) {
//         console.log(`Second enqueue: ${queueId}`);
//         return dbManager.enqueue();
//     })
//     .then(function (queueId) {
//         console.log(`Third enqueue: ${queueId}`);
//         return pool.query('select * from queue_tab');
//     })
//     .then(function (result) {
//         console.log(`Should see 3 rows, Number of rows: ${result.rows.length}`);
//     });

// //dequeue
// /*
//     removing people from the front of the queue after they have been served
// */
// dbManager
//     .dequeue()
//     .then(function (queueId) {
//         console.log(`First served ${queueId}`);
//         return dbManager.dequeue();
//     })
//     .then(function (queueId) {
//         console.log(`Second served ${queueId}`);
//         return pool.query(`select * from queue_tab`);
//     })
//     .then(function (response) {
//         console.log(response.rows);
//     });

//check the new rows have been added
const { getPool } = require('./database/database');
getPool()
    .query('select * from queue_tab')
    .then((response) => response.rows)
    .then(console.log);