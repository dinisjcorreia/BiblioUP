const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let value;

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'iebd'
})

connection.connect()

connection.query('SELECT * FROM livros', (err, rows, fields) => {
  if (err) throw err

  
  
  value = rows;
  console.log('The solution is: ', value)
})



app.get("/livros", (req, res) => {
  res.json({ message: value });
});

app.get("/addCarrinho", (req, res) => {
    const params = req.query;
    console.log(params);

    let idlivro = params.idlivro;
    let iduser = params.iduser;



    connection.query('INSERT INTO carrinho (idlivro, iduser) VALUES ('+idlivro+', '+iduser+')', (err, rows, fields) => {
    if (err) throw err
    connection.end()
    }) 

    res.redirect('http://localhost:3000'); 
  });

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});




