import React, {Component} from 'react';
import {Button, Container, Form, InputGroup, ListGroupItem, Navbar, Row} from "react-bootstrap";
import './DataBase.scss'
import DbSideMenu from "../../components/DbSideMenu";

class DataBase extends Component {
    render() {
        return (
            <div className={"d-flex"} id={"wrapper"}>
                <DbSideMenu/>
                <div id="page-content-wrapper">

                </div>
            </div>
        );
    }
}

export default DataBase;