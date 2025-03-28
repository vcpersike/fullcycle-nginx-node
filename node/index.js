const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

function connectWithRetry(retries = 5, delay = 2000) {
  const connection = mysql.createConnection(config);

  connection.connect((err) => {
    if (err) {
      if (retries > 0) {
        console.log(`MySQL não está pronto. Tentando novamente em ${delay}ms...`);
        setTimeout(() => connectWithRetry(retries - 1, delay), delay);
      } else {
        console.error('Não foi possível conectar ao MySQL após várias tentativas.');
        process.exit(1);
      }
    } else {
      console.log('Conectado ao MySQL com sucesso!');

      const createTable = `CREATE TABLE IF NOT EXISTS people (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );`;
      connection.query(createTable);

      app.get('/', (req, res) => {
        const name = 'Victor Persike';
        connection.query(`INSERT INTO people(name) VALUES(?)`, [name]);

        connection.query('SELECT name FROM people', (err, results) => {
          if (err) throw err;
          const list = results.map(row => `<li>${row.name}</li>`).join('');
          res.send(`<h1>Full Cycle Rocks!</h1><ul>${list}</ul>`);
        });
      });

      app.listen(port, () => console.log(`App running on port ${port}`));
    }
  });
}

connectWithRetry();
