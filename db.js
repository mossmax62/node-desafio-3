const { Pool } = require('pg');
const dotenv = require('dotenv').config();

const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

module.exports = {db};