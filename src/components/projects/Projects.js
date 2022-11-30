import {useNavigate,useParams,useLocation } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import styles from './Projects.module.css';
import React, { useState,useEffect,useContext} from 'react'; 
import {Card, Row, Col, ButtonGroup, Button ,ToggleButtonGroup,ToggleButton} from 'react-bootstrap'

import content from '../../content/content.json'
import { AppContext } from "../../App.js";


function Projects() {
  const language = useContext(AppContext)
  
  return (
<div>

<a>{content.navbar.projects[language]}</a>

</div>

  );
}
export default Projects;
