import React from 'react'
import { Navbar } from '../../components/navbar/navbar'; // Import the navbar componenet into all files.
import Josh from '../../images/KTP/Headshots/Alpha Headshots/Josh1-min.webp';
import './rush.css';

export const Rush = () => {
  return (
    <div>
      <Navbar />
      <div class="rushvideo">
        <iframe
            src="https://www.youtube.com/embed/EVwqvkNbDvY?si=-RQPfEXQzWKIuBPF"  title="KTP Rush YouTube Video Player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy">
        </iframe> 
      </div>
      <div class="text_section_1">
            
        <h1>Rush KTP this Spring!</h1>

        <p>Discover your path by becoming a part of our brotherhood at Kappa Theta Pi! Your journey towards meaningful connections and unparalleled personal growth begins here. If you're eager to be a member of a community that values leadership, camaraderie, and academic excellence, now is the time to take action. Show us your interest in joining our brotherhood by clicking below and accessing our Rush Interest Form. Your commitment starts here!</p>

    </div>

    <div class="text_image_section">

        <div class="image_section">

            <img src={ Josh } alt="Josh Leeds"/>

        </div>

        <div class="text_section">

            <h1>Why Rush KTP?</h1>

            <p>Dear Prospective Members,</p>

            <p>As the Vice President of Recruitment of Kappa Theta Pi, I invite you to Rush KTP and become part of our exceptional orginization. As the first technology fraternity, we offer unique opportunities for members to develop skills, knowledge, and professional networks. Our community shares a strong passion and commitment for technology and innovation. We prioritize building a strong brotherhood and promoting social activities with members from a multitude of backgrounds. This multidisciplinary membership provides a unique opportunity for members to learn and advance from each other.</p>
    
            <p>Sincerely,</p>
                    
            <p>Josh Leeds<br/> Vice President of Recruitment 2024</p>

        </div>

    </div>
    </div>
  );
}