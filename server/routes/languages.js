const express = require("express");

const recordRoutes = express.Router();

// connect to the database
const dbo = require("../db/conn");

// convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// get a list
recordRoutes.route("/dbLangType").get(function (req, res) {
  let db_connect = dbo.getDb("Heralys");
  db_connect
    .collection("TypeLangue")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// get a single
recordRoutes.route("/dbLangType/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("TypeLangue").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// create
recordRoutes.route("/dbLangType/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
  };
  db_connect.collection("TypeLangue").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// delete
recordRoutes.route("/dbLangType/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("TypeLangue").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
