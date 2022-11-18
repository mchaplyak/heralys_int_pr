const express = require("express");

const recordRoutes = express.Router();

// connect to the database
const dbo = require("../db/conn");

// convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// get a list
recordRoutes.route("/listOfCandidates").get(function (req, res) {
  let db_connect = dbo.getDb("Heralys");
  db_connect
    .collection("Candidat")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// create a new candidate
recordRoutes.route("/listOfCandidates/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    prenom_candidat: req.body.prenom_candidat,
    nom_candidat: req.body.nom_candidat,
    addresse_candidat: req.body.addresse_candidat,
    courriel_candidat: req.body.courriel_candidat,
    date_arriver: req.body.date_arriver,
    date_fin_permis_travail: req.body.date_fin_permis_travail,
    etudiant: req.body.etudiant,
  };
  db_connect.collection("Candidat").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// delete
recordRoutes.route("/listOfCandidates/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("Candidat").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
