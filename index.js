const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Palvellaan staattiset tiedostot public-kansiosta
app.use(express.static(path.join(__dirname, 'public')));

// Henkilökunnan JSON-tietojen käsittely
app.get('/henkilokunta', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'henkilokunta.json'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Virhe datan lataamisessa');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Palvelin käynnistetään portissa 3000
app.listen(3000, () => {
  console.log('Palvelin käynnissä portissa 3000');
});