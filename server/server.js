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





app.get("/livros", (req, res) => {
  connection.query('SELECT * FROM livros WHERE ativo = 1', (err, rows, fields) => {
    if (err) throw err

    res.json({ message: rows });
  })
 
});

app.get("/carrinho", (req, res) => {
  const params = req.query;

  let iduser = params.iduser;
  connection.query('SELECT * FROM carrinho WHERE iduser = "'+iduser+'"', (err, rows, fields) => {
    if (err) throw err;

    let carrinho = rows;
    //console.log(carrinho);

    let promises = [];

    for (let i = 0; i < carrinho.length; i++) {
      promises.push(
        new Promise((resolve, reject) => {
          connection.query('SELECT * FROM livros WHERE id = '+carrinho[i].idlivro, (err, rows, fields) => {
            if (err) reject(err);
    
            carrinho[i] = rows[0];
    
            connection.query('SELECT * FROM autor WHERE id_autor = '+carrinho[i].id_autor, (err, rows, fields) => {
              if (err) reject(err);
    
              carrinho[i].id_autor = rows[0].nome;
    
              resolve(); 
            });
          });
        })
      );
    }
    
    Promise.all(promises)
      .then(() => {
        res.json({ message: carrinho });
      })
      .catch(err => {
        // Handle error
      });
  });
});



app.get("/addCarrinho", (req, res) => {
    const params = req.query;
    //console.log(params);

    let idlivro = params.idlivro;
    let iduser = params.iduser;
   

    connection.query('SELECT * FROM carrinho WHERE idlivro = '+idlivro+' AND iduser = "'+iduser+'"', (err, rows, fields) => {
      if (err) throw err
    
      
      
      if (rows.length == 0){
        connection.query('INSERT INTO carrinho (idlivro, iduser) VALUES ('+idlivro+', "'+iduser+'")', (err, rows, fields) => {
          if (err) throw err
         
          }) 

          connection.query('UPDATE livros SET ativo = 0 WHERE id = '+idlivro, (err, rows, fields) => {
            if (err) throw err
           
            }) 
  
      }
     
    })
   

   
    

    res.redirect('http://localhost:3000'); 
  });

  app.get("/removeCarrinho", (req, res) => {
    const params = req.query;
    //console.log(params);

    let idlivro = params.idlivro;
    let iduser = params.iduser;
   
    //console.log('SELECT * FROM carrinho WHERE idlivro = '+idlivro+' AND iduser = '+iduser);
    connection.query('DELETE FROM carrinho WHERE iduser = "'+iduser+'" AND idlivro = '+idlivro, (err, rows, fields) => {
      if (err) throw err
    
    

          connection.query('UPDATE livros SET ativo = 1 WHERE id = '+idlivro, (err, rows, fields) => {
            if (err) throw err
           
            }) 
  
      }
     
    )
   

   
    

    res.redirect('http://localhost:3000/carrinho'); 
  });


  app.get("/concluirRequisicao", (req, res) => {
    const params = req.query;
    let iduser= params.iduser;
    let nomeuser= params.nome;

    connection.query('SELECT * FROM carrinho WHERE iduser = "'+iduser+'"', (err, rows, fields) => {
      if (err) throw err;
  
      let carrinho = rows;

  
        let promises = [];

        for (let i = 0; i < carrinho.length; i++) {
          let datadevolucao = new Date();
        datadevolucao.setDate(datadevolucao.getDate() + 7);

        let day = String(datadevolucao.getDate()).padStart(2, '0');
        let month = String(datadevolucao.getMonth() + 1).padStart(2, '0'); 
        let year = datadevolucao.getFullYear();

        datadevolucao = day + '/' + month + '/' + year;
      
        connection.query('INSERT INTO reserva (id_livro, id_cliente, data_devolucao, email_cliente) VALUES ('+carrinho[i].idlivro+', "'+iduser+'", "'+datadevolucao+'", "'+nomeuser+'")', (err, rows, fields) => {
          if (err) throw err
         
          }) 
        }
        
        Promise.all(promises)
          .then(() => {
            connection.query('DELETE FROM carrinho WHERE iduser = "'+iduser+'"', (err, rows, fields) => {
              if (err) throw err
             
              }) 
          })
          .catch(err => {
            console.error(err);
          });
       
  
  
    });

    res.redirect('http://localhost:3000'); 
  });
  

app.listen(8000, () => {
  //console.log(`Server is running on port 8000.`);
});




