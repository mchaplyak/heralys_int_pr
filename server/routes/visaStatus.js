const express = require("express");

const recordRoutes = express.Router();

// connect to the database
const dbo = require("../db/conn");

// convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// get a list of all the records
recordRoutes.route("/dbVs").get(function (req, res) {
  let db_connect = dbo.getDb("Heralys");
  db_connect
    .collection("StatusVisa")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// get a single by id
recordRoutes.route("/dbVs/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("StatusVisa").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// create
recordRoutes.route("/dbVs/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    nom: req.body.name,
  };
  db_connect.collection("StatusVisa").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// delete
recordRoutes.route("/dbVs/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("StatusVisa").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
