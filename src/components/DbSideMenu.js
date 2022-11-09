import React, { Component } from "react";
import { ListGroupItem } from "react-bootstrap";

import "../pages/Manage/DataBase.scss";

class DbSideMenu extends Component {
  render() {
    return (
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light p-2">
          DB Manage
        </div>
        <div className="list-group list-group-flush">
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbLangType"}
          >
            Language type
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={`dbCity`}
          >
            City
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbTransport"}
          >
            Transport
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbCountry"}
          >
            Country
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbTov"}
          >
            Type of visa
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbVs"}
          >
            Visa status
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbEdLvl"}
          >
            Education level
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbExp"}
          >
            Experience
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbState"}
          >
            State
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbSrc"}
          >
            Source
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbTop"}
          >
            Type of position
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbDomType"}
          >
            Domain type
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbStudyTime"}
          >
            Study time
          </ListGroupItem>
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbToe"}
          >
            Types of employment
          </ListGroupItem>
          {/*<ListGroupItem className={"list-group-item-light"} action href={"db"}>
                        Place ou lieu
        </ListGroupItem>*/}
          <ListGroupItem
            className={"list-group-item-light"}
            action
            href={"dbSalary"}
          >
            Salary
          </ListGroupItem>
        </div>
      </div>
    );
  }
}

export default DbSideMenu;
