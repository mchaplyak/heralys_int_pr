import React, { useEffect, useState } from "react";

export default function AddCandidate() {
  const [form, setForm] = useState({
    prenom_candidat: "",
    nom_candidat: "",
    addresse_candidat: "",
    courriel_candidat: "",
    date_arriver: "",
    date_fin_permis_travail: "",
    etudiant: "",
    type_visa: "",
  });

  //update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const [records, setRecords] = useState([]);

  const Record = (props) => <option>{props.record.nom}</option>;

  // fetches the records from the database (TYPE_VISA)
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/dbTov/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // map out the records on the table
  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }

  function displayWorkVisaForm() {
    return <div>Hello</div>;
  }

  //handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newCandidate = { ...form };

    await fetch("http://localhost:5000/listOfCandidates/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCandidate),
    }).catch((error) => {
      window.alert("Candidate was added!");
      return;
    });

    setForm({
      prenom_candidat: "",
      nom_candidat: "",
      addresse_candidat: "",
      courriel_candidat: "",
      date_arriver: "",
      date_fin_permis_travail: "",
      etudiant: "",
      type_visa: "",
    });
  }

  return (
    <div className="container-fluid" style={{ marginTop: 20 }}>
      <h3>Add Candidate</h3>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Prenom</label>
          <input
            type="text"
            className="form-control"
            id="prenom_candidat"
            value={form.prenom_candidat}
            onChange={(e) => updateForm({ prenom_candidat: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            className="form-control"
            id="nom_candidat"
            value={form.nom_candidat}
            onChange={(e) => updateForm({ nom_candidat: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Adresse</label>
          <input
            type="text"
            className="form-control"
            id="addresse_candidat"
            value={form.addresse_candidat}
            onChange={(e) => updateForm({ addresse_candidat: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Courriel</label>
          <input
            type="email"
            className="form-control"
            id="courriel_candidat"
            value={form.courriel_candidat}
            onChange={(e) => updateForm({ courriel_candidat: e.target.value })}
          />
        </div>

        {/*
        <div className="form-group">
          <input
            type="checkbox"
            id="etudiant"
            value={form.etudiant}
            onChange={(e) => updateForm({ etudiant: (e.target.value = "OUI") })}
          />
          <label style={{ marginLeft: "10px" }}>Étudiant</label>
          </div>
        */}

        {/*Type Visa*/}
        <div className="form-group">
          <label>Type Visa</label>
          <select
            class="form-select"
            id="type_visa"
            value={form.type_visa}
            onChange={(e) => updateForm({ type_visa: e.target.value })}
          >
            <option selected>Choose type of visa</option>
            {recordList()}
          </select>
        </div>

        {/*Date fin de permis de travail*/}
        <div className="form-group">
          <label>Date de fin de permis de travail</label>
          <input
            type="date"
            className="form-control"
            id="date_fin_permis_travail"
            value={form.date_fin_permis_travail}
            onChange={(e) =>
              updateForm({ date_fin_permis_travail: e.target.value })
            }
          />
        </div>

        {/*Date d'arrivée*/}
        <div className="form-group">
          <label>Date d'arrivée</label>
          <input
            type="date"
            className="form-control"
            id="date_arriver"
            value={form.date_arriver}
            onChange={(e) => updateForm({ date_arriver: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Add candidate"
            className="btn btn-info"
            onClick={() => window.location.reload(false)}
          />
        </div>
      </form>
      <a href="/listOfCandidates" class="link-info">
        Back to Candidates List
      </a>
    </div>
  );
}
