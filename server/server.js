const { myFunction } = require('./sample');
const express = require('express');
const app = express();
const mysql = require('mysql');
var cors = require('cors');
const bodyParser = require('body-parser');


// Create MySQL connectio
const db = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL server hostname
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'react' // Replace with your MySQL database name
});
var data = myFunction();
console.log(data);
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecti-ng to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});
app.post("/api/registeruser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //res.status(200).json({elements: resultElements}); // send a json response
  //const review = req.body.review;
  const insertSql = 'INSERT INTO users(email,password) VALUES("'+email+'","'+password+'")';
  //const updateSql = "UPDATE user SET name=" + name + " WHERE id = 35";
  db.query(insertSql, (err, result) => {
    if(!err){
      res.send("Successfull");
    }else{
      console.log(err);
    }
  });
  //res.send(email)
})
app.post("/api/signinuser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //res.status(200).json({elements: resultElements}); // send a json response
  //const review = req.body.review;
  const selectQuery ='SELECT password,type from users WHERE email="'+email+'"';
  //const insertSql = 'INSERT INTO users(email,password) VALUES("'+email+'","'+password+'")';
  //const updateSql = "UPDATE user SET name=" + name + " WHERE id = 35";
  db.query(selectQuery, (err, result) => {
    if(!err){
      if(result[0].password==email){
        //console.log(result[0].type)
        res.send(result[0].type);
      }
    }else{
      console.log(err);
    }
  });
  //res.send(email)
})
app.get('/api/data', (req, res) => {
  //const  value  = req.body; // Assuming the textbox value is sent in the request body

  // Insert the value into the database
  const query = `SELECT id FROM users WHERE name= "Avishka"`; // Replace 'my_table' and 'column_name' with your table and column names
  db.query(query, (err, result) => {
    //console.log(result);
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.send(result);
  });
});
app.listen(5001, () => { console.log("Server listening on port 5000") })
