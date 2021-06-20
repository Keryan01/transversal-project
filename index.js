require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const bp = require("body-parser");
const app = express();
const port = process.env.PORT;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let con = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/allUsers", function (req, res) {
  con.query("SELECT * FROM user", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post("/addUser", function (req, res) {
  let postData = req.body;
  con.query("INSERT INTO user SET ?", postData, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

app.post("/addVotation", function (req, res) {
  let postData = req.body;
  con.query("INSERT INTO votation SET ?", postData, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

app.post("/addTag", function (req, res) {
  let postData = req.body;
  con.query("INSERT INTO tag SET ?", postData, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/displayvote", function (req, res) {
  con.query("SELECT * FROM votation", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/getAnswers/:votation_id", function (req, res) {
  con.query("SELECT * FROM answer WHERE votation_id = ?", [req.params.votation_id], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/searchTitle/:title', function (req, res) {

  con.query("select * FROM votation where title LIKE "+"'%"+req.params.title+"%'", [req.params.title], function (err, results) {

    if (err) throw err;
    res.send(results);
  });
});

app.get('/searchContent/:content', function (req, res) {

  con.query("select * FROM votation where content LIKE "+"'%"+req.params.content+"%'", [req.params.content], function (err, results) {

    if (err) throw err;
    res.send(results);
  });
});

app.get("/getVotation/:votation_id", function (req, res) {
  con.query("SELECT * FROM votation,tag WHERE tag.id=votation.tag_id AND votation.id=?", [req.params.votation_id], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/getVotationResult/:votation_id", function (req, res) {
  con.query("SELECT * FROM answer, result WHERE answer.votation_id=result.votation_id", [req.params.votation_id], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
