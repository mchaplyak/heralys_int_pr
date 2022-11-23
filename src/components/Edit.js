import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
  const [form, setForm] = useState({
    prenom_candidat: "",
    nom_candidat: "",
    addresse_candidat: "",
    courriel_candidat: "",
    date_arriver: "",
    date_fin_permis_travail: "",
    etudiant: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/listOfCandidates/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Candidate with id ${id} not found`);
        navigate("/listOfCandidates");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      prenom_candidat: form.prenom_candidat,
      nom_candidat: form.nom_candidat,
      addresse_candidat: form.addresse_candidat,
      courriel_candidat: form.courriel_candidat,
      date_arriver: form.date_arriver,
      date_fin_permis_travail: form.date_fin_permis_travail,
      etudiant: form.etudiant,
    };

    // post request to update the data in the database.
    await fetch(`http://localhost:5000/listOfCandidates/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/listOfCandidates");
  }

  // display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Update Candidate</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="prenom">Prenom: </label>
          <input
            type="text"
            className="form-control"
            id="prenom_candidat"
            value={form.prenom_candidat}
            onChange={(e) => updateForm({ prenom_candidat: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nom_candidat">Nom: </label>
          <input
            type="text"
            className="form-control"
            id="nom_candidat"
            value={form.nom_candidat}
            onChange={(e) => updateForm({ nom_candidat: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Update Candidate"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
