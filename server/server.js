const { myFunction } = require('./sample');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./api/UserRoutes');

var data = myFunction();
console.log(data);
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',userRoutes);
// app.get('/api/data', (req, res) => {
//   //const  value  = req.body; // Assuming the textbox value is sent in the request body

//   // Insert the value into the database
//   const query = `SELECT id FROM users WHERE name= "Avishka"`; // Replace 'my_table' and 'column_name' with your table and column names
//   db.query(query, (err, result) => {
//     //console.log(result);
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.status(500).json({ error: 'Internal server error' });
//       return;
//     }
//     res.send(result);
//   });
// });
app.listen(5001, () => { console.log("Server listening on port 5001") })
