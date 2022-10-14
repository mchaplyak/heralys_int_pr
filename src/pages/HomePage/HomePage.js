import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import bigLogo from "../../assets/HeralysBigLogoVector.png"

const HomePage = () => {
    return (
        <section>
            <Container>
                <Row className={"align-items-center justify-content-center position-absolute mt-5"}>
                    <Col xs={12} md={3} xl={4}>
                        <img src={bigLogo} alt="bigLogo" width={"350"}/>
                    </Col>
                    <Col xs={12} md={4} xl={5}>
                        <h2>Heading</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur consequuntur
                            dolorem impedit, ipsa temporibus? Mollitia necessitatibus odio perferendis quae quam rerum.
                            Accusamus aliquid amet animi asperiores autem beatae blanditiis consequatur corporis
                            delectus ea eaque error, et incidunt modi necessitatibus nemo perferendis, quae quaerat quas
                            quibusdam quidem ratione reiciendis vel voluptas voluptatem! Deserunt eaque id laboriosam
                            nobis odit quia!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HomePage;