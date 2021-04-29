//database layer


//we are still referencing data from the environment, with dotenv, you can load the 
//values inside the .env file into the environment
require('dotenv').config();

//load the values inside the .env file into the environment
module.exports.DB_CONFIG = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    max: process.env.DB_MAX_POOL_SIZE || 20,
};