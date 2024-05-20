const express = require('express');
const { createPool } = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'AdSte10000d',
  database: 'fudbaldb',
  connectionLimit: 10
});

app.post('/api/players', (req, res) => {
  const { ImeIgraca, DatumRodjenjaIgraca, VisinaIgraca, PozicijaIgraca, NacionalnostIgraca, TezinaIgraca } = req.body;

  pool.query(
    'INSERT INTO igrac (ImeIgraca, DatumRodjenjaIgraca, VisinaIgraca, PozicijaIgraca, NacionalnostIgraca, TezinaIgraca) VALUES (?, ?, ?, ?, ?, ?)',
    [ImeIgraca, DatumRodjenjaIgraca, VisinaIgraca, PozicijaIgraca, NacionalnostIgraca, TezinaIgraca],
    (err, results) => {
      if (err) {
        console.error('Error inserting into database:', err);
        res.status(500).send('Error inserting into database');
      } else {
        res.status(200).send('Player added successfully');
      }
    }
  );
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
