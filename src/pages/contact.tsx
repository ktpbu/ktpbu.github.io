import React from 'react'
import styled from "styled-components";

import BULogo from '../images/KTP/KTPLogos/betterBULogo.png';
import Companies from '../images/Boston/Companies.png';

import { Header, BodyText } from './styles';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5% 15% 5% 15%;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    * {
        text-align: left;
    }
`

const StyledImage = styled.img`
    width: 50%;
    height: 50%;
    margin: 1em;
    border-radius: 3%;
`

export function Contact () {
  return (
    <Container>
        <CardContainer>
            <StyledImage src={BULogo}/>
            <TextContainer>
                <Header>Students</Header>
                <BodyText>Hello, prospectives! We're thrilled that you're interested in learning more about our fraternity, and we're here to assist you every step of the way. If you have any questions about our organization, events, or how to get involved, please don't hesitate to reach out. Our dedicated team is ready to provide you with all the information you need to make an informed decision about joining us. Feel free to drop us an email at ktpbostonu@gmail.com, and we'll get back to you as soon as possible. We look forward to connecting with you and sharing the incredible experiences our fraternity has to offer.</BodyText>
            </TextContainer>
        </CardContainer>
        <CardContainer>
            <StyledImage src={Companies}/>
            <TextContainer>
                <Header>Companies</Header>
                <BodyText>Hello, all companies and potential collaborators! Thank you for considering partnering with us. We believe in the power of strong partnerships to drive innovation and success. If you are interested in exploring opportunities for collaboration, sponsorship, or any other business-related inquiries, please don't hesitate to contact us. We are eager to discuss how we can work together to achieve mutual goals and create meaningful impact. Please reach out to us at your convenience via email at ktpbostonu@gmail.com, and our dedicated team will be delighted to connect with you. Let's embark on a journey of growth and prosperity together.</BodyText>
            </TextContainer>
        </CardContainer>
    </Container>
  );
}