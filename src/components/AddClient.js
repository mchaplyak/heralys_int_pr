import React, { useEffect, useState } from "react";

export default function AddClient() {
  const [form, setForm] = useState({
    nom_entreprise: "",
    addresse_entreprise: "",
    page_web: "",
    courriel_entreprise: "",
    logo_entreprise: "",
    presentation_entreprise: "",
    prochainContactDate: "",
    contacte: "",
    commission: "",
    taille: "",
    responsable: "",
    domain: "",
  });

  //update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const [records, setRecords] = useState([]);

  const Record = (props) => <option>{props.record.nom}</option>;

  // fetches the records from the database (Domain type)
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/dbDomType/`);

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

  //handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newClient = { ...form };

    await fetch("http://localhost:5000/listOfCompanies/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClient),
    }).catch((error) => {
      window.alert("Client was added!");
      return;
    });

    setForm({
      nom_entreprise: "",
      addresse_entreprise: "",
      page_web: "",
      courriel_entreprise: "",
      logo_entreprise: "",
      presentation_entreprise: "",
      prochainContactDate: "",
      contacte: "",
      commission: "",
      taille: "",
      responsable: "",
      domain: "",
    });
  }

  return (
    <div className="container-fluid" style={{ marginTop: 20 }}>
      <h3>Add Client</h3>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Nom d'entreprise</label>
          <input
            type="text"
            className="form-control"
            id="nom_entreprise"
            value={form.nom_entreprise}
            onChange={(e) => updateForm({ nom_entreprise: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Adresse</label>
          <input
            type="text"
            className="form-control"
            id="addresse_entreprise"
            value={form.addresse_entreprise}
            onChange={(e) =>
              updateForm({ addresse_entreprise: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Page web</label>
          <input
            type="text"
            className="form-control"
            id="page_web"
            value={form.page_web}
            onChange={(e) => updateForm({ page_web: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Courriel</label>
          <input
            type="email"
            className="form-control"
            id="courriel_entreprise"
            value={form.courriel_entreprise}
            onChange={(e) =>
              updateForm({ courriel_entreprise: e.target.value })
            }
          />
        </div>
        {/* <div className="form-group">
<label>Logo</label>
          <input
            type="text"
            className="form-control"
            id="logo_entreprise"
            value={form.logo_entreprise}
            onChange={(e) => updateForm({ logo_entreprise: e.target.value })}
          />
</div> */}
        <div className="form-group">
          <label>Presentation</label>
          <input
            type="text"
            className="form-control"
            id="prenom_client"
            value={form.presentation_entreprise}
            onChange={(e) =>
              updateForm({ presentation_entreprise: e.target.value })
            }
          />
        </div>

        {/* prochainContactDate */}
        <div className="form-group">
          <label>Prochain Contact</label>
          <input
            type="date"
            className="form-control"
            id="prochainContactDate"
            value={form.prochainContactDate}
            onChange={(e) =>
              updateForm({ prochainContactDate: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Contacté</label>
          <select
            className="form-select"
            id="contacte"
            value={form.contacte}
            onChange={(e) => updateForm({ contacte: e.target.value })}
          >
            <option value="" disabled>
              Choose contacté
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Commission</label>
          <input
            type="text"
            className="form-control"
            id="prenom_client"
            value={form.commission}
            onChange={(e) => updateForm({ commission: e.target.value })}
          />
        </div>

        {/*domain*/}
        <div className="form-group">
          <label>Domain</label>
          <select
            className="form-select"
            id="domain"
            value={form.domain}
            onChange={(e) => updateForm({ domain: e.target.value })}
          >
            <option value="" disabled>
              Choose domain
            </option>
            {recordList()}
          </select>
        </div>

        <div className="form-group">
          <label>Taille</label>
          <input
            type="text"
            className="form-control"
            id="prenom_client"
            value={form.taille}
            onChange={(e) => updateForm({ taille: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Responsable</label>
          <input
            type="text"
            className="form-control"
            id="prenom_client"
            value={form.responsable}
            onChange={(e) => updateForm({ responsable: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Add client"
            className="btn btn-info"
            onClick={() => window.location.reload(false)}
          />
        </div>
      </form>
      <a href="/listOfClients" className="link-info">
        Back to Clients List
      </a>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
