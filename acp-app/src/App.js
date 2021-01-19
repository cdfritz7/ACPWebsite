import React from 'react';
import ReactDOM from 'react-dom';

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomeComponent from './HomeComponent.js';
import AboutComponent from './AboutComponent.js';
import ContactComponent from './ContactComponent.js';
import ApplyComponent from './ApplyComponent.js';
import PeopleComponent from './PeopleComponent.js';
import EventsComponent from './EventsComponent.js';
import FacesComponent from './FacesComponent.js';

import { SocialIcon } from 'react-social-icons';

import "./css/App.css";

import globe from './imgs/ACP-Globe.svg';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename = "/">
        <Navbar expand="lg" style={{backgroundColor: "#018DA8"}} sticky='top'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{width: "100%", margin:"auto"}}>
            <div style={{display: "flex", width: "100%", alignItems:"center", justifyContent:"space-between"}}>
                <Nav.Link className="my-nav-link text-24pt" style={{padding: "0px", color:"white"}} to="/" href="/"><img src={globe} width="60px" height="60px" alt="Home" /> ACP</Nav.Link>
              <div>
                <Nav.Link className="my-nav-link text-16pt" style={{paddingRight: "2vw", display:"inline-block", color:"white"}} to="/about" href="/about">About</Nav.Link>
                <Nav.Link className="my-nav-link text-16pt" style={{paddingRight: "2vw", display:"inline-block", color:"white"}} to="/contact" href="/contact">Contact</Nav.Link>
                <Nav.Link className="my-nav-link text-16pt" style={{paddingRight: "2vw", display:"inline-block", color:"white"}} to="/apply" href="/apply">Apply</Nav.Link>
                <Nav.Link className="my-nav-link text-16pt" style={{paddingRight: "2vw", display:"inline-block", color:"white"}} to="/faces" href="/faces">Faces</Nav.Link>
                <Nav.Link className="my-nav-link text-16pt" style={{paddingRight: "2vw", display:"inline-block", color:"white"}} to="/people" href="/people">People</Nav.Link>
                <Nav.Link className="my-nav-link text-16pt" style={{paddingRight: "2vw", display:"inline-block", color:"white"}} to="/events" href="/events">Events</Nav.Link>
                <SocialIcon network="spotify" url="https://open.spotify.com/playlist/7blqYsROEPAF9BskYRTFYG?si=oeELY4gxSleUMPR429CyIA" target="_blank" fgColor="#FFFFFF"/>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/contact" component={ContactComponent} />
        <Route path="/apply" component={ApplyComponent} />
        <Route path="/faces" component={FacesComponent} />
        <Route path="/people" component={PeopleComponent} />
        <Route path="/events" component={EventsComponent} />

        <div className="footer">
          <div className="footer-left">
            <p>Website designed by <a href="https://vidare.org" style={{color:"#FE8D3F"}} target="_blank">Vidare</a>, a 501(c)(3) nonprofit</p>
          </div>
          <div className="footer-right">
            <SocialIcon className="my-social-icon" network="linkedin" fgColor="FFFFFF" target="_blank" url="https://www.linkedin.com/company/austin-conservation-project"/>
            <SocialIcon className="my-social-icon" network="instagram" fgColor="FFFFFF" target="_blank" url="https://www.instagram.com/atx.conservation.project/"/>
            <SocialIcon className="my-social-icon" network="bandsintown" fgColor="FFFFFF" bgColor="#ff5a01" target="_blank" url="https://utexas.campuslabs.com/engage/organization/austinconservationproject"/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
