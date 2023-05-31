const pool = require('pg').Pool;
require('dotenv').config({path: __dirname + '/.env'})

const Pool = new pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: process.env.PASSWORD,
    port: 5432
});

module.exports = Pool;