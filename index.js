#!/bin/node

const express = require('express');
const app = express();

const PORT = 5000;

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/database.db');

app.get("/", (_, res) => {
  res.redirect("/costumers")
});

app.get("/costumers", (req, res) => {
  const search_query = req.query.search;
  db.all(`SELECT * FROM customers WHERE name LIKE '%${search_query}%';`, (err, rows) => {
    if (err) {
      res.status(500).json({"error": err.message});
    } else {
      res.json(rows);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT} | https://github.com/entr0pie/ClassicSQLInjection`)
});

