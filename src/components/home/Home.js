import {useNavigate,useLocation} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import styles from './Home.module.css';
import React, { useState,useEffect,useContext} from 'react'; 
import {Card, Row, Col, ButtonGroup, Button ,ToggleButtonGroup,ToggleButton} from 'react-bootstrap'

import CustomContainer from '../customContainer/CustomContainer.js'
import ClickableContainer from '../clickableContainer/ClickableContainer';
import content from '../../content/content.json'
import { AppContext } from "../../App.js";
import avatar from "../../Images/avatar.png"
import email from "../../Images/email.png"
import GitHub from "../../Images/github.png"
import instagram from "../../Images/instagram.png"
import linkedin from "../../Images/linkedin.png"

function Home() {
  const language = useContext(AppContext)
  const navigate = useNavigate()
  
  return (
<div>
<CustomContainer>
<div className={styles.firstRow}>
  <Row>
    <Col>
      <img src={avatar} alt="Logo" width="225" />
    </Col>
    <Col>
      <Row>
      <div className={styles.titleDashboard}><a>Renaud Lespérance</a></div>
        {/* <Col>
          <div className={styles.titleDashboard}><h1>Renaud Lespérance</h1></div>
        </Col> */}
      </Row>
      <Row className={styles.contactLink}>
        <Col><a href='mailto:renaudlesperance@outlook.com' target="_blank"><img src={email} alt="email" width="45"  /></a></Col>
        <Col><a href='https://www.linkedin.com/in/renaud-lesp%C3%A9rance-737b0b152/' target="_blank"><img src={linkedin} alt="linkedin" width="45"  /></a></Col>
        <Col><a href='https://github.com/renaudlesperance' target="_blank"><img src={GitHub} alt="GitHub" width="45"  /></a></Col>
        <Col><a href='https://www.instagram.com/renaudlesperance/' target="_blank"><img src={instagram} alt="instagram" width="45"  /></a></Col>
        {/* <Col><img src={linkedin} alt="linkedin" width="45" /></Col>
        <Col><img src={GitHub} alt="GitHub" width="45" /></Col>
        <Col><img src={instagram} alt="instagram" width="45" /></Col> */}
      </Row>
    </Col>
  </Row>
</div >
<div className={styles.secondRow}>
<Row>
    <Col>
      <ClickableContainer onClick={() => navigate(`/projects`)}>      
        <a>{content.navbar.projects[language]}</a>
      </ClickableContainer>
    </Col>
    <Col>
      <ClickableContainer onClick={() => navigate(`/experience`)}>      
        <a>{content.navbar.experience[language]}</a>
      </ClickableContainer>
    </Col>
    {/* <Col>
      <ClickableContainer onClick={() => navigate(`/contact`)}>      
        <a>{content.navbar.contact[language]}</a>
      </ClickableContainer>
    </Col> */}
</Row>
</div>

</CustomContainer>

</div>

  );
}
export default Home;
