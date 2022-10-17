import React, {Component} from 'react';
import {ListGroupItem} from "react-bootstrap";

class DbSideMenu extends Component {
    render() {
        return (
            <div className="d-flex" id="wrapper">
                <div className="border-end bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading border-bottom bg-light p-2">DB Manage</div>
                    <div className="list-group list-group-flush">
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Language type
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            City
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Transport
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Country
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Type of visa
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Visa status
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Education level
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Experience
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            State
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Source
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Type of position
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Domain type
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Study time
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Types of employment
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Place ou lieu
                        </ListGroupItem>
                        <ListGroupItem className={"list-group-item-light"} action href={"/#!"}>
                            Salary
                        </ListGroupItem>
                    </div>
                </div>
            </div>
        );
    }
}

export default DbSideMenu;