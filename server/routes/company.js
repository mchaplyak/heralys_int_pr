const express = require("express");

const recordRoutes = express.Router();

// connect to the database
const dbo = require("../db/conn");

// convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// get a list
recordRoutes.route("/listOfCompanies").get(function (req, res) {
    let db_connect = dbo.getDb("Heralys");
    db_connect
      .collection("Entreprise")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });


  // get companies/clients by search 
  recordRoutes.route("/listOfClients/search/:keyword").get(function (req, res) {
    let db_connect = dbo.getDb();
//    console.log("req.params.keyword", req.params.keyword);
//    console.log("req.params", req.params);

   if (req.params.keyword === "undefined"){
 //   console.log("req.params.keyword_____________undefined");
    db_connect.collection("Entreprise").find({}).toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
   }
   else
   {
        const searchParam = new RegExp(req.params.keyword, "i")

        let myquery = {$or:[ { nom_entreprise: searchParam} , 
                             { addresse_entreprise: searchParam},
                             { courriel_entreprise: searchParam},
                             { responsable: searchParam},
                             { domain: searchParam}
                            ]};

        //   console.log("myquery!!!!!!!", myquery);

          db_connect.collection("Entreprise").find(myquery).toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
          });
  }
  });




  // get a list of names of all companies
recordRoutes.route("/CompanyNames").get(function (req, res) {
  let db_connect = dbo.getDb("Heralys");
  db_connect
    .collection("Entreprise")
    .distinct("nom_entreprise", {},
    function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

  // get a single company by id
recordRoutes.route("/listOfCompanies/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("Entreprise").findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
  
  // create a new company
  recordRoutes.route("/listOfCompanies/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
     
      nom_entreprise: req.body.nom_entreprise,
      addresse_entreprise: req.body.addresse_entreprise,
      page_web: req.body.page_web,
      courriel_entreprise: req.body.courriel_entreprise,
      logo_entreprise: req.body.logo_entreprise,
      presentation_entreprise: req.body.presentation_entreprise,
      prochainContactDate: req.body.prochainContactDate,
      contacte: req.body.contacte,
      commission: req.body.commission,
      taille: req.body.taille,
      responsable: req.body.responsable,
      domain: req.body.domain,
      
      createdDate: new Date(Date.now()),
      updatedDate: new Date(Date.now()),
      
    };
    db_connect.collection("Entreprise").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });
  
// update
recordRoutes
  .route("/listOfCompanies/update/:id")
  .post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        nom_entreprise: req.body.nom_entreprise,
        addresse_entreprise: req.body.addresse_entreprise,
        page_web: req.body.page_web,
        courriel_entreprise: req.body.courriel_entreprise,
        logo_entreprise: req.body.logo_entreprise,
        presentation_entreprise: req.body.presentation_entreprise,
        prochainContactDate: req.body.prochainContactDate,
        contacte: req.body.contacte,
        commission: req.body.commission,
        taille: req.body.taille,
        responsable: req.body.responsable,
        domain: req.body.domain,
        updatedDate: new Date(Date.now()),
      },
    };
    db_connect
      .collection("Entreprise")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  });

  // delete
recordRoutes.route("/listOfCompanies/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("Entreprise").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json( obj );
  });
});


  module.exports = recordRoutes;
