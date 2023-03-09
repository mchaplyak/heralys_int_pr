import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import logo from "../assets/heralys_vector.png";
import HomePage from "../pages/HomePage/HomePage";
import RefLinksPage from "../pages/RefLinksPage/RefLinksPage";

import ListOfContactsPage from "../pages/ClientPages/ListOfContactsPage";

import CreatingContactsPage from "../pages/ClientPages/CreatingContactsPage";

import SearchContactsPage from "../pages/ClientPages/SearchContactsPage";
import SearchClientsPage from "../pages/ClientPages/SearchClientsPage";

import ListOfClientsPage from "../pages/ClientPages/ListOfClientsPage";

import CreatingClientsPage from "../pages/ClientPages/CreatingClientsPage";
import AddAnOfferPage from "../pages/JobOfferPages/AddAnOfferPage";
import JoHistoryPage from "../pages/JobOfferPages/JoHistoryPage";
import RegistrationPage from "../pages/CandidatesPages/RegistrationPage";
import ListOfCandidatesPage from "../pages/CandidatesPages/ListOfCandidatesPage";
import AddCandidatePage from "../pages/CandidatesPages/AddCandidatePage";
import ListOfInterviewPage from "../pages/CandidatesPages/listOfInterviewPage";
import ValCvPage from "../pages/valCvPage/valCvPage";
import LinksOfInt from "../pages/Manage/LinksOfInt";
import LangTypeDb from "../pages/Manage/DbPages/LangTypeDb";
import CityDb from "../pages/Manage/DbPages/CityDb";
import TransportDb from "../pages/Manage/DbPages/TransportDb";
import CountryDb from "../pages/Manage/DbPages/CountryDb";
import TypeOfVisaDb from "../pages/Manage/DbPages/TypeOfVisaDb";
import VisaStatusDb from "../pages/Manage/DbPages/VisaStatusDb";
import EduLvlDb from "../pages/Manage/DbPages/EduLvlDb";
import ExpDb from "../pages/Manage/DbPages/ExpDb";
import StateDb from "../pages/Manage/DbPages/StateDb";
import SourceDb from "../pages/Manage/DbPages/SourceDb";
import TypeOfPosDb from "../pages/Manage/DbPages/TypeOfPosDb";
import DomainTypeDb from "../pages/Manage/DbPages/DomainTypeDb";
import StudyTimeDb from "../pages/Manage/DbPages/StudyTimeDb";
import TypesOfEmplDb from "../pages/Manage/DbPages/TypesOfEmplDb";
import SalaryDb from "../pages/Manage/DbPages/SalaryDb";
import NotFoundPage from "../pages/NotFoundPage";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar
          sticky={"top"}
          collapseOnSelect
          expand={"lg"}
          bg={"light"}
          variant={"light"}
        >
          <Container>
            <Navbar.Brand href={"/"}>
              <img
                src={logo}
                width={"45"}
                className={"d-inline-block align-top"}
                alt={"logo"}
              />{" "}
              Héralys Talents & Immigrants{" "}
            </Navbar.Brand>
          </Container>
          <Container>
            <Navbar.Toggle aria-controls={"responsive-navbar-nav"} />
            <Navbar.Collapse id={"responsive-navbar-nav"}>
              <Nav className={"me-auto"}>
                {/*<Nav.Link href={"/"}>Home</Nav.Link>*/}
                {/*<Nav.Link href={"/refLinks"}>Reference Links</Nav.Link>*/}
                <NavDropdown title={"Clients"} id={"basic-nav-dropdown"}>
                  <NavDropdown.Item href={"/listOfContacts"}>
                    List of Contacts
                  </NavDropdown.Item>
                  <NavDropdown.Item href={"/creatingContacts"}>
                    Add a Contact
                  </NavDropdown.Item>
                  <NavDropdown.Item href={"/searchContacts"}>
                    Search Contacts
                  </NavDropdown.Item>
                  <NavDropdown.Item href={"/listOfClients"}>
                    List of Clients
                  </NavDropdown.Item>
                  <NavDropdown.Item href={"/creatingClients"}>
                    Add a Client
                  </NavDropdown.Item>
                  <NavDropdown.Item href={"/searchClients"}>
                    Search Clients
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={"Job offers"} id={"basic-nav-dropdown"}>
                  <NavDropdown.Item href={"/joHistory"}>
                    List of Job Offers
                  </NavDropdown.Item>
                  <NavDropdown.Item href={"/addAnOffer"}>
                    Add a Job Offer
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={"Candidates"} id={"basic-nav-dropdown"}>
                  {/*<NavDropdown.Item href={"/registration"}>
                    Registration
                  </NavDropdown.Item>*/}
                  <NavDropdown.Item href={"/listOfCandidates"}>
                    List of candidates
                  </NavDropdown.Item>
                  <NavDropdown.Item href={"/listOfCandidates/add"}>
                    Add a candidate
                  </NavDropdown.Item>
                  <NavDropdown.Item href={"/listOfInterviews"}>
                    List of interviews
                  </NavDropdown.Item>
                </NavDropdown>

                {/*<Nav.Link href={"/valCv"}>Validation CV</Nav.Link>*/}
                {/*<NavDropdown title={"Manage"} id={"basic-nav-dropdown"}>*/}
                <Nav.Link href={"/dbLangType"}>Database</Nav.Link>
                {/*<Nav.Link href={"/linksOfInt"}>Links of Interest</Nav.Link>*/}
                {/*</NavDropdown></Navbar.Collapse>*/}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path={"/*"} element={<HomePage />} />
          <Route path={"refLinks"} element={<RefLinksPage />} />
          <Route path={"listOfContacts"} element={<ListOfContactsPage />} />
          <Route path={"creatingContacts"} element={<CreatingContactsPage />} />
          <Route path={"searchContacts"} element={<SearchContactsPage />} />
          <Route path={"listOfClients"} element={<ListOfClientsPage />} />
          <Route path={"searchClients"} element={<SearchClientsPage />} />
          <Route path={"creatingClients"} element={<CreatingClientsPage />} />
          <Route path={"addAnOffer"} element={<AddAnOfferPage />} />
          <Route path={"joHistory"} element={<JoHistoryPage />} />
          <Route path={"registration"} element={<RegistrationPage />} />
          <Route path={"listOfCandidates"} element={<ListOfCandidatesPage />} />
          <Route path={"listOfCandidates/add"} element={<AddCandidatePage />} />
          <Route path={"listOfInterviews"} element={<ListOfInterviewPage />} />
          <Route path={"valCv"} element={<ValCvPage />} />
          <Route path={"linksOfInt"} element={<LinksOfInt />} />
          {/*<Route path={"dataBase/*"} element={<DataBase/>}/>*/}
          <Route path={"/dbLangType/*"} element={<LangTypeDb />} />
          <Route path={"/dbCity/*"} element={<CityDb />} />
          <Route path={"/dbTransport/*"} element={<TransportDb />} />
          <Route path={"dbCountry/*"} element={<CountryDb />} />
          <Route path={"dbTov/*"} element={<TypeOfVisaDb />} />
          <Route path={"dbVs/*"} element={<VisaStatusDb />} />
          <Route path={"dbEdLvl/*"} element={<EduLvlDb />} />
          <Route path={"dbExp/*"} element={<ExpDb />} />
          <Route path={"dbState/*"} element={<StateDb />} />
          <Route path={"dbSrc/*"} element={<SourceDb />} />
          <Route path={"dbTop/*"} element={<TypeOfPosDb />} />
          <Route path={"dbDomType/*"} element={<DomainTypeDb />} />
          <Route path={"dbStudyTime/*"} element={<StudyTimeDb />} />
          <Route path={"dbToe/*"} element={<TypesOfEmplDb />} />
          <Route path={"test"} element={<SalaryDb />} />
          <Route path={"dbSalary/*"} element={<SalaryDb />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </>
    );
  }
}

export default NavBar;
