import React from 'react'
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
// @ts-ignore
import KTPLogo from '../../images/KTP/KTPLogos/ktplogo.png';

import './navbar.css';

export function Navbar () {
    return (
    <div className="topnav" id="myTopnav">
        <div className="social-icons">
        <a
          href="https://www.facebook.com/ktpbostonu"
          rel="noopener noreferrer"
          title="Facebook"
          ><i className="fab fa-facebook-f"></i></a>
        <a
          href="https://instagram.com/ktpbostonu?igshid=YmMyMTA2M2"
          rel="noopener noreferrer"
          title="Instagram"
          ><i className="fab fa-instagram"></i></a>
        <a
          href="https://www.youtube.com/channel/UCnAKU1RtEodVm2EL9m8vyNw"
          rel="noopener noreferrer"
          title="Youtube"
          ><i className="fab fa-youtube" aria-hidden="true"></i></a>
        <a
          href="https://www.linkedin.com/company/kappa-theta-pi-lambda-chapter/"
          rel="noopener noreferrer"
          title="LinkedIn"
          ><i className="fab fa-linkedin" aria-hidden="true"></i></a>
        <a
          href="https://twitter.com/KappaThetaPiBU"
          rel="noopener noreferrer"
          title="Twitter"
          ><i className="fab fa-twitter" aria-hidden="true"></i></a>
      </div>
      <div className="nav-links">
       <Link to={"/"}>Home</Link>
        <div className="dropdown">
          <button className="dropbtn">
            About
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
          <Link to={"/aboutktp"}>Lambda</Link>
          <Link to={"/hackktp"}>HackKTP</Link>
          </div>
        </div>
        <Link to={"/rush"}>Rush</Link>
        <Link to={"/members"}>Members</Link>
        <Link to={"/contact"}>Contact</Link>

        <img alt="KTP logo" src={KTPLogo} />
      </div>
     </div>
    );
}