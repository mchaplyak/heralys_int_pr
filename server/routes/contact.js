const express = require("express");

const recordRoutes = express.Router();

// connect to the database
const dbo = require("../db/conn");

// convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// get a list of the contacts
recordRoutes.route("/listOfContacts").get(function (req, res) {
    let db_connect = dbo.getDb("Heralys");
    // console.log("myquery!!!!");
    db_connect
      .collection("Contact")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  // get a single contact by id
recordRoutes.route("/listOfContacts/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("Contact").findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
  


  // get contacts by search 
  recordRoutes.route("/listOfContacts/search/:keyword").get(function (req, res) {
    let db_connect = dbo.getDb();
   console.log("req.params.keyword", req.params.keyword);
   console.log("req.params", req.params);

   if (req.params.keyword === "undefined"){
    console.log("req.params.keyword_____________undefined");
    db_connect.collection("Contact").find({}).toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
   }
   else
   {
        const serchParam = new RegExp(req.params.keyword, "i")

        let myquery = {$or:[ { client: serchParam} , 
                             { nom_contact: serchParam},
                             { prenom_contact: serchParam},
                             { courriel_contact: serchParam},
                             { lastDate: serchParam}
                            ]};

          console.log("myquery!!!!!!!!!!", myquery);

          db_connect.collection("Contact").find(myquery).toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
          });
  }
  });


  //search v2
  recordRoutes.route("/listOfContacts2").get(function (req, res) {
    let db_connect = dbo.getDb();
    const { q } = req.query;
    const keys = ["client", "nom_contact", "prenom_contact", "courriel_contact"];

    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };

    console.log("qqq=",q);

     db_connect
    .collection("Contact")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;

      res.json(search(result))

      // res.json(result);
    });

  //  console.log("dataFromContacts=",dataFromContacts);

  //  res.json(search(dataFromContacts).slice(0, 10))

    
    // db_connect.collection("Contact").find(q).toArray(function (err, result) {
    //   if (err) throw err;
    //   res.json(result);

    //   console.log("res.json(result)=",res.json(result));
    // });

  //   q ? res.json(search(dataFromContacts).slice(0, 10)) : res.json(dataFromContacts.slice(0, 10));
    
  });





  // create a new contact
  recordRoutes.route("/listOfContacts/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
     
      nom_contact: req.body.nom_contact,
      prenom_contact: req.body.prenom_contact,
      addresse_contact: req.body.addresse_contact,
      telephone_contact: req.body.telephone_contact,
      courriel_contact: req.body.courriel_contact,
      etat: req.body.etat,
      typePoste: req.body.typePoste,
      source: req.body.source,
      client: req.body.client,
      perception: req.body.perception,
      status: req.body.status,
      notes: req.body.notes,
      contacte: req.body.contacte,
      ou: req.body.ou,
      lastDate: req.body.lastDate,
      createdDate: new Date(Date.now()),
      updatedDate: new Date(Date.now()),
      
      
    };
// console.log("myobj===",myobj);

    db_connect.collection("Contact").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });
  
// update
recordRoutes
  .route("/listOfContacts/update/:id")
  .post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        nom_contact: req.body.nom_contact,
        prenom_contact: req.body.prenom_contact,
        addresse_contact: req.body.addresse_contact,
        telephone_contact: req.body.telephone_contact,
        courriel_contact: req.body.courriel_contact,
        etat: req.body.etat,
        typePoste: req.body.typePoste,
        source: req.body.source,
        client: req.body.client,
        perception: req.body.perception,
        status: req.body.status,
        notes: req.body.notes,
        contacte: req.body.contacte,
        ou: req.body.ou,
        lastDate: req.body.lastDate,
        updatedDate: new Date(Date.now()),
      },
    };
    db_connect
      .collection("Contact")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  });

  // delete
recordRoutes.route("/listOfContacts/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("Contact").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});


  module.exports = recordRoutes;
