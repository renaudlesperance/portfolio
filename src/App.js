import './App.css';
import { HashRouter as Router, Routes,Route,Link,useNavigate} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState,useEffect } from 'react'; 
import {Card, Row, Col, ButtonGroup, Button ,ToggleButtonGroup,ToggleButton} from 'react-bootstrap'

import Home from "./components/home/Home.js"
import Projects from "./components/projects/Projects.js"
import Contact from "./components/contact/Contact.js"
import Experience from "./components/experience/Experience.js"
import PageNotFound from "./components/pagenotfound/PageNotFound.js"
import avatar from "./Images/avatar.png"

import content from './content/content.json'
const AppContext = React.createContext();

function App() {
  const [language, setlanguage] = useState("fr")

  return (
    <AppContext.Provider value={language}>
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-light" fixed="top">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-brand">
              <img src={avatar} alt="Logo" width="45" />
            </div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"> <a class="navbar-brand" href={"/#/home"}>Renaud Lespérance</a></li>
              <a class="nav-link active" aria-current="page" href={"/#/home"}>{content.navbar.home[language]}</a>
              <a class="nav-link active" aria-current="page" href={"/#/projects"}>{content.navbar.projects[language]}</a>
              <a class="nav-link active" aria-current="page" href={"/#/experience"}>{content.navbar.experience[language]}</a>
              <a class="nav-link active" aria-current="page" href={"/#/contact"}>{content.navbar.contact[language]}</a>
            </ul>

            <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
              {content.navbar.language[language]}
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item"  onClick={() => setlanguage("fr")} >{content.navbar.languageFR[language]}</a>
                <a class="dropdown-item"  onClick={() => setlanguage("en")} >{content.navbar.languageEN[language]}</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Router> <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes></Router>

    </div>
    </AppContext.Provider>
  );
}

export {AppContext};
export default App;