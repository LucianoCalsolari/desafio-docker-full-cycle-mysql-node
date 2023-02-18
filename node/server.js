const express = require('express')
const faker = require('faker')
const app = express()
const port = process.env.APP_PORT || 3000

const config = {
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'pessoadb',
}

app.get('/', (req, res) => {
  const mysql = require('mysql')
  const connection = mysql.createConnection(config)
  const name = faker.name.findName()

  connection.query(
    "CREATE TABLE IF NOT EXISTS pessoas (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255) NOT NULL) ENGINE=INNODB"
  );
  connection.query(`INSERT INTO pessoas (nome) VALUES ( '${name} da Silva')`)
    
  let query = 'SELECT nome FROM pessoas';
  connection.query(`SELECT nome FROM pessoas`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
      </ol>
    `)
  })
})

app.listen(port, () => {
  console.log('Up on:', port);
})