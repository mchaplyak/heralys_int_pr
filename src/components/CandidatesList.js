import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.prenom_candidat}</td>
    <td>{props.record.nom_candidat}</td>
    <td>{props.record.addresse_candidat}</td>
    <td>{props.record.courriel_candidat}</td>
    <td>{props.record.date_arriver}</td>
    <td>{props.record.date_fin_permis_travail}</td>
    <td>{props.record.etudiant}</td>
    <td>{props.record.infolettre}</td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/listOfCandidates/`);

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

  //  delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // display the table with the records of individuals.
  return (
    <div>
      <h3>Candidates List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Courriel</th>
            <th>Date d'arrivée</th>
            <th>Date fin du permis de travail</th>
            <th>Étudiant</th>
            <th>Infolettre</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
