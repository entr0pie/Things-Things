#!/bin/node

const express = require('express');
const app = express();
const PORT = 5000;

const morgan = require('morgan');
app.use(morgan('common'));

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/database.db');

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/customers/script.js', express.static('./views/script.js'))

app.get("/", (_, res) => {
  res.redirect("/customers")
});

app.get("/customers", (req, res) => {
  let search_query = req.query.search; 
  if (search_query == undefined) {search_query = "";}

  db.all(`SELECT name, surname, email, date_of_birth, phone_number FROM customers WHERE name LIKE '%${search_query}%';`, (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.render('customers', {"query": search_query, "rows": rows});
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT} | https://github.com/entr0pie/ClassicSQLInjection`)
});

