//database layer

//pool is used over client(postgres) to establish connection with
//the database
const { Pool } = require('pg');
//require commons.js which specifies the information needed to establish
//a connection with the database
const { DB_CONFIG } = require('../commons');


let pool;
module.exports.getPool = function () {
    if (!pool) pool = new Pool(DB_CONFIG);
    return pool;
};