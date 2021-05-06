require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bp = require('body-parser');
const app = express();
const port = process.env.PORT;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let con = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected');
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/allClients', function (req, res) {
    con.query('SELECT * FROM client', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.post('/addClient', function (req, res) {
    let postData = req.body;
    con.query('INSERT INTO client SET ?', postData, function (err, results, fields) {
        if (err) throw err;
        res.send(results);
    });
});