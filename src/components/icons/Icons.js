import {useNavigate,useParams,useLocation} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import styles from './Icons.module.css';
import React, { useState,useEffect,useContext} from 'react'; 
import {Card, Row, Col, ButtonGroup, Button ,ToggleButtonGroup,ToggleButton} from 'react-bootstrap'

import content from '../../content/content.json'
import { AppContext } from "../../App.js";

import email from "../../Images/email.png"
import GitHub from "../../Images/github.png"
import instagram from "../../Images/instagram.png"
import linkedin from "../../Images/linkedin.png"
import graduation from "../../Images/graduation.png"
import gear from "../../Images/gear.png"
import experience from "../../Images/experience.png"
import diploma from "../../Images/diploma.png"
import certificate from "../../Images/certificate.png"


function Icons() {
  const language = useContext(AppContext)
  
  return (
<div>

<p><img src={email} alt="e" width="30"/> <a href="https://www.flaticon.com/free-icons/email" target="_blank" title="email icons">Email icons created by Freepik - Flaticon</a> </p>
<p><img src={GitHub} alt="e" width="30"/> <a href="https://www.flaticon.com/free-icons/github" target="_blank" title="github icons">Github icons created by Pixel perfect - Flaticon</a> </p>
<p><img src={instagram} alt="e" width="30"/> <a href="https://www.flaticon.com/free-icons/instagram" target="_blank" title="instagram icons">Instagram icons created by Grow studio - Flaticon</a> </p>
<p><img src={linkedin} alt="e" width="30"/> <a href="https://www.flaticon.com/free-icons/linkedin" target="_blank" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a> </p>
<p><img src={graduation} alt="e" width="30"/> <a href="https://www.flaticon.com/free-icons/degree" target="_blank" title="degree icons">Degree icons created by apien - Flaticon</a> </p>
<p><img src={gear} alt="e" width="30"/> <a href="https://www.flaticon.com/free-icons/gear" target="_blank" title="gear icons">Gear icons created by Freepik - Flaticon</a> </p>
<p><img src={experience} alt="e" width="30"/> <a href="https://www.flaticon.com/free-icons/experience" target="_blank" title="experience icons">Experience icons created by Culmbio - Flaticon</a> </p>
<p><img src={diploma} alt="e" width="30"/> <a href="https://www.flaticon.com/free-icons/certificate" target="_blank" title="certificate icons">Certificate icons created by Freepik - Flaticon</a> </p>
<p><img src={certificate} alt="e" width="30"/> <a href="https://www.flaticon.com/free-icons/certificate" target="_blank" title="certificate icons">Certificate icons created by amonrat rungreangfangsai - Flaticon</a>  </p>

</div>

  );
}
export default Icons;
