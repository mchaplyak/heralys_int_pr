
import React, { useEffect, useState }  from 'react'
import { Link } from "react-router-dom";

import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import moment from "moment";

// moment(props.record.createdDate).utc().format('YYYY-MM-DD')

const Record = (props) => (
    <tr>
      <td>{props.record.nom_contact}</td>
      <td>{props.record.prenom_contact}</td>
      <td>{props.record.addresse_contact}</td>
      <td>{props.record.telephone_contact}</td>
      {/* <td>{props.record.logo_entreprise}</td> */}
      <td>{props.record.courriel_contact}</td>
      {/* <td>{props.record.etat}</td> */}
      <td>{props.record.typePoste}</td>
      <td>{props.record.source}</td>
      <td>{props.record.client}</td>
      <td>{props.record.perception}</td>
      <td>{props.record.status}</td>
      <td>{props.record.notes}</td>
      <td>{props.record.contacte}</td>
      <td>{props.record.lastDate}</td>
      <td>{props.record.ou}</td>
      <td>{moment(props.record.createdDate).utc().format('YYYY-MM-DD')}</td>
   
 
 

      <td>
        {/*Edit*/}
        <Link to={`/editContact/${props.record._id}`}>
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

    console.log("recordsrecords",records)


      //  delete a record
      async function deleteRecord(id) {
        await fetch(`http://localhost:5000/listOfContacts/${id}`, {
          method: "DELETE",
        });
    
        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
      }
    console.log("recordsrecords222",records)
      
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
  


    const [searchVal, setSearchVal] = useState("")

    useEffect(() => {
      
        async function getRecords() {
          const response = await fetch(`http://localhost:5000/listOfContacts/search/${searchVal}`);
            // console.log("searchVal=====",searchVal)
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
    
          const records = await response.json();
          setRecords(records);
        }

        if (searchVal.length === 0 ) { 
            // console.log("searchVal.length=",searchVal.length)
            setSearchVal("undefined")
        }
        else
        {
            getRecords();
        }
    
     //   getRecords();
        return;
      }, [searchVal]);



    useEffect(()=>{
      setRecords(records )
    },[ records ])


    return (
      <div className="container-fluid" style={{ marginTop: 20 }}>
        
        <input onChange={(e)=>setSearchVal(e.target.value)} className = "search" placeholder='Search...' />
        
        <h3>Contacts List</h3>
  
        <table className="table" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Adresse</th>
              <th>Téléphone</th>
              {/* <th>Logo</th> */}
              <th>Courriel</th>
              {/* <th>État</th> */}
              <th>Type de poste</th>
              <th>Source</th>
              <th>Client</th>

              <th>Perception</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Contacté</th>
              <th>Last Date</th>
              <th>Ou</th>
              
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
  


