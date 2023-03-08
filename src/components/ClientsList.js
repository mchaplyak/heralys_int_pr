import React, { useEffect, useState }  from 'react'
import { Link } from "react-router-dom";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import moment from "moment";

const Record = (props) => (
  <tr>
    <td>{props.record.nom_entreprise}</td>
    <td>{props.record.addresse_entreprise}</td>
    <td>{props.record.page_web}</td>
    <td>{props.record.courriel_entreprise}</td>
    {/* <td>{props.record.logo_entreprise}</td> */}
    <td>{props.record.presentation_entreprise}</td>
    <td>{props.record.domain}</td>
    <td>{props.record.prochainContactDate}</td>
    <td>{props.record.contacte}</td>
    <td>{props.record.commission}</td>
    <td>{props.record.taille}</td>
    <td>{props.record.responsable}</td>
    <td>{moment(props.record.createdDate).utc().format('YYYY-MM-DD')}</td>


    <td>
      {/*Edit*/}
      <Link to={`/editClient/${props.record._id}`}>
        <img
          src={require("../assets/edit-btn.png")}
          alt="edit-btn"
          height={"20px"}
        />
      </Link>
    </td>

    <td>
      {/*Delete*/}
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
// fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/listOfCompanies/`);

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
      await fetch(`http://localhost:5000/listOfCompanies/${id}`, {
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

  return (
    <div className="container-fluid" style={{ marginTop: 20 }}>
      <h3>Clients List</h3>

      <table className="table" style={{ marginTop: 20 } }>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Page web</th>
            <th>Courriel</th>
            {/* <th>Logo</th> */}
            <th>Presentation</th>
            <th>Domain</th>
            <th>Prochain Contact</th>
            <th>Contacté</th>
            <th>Commission</th>
            <th>Taille</th>
            <th>Responsable</th>
            <th>createdDate</th>

            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>

    </div>
  )
}
