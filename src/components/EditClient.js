import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function EditClient() {
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
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/listOfCompanies/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Client with id ${id} not found`);
        navigate("/listOfClients");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

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

  async function onSubmit(e) {
    e.preventDefault();
    const editedClient = {
      nom_entreprise: form.nom_entreprise,
      addresse_entreprise: form.addresse_entreprise,
      page_web: form.page_web,
      courriel_entreprise: form.courriel_entreprise,
      presentation_entreprise: form.presentation_entreprise,
      prochainContactDate: form.prochainContactDate,
      contacte: form.contacte,
      commission: form.commission,
      taille: form.taille,
      responsable: form.responsable,
      domain: form.domain,
    };

    // post request to update the data in the database.
    await fetch(`http://localhost:5000/listOfCompanies/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedClient),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/listOfClients");
  }

  return (
    <div className="container-fluid" style={{ marginTop: 20 }}>
      <h1>Update Client</h1>
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
            id="presentation_entreprise"
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
            id="commission"
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
            id="taille"
            value={form.taille}
            onChange={(e) => updateForm({ taille: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Responsable</label>
          <input
            type="text"
            className="form-control"
            id="responsable"
            value={form.responsable}
            onChange={(e) => updateForm({ responsable: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Update client"
            className="btn btn-info"
            onClick={() => window.location.reload(false)}
          />
        </div>
      </form>
      <a href="/listOfClients" class="link-info">
        Back to Clients List
      </a>
      <br />
      <br />
      <br />
    </div>
  );
}
