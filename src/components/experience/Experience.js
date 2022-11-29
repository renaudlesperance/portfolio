import {useNavigate,useParams,useLocation} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import styles from './Experience.module.css';
import React, { useState,useEffect } from 'react'; 
import {Card, Row, Col, ButtonGroup, Button ,ToggleButtonGroup,ToggleButton} from 'react-bootstrap'
import contentEN from '../../content/contentEN.json' 
import contentFR from '../../content/contentFR.json'

const content = [contentFR,contentEN]

function Experience() {
  let language = 0
  const languages = [content[language].navbar.languageFR,content[language].navbar.languageEN]
  const location = useLocation()
  if (location.pathname.substring(location.pathname.length - 2) == "fr") {language = 0}
  else if(location.pathname.substring(location.pathname.length - 2) == "en"){language = 1}
  
  return (
<div>

<a>Experience {languages[language]}</a>

</div>

  );
}
export default Experience;
