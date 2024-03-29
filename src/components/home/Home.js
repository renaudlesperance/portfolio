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
import graduation from "../../Images/graduation.png"
import gear from "../../Images/gear.png"
import experience from "../../Images/experience.png"
import diploma from "../../Images/diploma.png"
import certificate from "../../Images/certificate.png"

function ExperienceCard () {
  const language = useContext(AppContext)
  return (
    <Card>
      <Card.Header as="h5" className={styles.colContainer}>
        <span>{content.navbar.experience[language]}</span>
        <img src={experience} alt="e" width="30"/> 
      </Card.Header>
      <Card.Body className={styles.cardContent}>
      <p><img src={diploma} alt="e" width="30"/> {content.Home.education.Master[language]} </p>
      <p><img src={diploma} alt="e" width="30"/> {content.Home.education.Master[language]} </p>
      <p><img src={diploma} alt="e" width="30"/> {content.Home.education.Master[language]} </p>
      </Card.Body>
    </Card>
  );
};

function EducationCard () {
  const language = useContext(AppContext)
  return (
    <Card>
      <Card.Header as="h5" className={styles.colContainer}>
        <span>{content.navbar.education[language]}</span>
        <img src={graduation} alt="e" width="30"/> 
      </Card.Header>
      <Card.Body className={styles.cardContent}>
        <p><img src={diploma} alt="e" width="30"/> {content.Home.education.Master[language]} </p>
        <p><img src={diploma} alt="e" width="30"/> {content.Home.education.BAC[language]} </p>
        <p><img src={diploma} alt="e" width="30"/> {content.Home.education.College[language]} </p>
      </Card.Body>
    </Card>
  );
};

function ProjectsCard () {
  const language = useContext(AppContext)
  return (
    <Card>
      <Card.Header as="h5" className={styles.colContainer}>
        <span>{content.navbar.projects[language]}</span>
        <img src={gear} alt="e" width="30"/> 
      </Card.Header>
      <Card.Body className={styles.cardContent}>
      <p><img src={diploma} alt="e" width="30"/> {content.Home.education.Master[language]} </p>
      </Card.Body>
    </Card>
  );
};

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
      </Row>
      <Row className={styles.contactLink}>
        <Col><a href='mailto:renaudlesperance@outlook.com' target="_blank"><img src={email} alt="email" width="45"  /></a></Col>
        <Col><a href='https://www.linkedin.com/in/renaud-lesp%C3%A9rance-737b0b152/' target="_blank"><img src={linkedin} alt="linkedin" width="45"  /></a></Col>
        <Col><a href='https://github.com/renaudlesperance' target="_blank"><img src={GitHub} alt="GitHub" width="45"  /></a></Col>
        <Col><a href='https://www.instagram.com/renaudlesperance/' target="_blank"><img src={instagram} alt="instagram" width="45"  /></a></Col>
      </Row>
    </Col>
  </Row>
</div >
<div className={styles.secondRow}>
<Row>
    <Col>
      <ClickableContainer onClick={() => navigate(`/experience`)}>      
        <ExperienceCard/>
      </ClickableContainer>
    </Col>
    <Col>
      <ClickableContainer onClick={() => navigate(`/education`)}>      
        <EducationCard/>
      </ClickableContainer>
    </Col>
</Row>
</div>

<div className={styles.secondRow}>
<Row>
  <Col>
    <ClickableContainer onClick={() => navigate(`/projects`)}>      
      <ProjectsCard/>
    </ClickableContainer>
  </Col>
</Row>
</div>

</CustomContainer>

</div>

  );
}
export default Home;
