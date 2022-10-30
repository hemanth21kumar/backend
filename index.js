const express = require('express');
const app = express();
const pool = require('./db');

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Hello, world" });
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM sample ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}
app.get('/users', getUsers);

// console.log("pool", pool)
// const port = 3800;
app.listen(PORT, () =>{
    console.log(`Server listening at port ${PORT}`)
})