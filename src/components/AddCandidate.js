import React, { useEffect, useState } from "react";

export default function AddCandidate() {
  const [form, setForm] = useState({
    name: "",
  });

  //update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
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

    setForm({ name: "" });
  }

  return (
    <div>
      <h3>Add Candidate</h3>
      <div>
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
            <label>Nom</label>
            <input
              type="text"
              className="form-control"
              id="nom_candidat"
              value={form.nom_candidat}
              onChange={(e) => updateForm({ nom_candidat: e.target.value })}
            />
          </div>
          <label>Adresse</label>
          <input
            type="text"
            className="form-control"
            id="addresse_candidat"
            value={form.addresse_candidat}
            onChange={(e) => updateForm({ addresse_candidat: e.target.value })}
          />
          <label>Courriel</label>
          <input
            type="email"
            className="form-control"
            id="courriel_candidat"
            value={form.courriel_candidat}
            onChange={(e) => updateForm({ courriel_candidat: e.target.value })}
          />
          <label>Date d'arrivée</label>
          <input
            type="date"
            className="form-control"
            id="date_arriver"
            value={form.date_arriver}
            onChange={(e) => updateForm({ date_arriver: e.target.value })}
          />
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
          <label>Étudiant</label>
          <input
            type="checkbox"
            id="etudiant"
            value={form.etudiant}
            onChange={(e) => updateForm({ etudiant: e.target.value })}
          />
          <div className="form-group">
            <input
              style={{ margin: "10px 0px" }}
              type="submit"
              value="Add candidate"
              className="btn btn-info"
              onClick={() => window.location.reload(false)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
