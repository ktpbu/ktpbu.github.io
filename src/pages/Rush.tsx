import React from 'react';
import styled from 'styled-components'

import Josh from '../images/KTP/Headshots/Alpha Headshots/Josh1-min.webp';

import { Header } from './styles';

const Container = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px 15% 5% 15%;
    
    * {
        margin-bottom: 32px;
    }
`

const RushLink = styled.a`
    text-decoration: underline;
    font-size: 48px;
    font-weight: bolder;
    color: #234c8a;
    cursor: pointer;
`

const JoshImage = styled.img`
    width: 100%;
    border-radius: 15px;
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin: 0;
`

const RushVideo = styled.iframe`
    width: 100%;
    height: 560px;
`

const TextContainer = styled.div`
    * {
        text-align: left;
        font-weight: 600;
    }
`

export function Rush () {
  return (
        <Container>
            <RushLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf8aqfjmflkndRivZhKlTDrsUIOGxWPqQQqT0GAnnqypv0dug/viewform?usp=sf_link">Fall 2024 Rush Interest Form</RushLink>
            <RushVideo
                src="https://www.youtube.com/embed/EVwqvkNbDvY?si=-RQPfEXQzWKIuBPF"  title="KTP Rush YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true} loading="lazy">
            </RushVideo>
            <TextContainer>
            <Header>Rush KTP this Fall!</Header>
            <div>Discover your path by becoming a part of our brotherhood at Kappa Theta Pi! Your journey towards meaningful connections and unparalleled personal growth begins here. If you're eager to be a member of a community that values leadership, camaraderie, and academic excellence, now is the time to take action. Show us your interest in joining our brotherhood by clicking the link above and accessing our Rush Interest Form. Your commitment starts here!</div>
            </TextContainer>
            <ImageContainer>
                <div><JoshImage src={ Josh } alt="Josh Leeds"/></div>
                <TextContainer>
                    <Header>Why Rush KTP?</Header>
                    <div>Dear Prospective Members, <br/> <br/>
                        As the Vice President of Recruitment of Kappa Theta Pi, I invite you to Rush KTP and become part of our
                        exceptional organization. As the first technology fraternity, we offer unique opportunities for members
                        to develop skills, knowledge, and professional networks. Our community shares a strong passion and
                        commitment for technology and innovation. We prioritize building a strong brotherhood and promoting
                        social activities with members from a multitude of backgrounds. This multidisciplinary membership
                        provides a unique opportunity for members to learn and advance from each other. <br/> <br/>
                        Sincerely, <br/>
                        Josh Leeds<br/> Vice President of Recruitment 2024
                    </div>
                </TextContainer>
            </ImageContainer>
        </Container>
  );
}