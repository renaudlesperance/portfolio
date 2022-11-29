import logo from './logo.svg';
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

import contentEN from './content/contentEN.json' 
import contentFR from './content/contentFR.json'
const content = [contentFR,contentEN]

function App() {
  const [language, setlanguage] = useState(0)
  const languages = [content[language].navbar.languageFR,content[language].navbar.languageEN]
  const languagesAb = ["fr","en"]

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-light" fixed="top">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"> <a class="navbar-brand" href={"/#/home/" + languagesAb[language]}>Renaud Lespérance</a></li>
              <a class="nav-link active" aria-current="page" href={"/#/home/" + languagesAb[language]}>{content[language].navbar.home}</a>
              <a class="nav-link active" aria-current="page" href={"/#/projects/" + languagesAb[language]}>{content[language].navbar.projects}</a>
              <a class="nav-link active" aria-current="page" href={"/#/experience/" + languagesAb[language]}>{content[language].navbar.experience}</a>
              <a class="nav-link active" aria-current="page" href={"/#/contact/" + languagesAb[language]}>{content[language].navbar.contact}</a>
            </ul>

            <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
              {languages[language]}
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item"  href={"/#/home/" + languagesAb[language]} onClick={() => setlanguage(0)} >{content[language].navbar.languageFR}</a>
                <a class="dropdown-item"  href={"/#/home/" + languagesAb[language]} onClick={() => setlanguage(1)} >{content[language].navbar.languageEN}</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Router> <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="/experience/*" element={<Experience />}/>
        <Route path="/contact/*" element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes></Router>

    </div>
  );
}

export default App;