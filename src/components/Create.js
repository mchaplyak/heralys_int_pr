import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
  });

  //update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const [list, setList] = useState([]);

  function updateLanguage(e) {
    const lang = e.target.value;
    setList([...list, lang]);
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newLanguage = { ...form };

    await fetch("http://localhost:5000/dbLangType/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLanguage),
    }).catch((error) => {
      window.alert("Language was added!");
      return;
    });

    setForm({ name: "" });
  }

  // display the form to add language
  return (
    <div>
      <h3>Add New Language</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            style={{ margin: "10px 0px" }}
            type="submit"
            value="Add language"
            className="btn btn-info"
            onClick={() => window.location.reload(false)}
          />
        </div>
      </form>
    </div>
  );
}
