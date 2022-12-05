import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.titre_offre}</td>

    <td>{props.record.desc_taches}</td>

    <td>{props.record.exigences}</td>

    <td>{props.record.atouts}</td>

    <td>{props.record.conditions}</td>

    {/*Delete*/}
    <td>
      <img
        src={require("../assets/delete-btn.png")}
        alt="delete-btn"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      />
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // fetches from db
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

  //  delete
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/joHistory/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // map out on table
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

  // display the table
  return (
    <div className="container-fluid" style={{ marginTop: 20 }}>
      <h3>Job Offers List</h3>
      <Link to={`/addAnOffer`} className="btn btn-info">
        Add Job Offer
      </Link>{" "}
      <table className="table" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description des tâches</th>
            <th>Exigences</th>
            <th>Atouts</th>
            <th>Conditions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
