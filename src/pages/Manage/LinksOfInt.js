import React, {Component} from 'react';
import {Button, Container, InputGroup, Navbar, Form, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import './LinksOfInt.scss'

class LinksOfInt extends Component {
    render() {
        return (
            <>
                <Navbar expand={"lg"} bg={"light"} id={"loi_submenu"}>
                    <Container className={"justify-content-center"}>
                        <Button variant="outline-primary" size={"sm"} className={"me-2"}>Add</Button>
                        <Button variant="outline-primary" size={"sm"} className={"me-2"}>Delete</Button>
                        <Button variant="outline-primary" size={"sm"} className={"me-2"}>Update</Button>
                    </Container>
                </Navbar>
                <Container className={"text-center mt-4"}>
                    <h3>Links of interest</h3>
                </Container>
                <Container id={"search_box"}>
                    <Row>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="..."/>
                        </InputGroup>
                    </Row>
                </Container>
                <Container>
                    <ListGroup as={"ol"} numbered>
                        <ListGroupItem as={"li"}>Link 1</ListGroupItem>
                        <ListGroupItem as={"li"}>Link 2</ListGroupItem>
                        <ListGroupItem as={"li"}>Link 3</ListGroupItem>
                        <ListGroupItem as={"li"}>Link ...</ListGroupItem>
                    </ListGroup>
                </Container>
            </>
        );
    }
}

export default LinksOfInt;