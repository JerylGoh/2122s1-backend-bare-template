//model layer

const { getPool } = require('../database/database');
const pool = getPool();

//thie method would be continued inside queue_manager.js via a .then method
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