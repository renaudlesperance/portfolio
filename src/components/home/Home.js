import {useNavigate,useLocation} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import styles from './Home.module.css';
import React, { useState,useEffect,useContext} from 'react'; 
import {Card, Row, Col, ButtonGroup, Button ,ToggleButtonGroup,ToggleButton} from 'react-bootstrap'

import content from '../../content/content.json'
import { AppContext } from "../../App.js";
import avatar from "../../Images/avatar.png"

function Home() {
  const language = useContext(AppContext)
  
  return (
<div>

<Row>
  <Col>
  <img src={avatar} alt="Logo" width="200" />
  </Col>
  <Col>
    <Row>
      <Col>Renaud Lespérance</Col>
    </Row>
    <Row>
      <Col>Mail</Col>
      <Col>Linkin</Col>
      <Col>GitHub</Col>
      <Col>Instagram</Col>
    </Row>
  </Col>
</Row>

<Row>
  <Col>
  <a>{content.navbar.home[language]}</a>
  </Col>
  <Col>
  <a>{content.navbar.home[language]}</a>
  </Col>
  <Col>
  <a>{content.navbar.home[language]}</a>
  </Col>
</Row>


</div>

  );
}
export default Home;
