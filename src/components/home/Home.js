import {useNavigate} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import styles from './Home.module.css';
import React, { useState,useEffect } from 'react'; 
import {Card, Row, Col, ButtonGroup, Button ,ToggleButtonGroup,ToggleButton} from 'react-bootstrap'


import contentEN from '../../content/contentEN.json' 
import contentFR from '../../content/contentFR.json'
const content = [contentFR,contentEN]

function Home() {
  const [language, setlanguage] = useState(0)
  const languages = [content[language].navbar.languageFR,content[language].navbar.languageEN]

  return (
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"> <a class="navbar-brand" href="Home">Renaud Lespérance</a></li>
          <a class="nav-link active" aria-current="page" href="Home">{content[language].navbar.home}</a>
          <a class="nav-link active" aria-current="page" href="Projet">{content[language].navbar.projects}</a>
          <a class="nav-link active" aria-current="page" href="Experience">{content[language].navbar.experience}</a>
          <a class="nav-link active" aria-current="page" href="Contact">{content[language].navbar.contact}</a>
        </ul>

        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
          {languages[language]}
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item"  onClick={() => setlanguage(0)} >{content[language].navbar.languageFR}</a>
            <a class="dropdown-item"  onClick={() => setlanguage(1)} >{content[language].navbar.languageEN}</a>
          </div>
        </div>


      </div>
    </div>
  </nav>

  );
}
export default Home;
