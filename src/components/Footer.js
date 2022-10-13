import React, {Component} from 'react';
import  {Navbar} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar fixed={"bottom"} bg={"dark"} variant={"dark"}>
                    <NavbarCollapse className={"justify-content-center"}>
                        <Navbar.Text>
                            Copyright© 2021 - {new Date().getFullYear()} HERALYS Talents & Immigrants
                        </Navbar.Text>
                    </NavbarCollapse>
                </Navbar>
            </div>
        );
    }
}

export default Footer;