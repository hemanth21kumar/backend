const pg = require('pg');
let client = new pg.Client({
    user: 'postgres',
    host: 'database-1.cvtuvldhfhgg.us-east-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'frisles.india',
    port: 5432,
});

client.connect((err) =>{
    if(err){
        console.log("err.message", err.message);
        return;
    }
    console.log("database connected frisles")
});

module.exports = client;