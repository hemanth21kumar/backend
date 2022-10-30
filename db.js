const pg = require('pg');
let client = new pg.Client({
    user: 'postgres',
    host: 'frisles.caie7fwijqmj.us-east-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'FrislesDB',
    port: 5432,
});

client.connect((err) =>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("database connected")
});

module.exports = client;