const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    password:"Taslim@1995",
    // database:"test",
    database:"quizapp",
    host:"localhost",
    port:"5432",
});

module.exports = pool;