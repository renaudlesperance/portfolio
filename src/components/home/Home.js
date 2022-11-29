import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import styles from './Home.module.css'


function Home() {
  return (
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"> <a class="navbar-brand" href="Home">Renaud Lespérance</a></li>
          <a class="nav-link active" aria-current="page" href="Home">Home</a>
          <a class="nav-link active" aria-current="page" href="Projet">Projet</a>
          <a class="nav-link active" aria-current="page" href="Expérience">Expérience</a>
          <a class="nav-link active" aria-current="page" href="Contact">Contact</a>
        </ul>
      </div>
    </div>
  </nav>

  );
}
export default Home;
