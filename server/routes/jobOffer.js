const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

// get a list
recordRoutes.route("/joHistory").get(function (req, res) {
  let db_connect = dbo.getDb("Heralys");
  db_connect
    .collection("OffresEmploi")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// find by id
recordRoutes.route("/joHistory/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("OffresEmploi")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// create
recordRoutes.route("/addAnOffer").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    titre_offre: req.body.titre_offre,
    desc_taches: req.body.desc_taches,
    exigences: req.body.exigences,
    atouts: req.body.atouts,
    conditions: req.body.conditions,
  };
  db_connect.collection("OffresEmploi").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// delete
recordRoutes.route("/joHistory/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("OffresEmploi").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
