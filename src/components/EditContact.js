import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function EditContact() {
  const [form, setForm] = useState({
    nom_contact: "",
    prenom_contact: "",
    addresse_contact: "",
    telephone_contact: "",
    courriel_contact: "",
    etat: "",
    typePoste: "",
    source: "",
    client: "",
    perception: "",
    status: "",
    notes: "",
    contacte: "",
    ou: "",
    lastDate: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/listOfContacts/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Contact with id ${id} not found`);
        navigate("/listOfContacts");
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

  //Type de poste
  const [records, setRecords] = useState([]);

  const Record1 = (props) => <option>{props.record.nom}</option>;

  // fetches the records from the database (typePoste)
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/dbTop/`);

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

  // map out the records on the table (typePoste)
  function recordList() {
    return records.map((record) => {
      return <Record1 record={record} key={record._id} />;
    });
  }

  //Source
  const [records2, setRecords2] = useState([]);
  const Record2 = (props) => <option>{props.record2.nom}</option>;

  // fetches the records from the database (source)
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/dbSrc/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records2 = await response.json();
      setRecords2(records2);
    }

    getRecords();

    return;
  }, [records2.length]);

  // map out the records on the table (source)
  function recordList2() {
    return records2.map((record2) => {
      return <Record2 record2={record2} key={record2._id} />;
    });
  }

  // fetch all company names (nom_entreprise)
  const [values, setValues] = useState([]);
  // const [options,setOptions]=useState()

  useEffect(() => {
    fetch("http://localhost:5000/CompanyNames/")
      .then((data) => data.json())
      .then((val) => setValues(val));
  }, []);

  console.log("valuesvalues", values);

  async function onSubmit(e) {
    e.preventDefault();
    const editedContact = {
      nom_contact: form.nom_contact,
      prenom_contact: form.prenom_contact,
      addresse_contact: form.addresse_contact,
      telephone_contact: form.telephone_contact,
      courriel_contact: form.courriel_contact,
      // etat: form.etat,
      typePoste: form.typePoste,
      source: form.source,
      client: form.client,
      perception: form.perception,
      status: form.status,
      notes: form.notes,
      contacte: form.contacte,
      lastDate: form.lastDate,
      ou: form.ou,
    };

    // post request to update the data in the database.
    await fetch(`http://localhost:5000/listOfContacts/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedContact),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/listOfContacts");
  }

  return (
    <div className="container-fluid" style={{ marginTop: 20 }}>
      <h1>Update Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            className="form-control"
            id="nom_contact"
            value={form.nom_contact}
            onChange={(e) => updateForm({ nom_contact: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Prenom</label>
          <input
            type="text"
            className="form-control"
            id="prenom_contact"
            value={form.prenom_contact}
            onChange={(e) => updateForm({ prenom_contact: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Adresse</label>
          <input
            type="text"
            className="form-control"
            id="addresse_contact"
            value={form.addresse_contact}
            onChange={(e) => updateForm({ addresse_contact: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Téléphone</label>
          <input
            type="text"
            className="form-control"
            id="telephone_contact"
            value={form.telephone_contact}
            onChange={(e) => updateForm({ telephone_contact: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Courriel</label>
          <input
            type="email"
            className="form-control"
            id="courriel_contact"
            value={form.courriel_contact}
            onChange={(e) => updateForm({ courriel_contact: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Type de poste</label>
          <select
            className="form-select"
            id="typePoste"
            value={form.typePoste}
            onChange={(e) => updateForm({ typePoste: e.target.value })}
          >
            <option value="" disabled>
              Choose type de poste
            </option>
            {recordList()}
          </select>
        </div>

        <div className="form-group">
          <label>Source</label>
          <select
            className="form-select"
            id="source"
            value={form.source}
            onChange={(e) => updateForm({ source: e.target.value })}
          >
            <option value="" disabled>
              Choose source
            </option>
            {recordList2()}
          </select>
        </div>

        <div className="form-group">
          <label>Client</label>
          <select
            className="form-select"
            id="client"
            value={form.client}
            onChange={(e) => updateForm({ client: e.target.value })}
          >
            <option value="" disabled>
              Choose client
            </option>
            {values.map((opts, i) => (
              <option key={i}>{opts}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Perception</label>
          <select
            className="form-select"
            id="perception"
            value={form.perception}
            onChange={(e) => updateForm({ perception: e.target.value })}
          >
            <option value="" disabled>
              Choose perception
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            className="form-select"
            id="status"
            value={form.status}
            onChange={(e) => updateForm({ status: e.target.value })}
          >
            <option value="" disabled>
              Choose status
            </option>
            <option value="Actif">Actif</option>
            <option value="Inactif">Inactif</option>
          </select>
        </div>

        <div className="form-group">
          <label>Notes</label>
          <input
            type="text"
            className="form-control"
            id="notes"
            value={form.notes}
            onChange={(e) => updateForm({ notes: e.target.value })}
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
          <label>Last date</label>
          <input
            type="date"
            className="form-control"
            id="lastDate"
            value={form.lastDate}
            onChange={(e) => updateForm({ lastDate: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Où</label>
          <input
            type="text"
            className="form-control"
            id="ou"
            value={form.ou}
            onChange={(e) => updateForm({ ou: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Update contact"
            className="btn btn-info"
            onClick={() => window.location.reload(false)}
          />
        </div>
      </form>
      <a href="/listOfContacts" class="link-info">
        Back to Contacts List
      </a>
      <br />
      <br />
      <br />
    </div>
  );
}
