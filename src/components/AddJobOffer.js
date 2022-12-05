import React, { useEffect, useState } from "react";

export default function AddJobOffer() {
  const [form, setForm] = useState({
    titre_offre: "",
  });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const [records, setRecords] = useState([]);

  const Record = (props) => <option>{props.record.titre_offre}</option>;

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/joHistory/`);

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

  // map out on the table
  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }

  //handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newOffer = { ...form };

    await fetch("http://localhost:5000/addAnOffer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOffer),
    }).catch((error) => {
      window.alert("Job Offer was added!");
      return;
    });

    setForm({
      titre_offre: "",
    });
  }

  return (
    <div className="container-fluid" style={{ marginTop: 20 }}>
      <h3>Add Job Offer</h3>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Titre</label>
          <input
            type="text"
            className="form-control"
            id="titre_offre"
            value={form.titre_offre}
            onChange={(e) => updateForm({ titre_offre: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Description des tâches</label>
          <input
            type="text"
            className="form-control"
            id="desc_taches"
            value={form.desc_taches}
            onChange={(e) => updateForm({ desc_taches: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Exigences</label>
          <input
            type="text"
            className="form-control"
            id="exigences"
            value={form.exigences}
            onChange={(e) => updateForm({ exigences: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Atouts</label>
          <input
            type="text"
            className="form-control"
            id="atouts"
            value={form.atouts}
            onChange={(e) => updateForm({ atouts: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Conditions</label>
          <input
            type="text"
            className="form-control"
            id="conditions"
            value={form.conditions}
            onChange={(e) => updateForm({ conditions: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Add Job Offer"
            className="btn btn-info"
            onClick={() => window.location.reload(false)}
          />
        </div>
      </form>
      <a href="/joHistory" class="link-info">
        Back to Job Offers List
      </a>
    </div>
  );
}
