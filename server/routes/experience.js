const express = require("express");

const recordRoutes = express.Router();

// connect to the database
const dbo = require("../db/conn");

// convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// get a list of all the records
recordRoutes.route("/dbExp").get(function (req, res) {
  let db_connect = dbo.getDb("Heralys");
  db_connect
    .collection("Experience")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// get a single by id
recordRoutes.route("/dbExp/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("Experience").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// create
recordRoutes.route("/dbExp/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    nom: req.body.name,
  };
  db_connect.collection("Experience").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// delete
recordRoutes.route("/dbExp/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("Experience").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
