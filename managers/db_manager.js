//model layer
//since dbmanager.js and database.js have explicit dependencies on a real database.
//unit testing will be foregoed and integration test is done directly with a mock database
//drive for routes are difficult to mplement so we perform a big bang integration test with a
//mock database

const { getPool } = require('../database/database');
const pool = getPool();

//thies method would be continued inside queue_manager.js via a .then method
//chain promising occurs in queue_manager.js
module.exports.enqueue = function () {
    return pool
        .query(
            `INSERT INTO queue_tab (id, served) 
            VALUES (DEFAULT, DEFAULT ) 
            RETURNING *`,
        )
        .then((result) => result.rows[0].id);
};
//returns the result of the sql query
module.exports.dequeue = function () {
    return pool
        .query(
            `UPDATE queue_tab
            SET served = true
            WHERE id = (
                SELECT id FROM queue_tab
                WHERE not served ORDER BY id LIMIT 1
            )
            RETURNING *`,
        )
        .then((result) => (!result.rows.length ? 0 : result.rows[0].id));
};