import {useNavigate,useParams,useLocation} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import styles from './Experience.module.css';
import React, { useState,useEffect,useContext} from 'react'; 
import {Card, Row, Col, ButtonGroup, Button ,ToggleButtonGroup,ToggleButton} from 'react-bootstrap'

import content from '../../content/content.json'
import { AppContext } from "../../App.js";


function Experience() {
  const language = useContext(AppContext)
  
  return (
<div>

<a>{content.navbar.experience[language]}</a>

</div>

  );
}
export default Experience;