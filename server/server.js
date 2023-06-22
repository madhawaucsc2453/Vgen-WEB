const express = require('express');
const app = express();
const mysql = require('mysql');
var cors = require('cors');
const bodyParser = require('body-parser');


// Create MySQL connectio
const db = mysql.createPool({
  connectionLimit: 20,
  host: 'localhost', // Replace with your MySQL server hostname
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'react' // Replace with your MySQL database name
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
// Connect to MySQL
/*db.connect(err => {
  if (err) {
    console.error('Error connecti-ng to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});*/
app.post("/api/insertName", (req, res) => {
  const name = req.body.num;
  //res.status(200).json({elements: resultElements}); // send a json response
  //const review = req.body.review;
  //const insertSql = "INSERT INTO user (name) VALUES (?)";
  const updateSql = "UPDATE user SET name=" + name + " WHERE id = 1";
  db.query(updateSql, (err, result) => {
    console.log(updateSql);
  });
  //res.send("hello")
})
app.get('/api/data', (req, res) => {
    const  value  = req.body; // Assuming the textbox value is sent in the request body
  
    // Insert the value into the database
    const query = `SELECT name FROM user WHERE id=1`; // Replace 'my_table' and 'column_name' with your table and column names
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.send(result);
    });
  });
app.listen(5001, () => { console.log("Server listening on port 5000") })
