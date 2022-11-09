import React from "react";
import DbSideMenu from "../../../components/DbSideMenu";
import StudyTime from "../../../components/StudyTimeList";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import "../DataBase.scss";

const StudyTimeDb = () => {
  return (
    <div className={"d-flex"} id={"wrapper"}>
      <DbSideMenu />
      <div id="page-content-wrapper">
        <Navbar expand={"lg"} bg={"light"} id={"loi_submenu"}>
          <Container className={"justify-content-center"}>
            <Button variant="outline-primary" size={"sm"} className={"me-2"}>
              Add
            </Button>
            <Button variant="outline-primary" size={"sm"} className={"me-2"}>
              Delete
            </Button>
            <Button variant="outline-primary" size={"sm"} className={"me-2"}>
              Update
            </Button>
          </Container>
        </Navbar>
        <div className="container-fluid">
          {/*<Container className={"text-center mt-4"}>
                        <h3>Study time</h3>
                    </Container>
                    <Container id={"search_box"}>
                        <Row>
                            <InputGroup className="mb-3">
                                <Form.Control placeholder="..."/>
                            </InputGroup>
                        </Row>
                    </Container>
    */}
          <StudyTime />
        </div>
      </div>
    </div>
  );
};

export default StudyTimeDb;
