const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const pool = require('./db.config');
const db = require('./app/models');

db.sequelize.sync()
  .then(() => {
    console.log("database got Synced");
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Hello, world test" });
});

require('./app/routes/data.route')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server listening at port ${PORT}`)
})