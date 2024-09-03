import React from 'react';
import styled from "styled-components";

import KTPLogo from '../images/KTP/KTPLogos/KTPKTP.png';

const FooterContainer = styled.footer`
    background-color: var(--purple);
    justify-content: space-between;
    height: 130px;
    max-width: 100%;
    display: flex;
    align-items: center;
    padding: 12px;
`

const FooterImage = styled.img`
    height: 125px;
    width: 125px;
    background-color: #a3e4a3;
    border-radius: 100px;
    background-size: contain;
`

const FooterText = styled.div`
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
`

export function Footer() {
    return (
        <FooterContainer>
            <FooterImage src={KTPLogo}/>
            <FooterText>© 2023 Kappa Theta Pi Alpha Chapter. All Rights Reserved.</FooterText>
        </FooterContainer>
    )
}

