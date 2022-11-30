import {useNavigate,useLocation} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import styles from './Home.module.css';
import React, { useState,useEffect,useContext} from 'react'; 
import {Card, Row, Col, ButtonGroup, Button ,ToggleButtonGroup,ToggleButton} from 'react-bootstrap'

import content from '../../content/content.json'
import { AppContext } from "../../App.js";


function Home() {
  const language = useContext(AppContext)
  
  return (
<div>

<a>{content.navbar.home[language]}</a>

</div>

  );
}
export default Home;
