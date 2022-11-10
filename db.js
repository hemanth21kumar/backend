const pg = require('pg');
let client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

client.connect((err) =>{
    if(err){
        console.log("err.message", err.message);
        return;
    }
    console.log("database connected")
});

module.exports = client;