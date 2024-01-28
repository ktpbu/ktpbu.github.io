import React from 'react'
import KTPLogo from '../../img/KTP/KTPLogos/ktplogo.png';
import { Link } from "react-router-dom";
import './navbar.css';

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Navbar = () => {
    return (
    <div class="topnav" id="myTopnav">
        <div class="social-icons">
        <a
          href="https://www.facebook.com/ktpbostonu"
          rel="noopener noreferrer"
          title="Facebook"
          ><i class="fab fa-facebook-f"></i></a>
        <a
          href="https://instagram.com/ktpbostonu?igshid=YmMyMTA2M2"
          rel="noopener noreferrer"
          title="Instagram"
          ><i class="fab fa-instagram"></i></a>
        <a
          href="https://www.youtube.com/channel/UCnAKU1RtEodVm2EL9m8vyNw"
          rel="noopener noreferrer"
          title="Youtube"
          ><i class="fab fa-youtube" aria-hidden="true"></i></a>
        <a
          href="https://www.linkedin.com/company/kappa-theta-pi-lambda-chapter/"
          rel="noopener noreferrer"
          title="LinkedIn"
          ><i class="fab fa-linkedin" aria-hidden="true"></i></a>
        <a
          href="https://twitter.com/KappaThetaPiBU"
          rel="noopener noreferrer"
          title="Twitter"
          ><i class="fab fa-twitter" aria-hidden="true"></i></a>
      </div>
      <div class="nav-links">
       <Link to={"/"}>Home</Link>
        <div class="dropdown">
          <button class="dropbtn">
            About
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
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