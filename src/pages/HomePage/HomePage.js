import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import bigLogo from "../../assets/HeralysBigLogoVector.png"

const HomePage = () => {
    return (
        <section>
            <Container>
                <Row className={"align-items-center justify-content-center position-absolute"}>
                    <Col xs={12} md={4} xl={5}>
                        <img src={bigLogo} alt="bigLogo" width={"350"}/>
                    </Col>
                    <Col xs={12} md={4} xl={5}>
                        <h2>Heading</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aperiam aut culpa debitis
                            eveniet expedita ipsum magni odio perferendis quasi qui quibusdam, quidem ratione repellat,
                            suscipit tempore temporibus veritatis voluptate.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HomePage;