import React from 'react'
import { Link } from "react-router-dom";

import { Navbar } from '../components/navbar/navbar'; // Import the navbar component into all files.
import BrotherImage1 from "../images/Brothers/BrotherImage1.jpg";
import BrotherImage2 from "../images/Brothers/BrotherImage2.jpg";

export const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="text_section_1">
            <h1><span>" </span>For the Love of Technology!</h1>

            <p>
                As the only professional technology fraternity in the nation, we strive
                to shape the future of technology and foster innovation through our
                strong community. Our co-ed fraternity not only represents advancements
                in technology, but also embraces the importance of collaboration and
                connection in the digital age. We believe that a future world deserves a
                futuristic fraternity that prepares its members for the challenges and
                opportunities of the ever-evolving technological landscape. Together, we
                inspire and empower individuals to excel in their technical expertise,
                leadership skills, and social responsibility, ensuring a brighter future
                for all.
            </p>

            <div className="button_1">
                <button>
                    <Link to={"/rush"}>Join KTP</Link>
                </button>
            </div>
        </div>
        
        <div className="horz_images_section">
            <img src={BrotherImage1}  alt="Brothers Tim and Carol in a workshop" />
            <img src={BrotherImage2} alt="Brothers Tim, Victor, and Andrea in a workshop" />
        </div>
        
        <div className="jnc_section">
            <div className="jnc_card">
                <div className="jnc_circle">
                    <i className="fa-solid fa-right-to-bracket"></i>
                </div>
                <div className="jnc_text">
                    <h1><span>!</span>Join</h1>
                    <p>Get ahead with this community of future focused people</p>
                </div>
            </div>

            <div className="jnc_card">
                <div className="jnc_circle">
                    <i className="fa-solid fa-newspaper"></i>
                </div>
                <div className="jnc_text">
                    <h1><span>//</span>News</h1>
                    <p>Stay up to date on KTP rush and open events</p>
                </div>
            </div>

            <div className="jnc_card">
                <div className="jnc_circle">
                    <i className="fa-solid fa-address-book"></i>
                </div>
                <div className="jnc_text">
                    <h1><span>#</span>Contact</h1>
                    <p>Contact us for information or with any questions or concerns</p>
                </div>
            </div>
        </div>

        <div className="f_hero_section"></div>

        <footer className="footer">
            <div className="footer_logo_container">
                <div className="footer_logo"></div>
            </div>

            <div className="footer_text">
                <p>© 2023 Kappa Theta Pi Alpha Chapter. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  );
}