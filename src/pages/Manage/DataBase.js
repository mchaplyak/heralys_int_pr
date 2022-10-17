import React, {Component} from 'react';
import {Button, Container, ListGroupItem, Navbar} from "react-bootstrap";
import './DataBase.scss'
import DbSideMenu from "../../components/DbSideMenu";

class DataBase extends Component {
    render() {
        return (
            <div>
                <DbSideMenu/>
                <div id="page-content-wrapper">
                    {/*!!!Створити окрему компоненту бокового меню. Сабменю має бути в кожній додатковій компоненті-сторінці*/}
                    <Navbar expand={"lg"} bg={"light"} id={"loi_submenu"}>
                        <Container className={"justify-content-center"}>
                            <Button variant="outline-primary" size={"sm"} className={"me-2"}>Add</Button>
                            <Button variant="outline-primary" size={"sm"} className={"me-2"}>Delete</Button>
                            <Button variant="outline-primary" size={"sm"} className={"me-2"}>Update</Button>
                        </Container>
                    </Navbar>
                    <div className="container-fluid">
                        <h1 className="mt-4">Title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus exercitationem,
                            expedita, illo impedit maiores odit optio repellendus reprehenderit soluta temporibus vitae
                            voluptatem voluptates. Ad alias aspernatur beatae dolor error, est facilis fugit impedit
                            inventore molestiae optio reprehenderit, soluta voluptatibus?</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataBase;