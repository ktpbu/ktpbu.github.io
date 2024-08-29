import React, { useEffect } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

import {ReactComponent as FacebookLogo } from "../../images/icons/facebook-logo.svg";
import {ReactComponent as InstagramLogo } from "../../images/icons/instagram-logo.svg";
import {ReactComponent as YoutubeLogo } from "../../images/icons/youtube-logo.svg";
import {ReactComponent as LinkedinLogo } from "../../images/icons/linkedin-logo.svg";
import {ReactComponent as XLogo } from "../../images/icons/x-logo.svg";
import {ReactComponent as DropdownIcon} from "../../images/icons/dropdown-icon.svg";
import KTPLogo from '../../images/KTP/KTPLogos/ktplogo.png';

import './navbar.css';

const InvertedDropdownIcon = styled(DropdownIcon)`
    transform: rotate(180deg);
`

const NavLink = styled(Link)`
    &:hover {
        color: #7ac6d6; /* Transition color on hover */
        transition: 0.3s;
    }
`

const NavContainer = styled.div`
    background-color: #234c8a;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    position: sticky;
    filter: drop-shadow(0px 0px 5px #131313);
    padding: 0 8px 0 8px;
    
    * {
        font-weight: 600;
        color: white;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
    }
`

const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;

    &:hover > a {
        fill: #7ac6d6; /* Transition color on hover */
        transition: 0.3s;
    }
`

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-right: 16px;
`

const DropdownWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DropdownLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover > div {
        display: flex; /* Show the dropdown on hover */
        transition: all 0.3s ease;
    }
`

const DropdownContent = styled.div`
    display: none;
    flex-direction: column;
    gap: 16px;
    position: absolute;
    background-color: #234c8a;
    padding: 16px;
    z-index: 1;
    top: 100%; /* Position below the DropdownLink */
    margin-bottom: 16px;
    &:hover {
        display: flex; /* Keep it open */
    }
`

const StyledKTPLogo = styled.img`
    width: 64px;
    height: 64px;
`

export function Navbar () {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    return (
    <NavContainer>
        <IconsContainer>
            <a href="https://www.facebook.com/ktpbostonu" target="_blank" rel="noreferrer"><FacebookLogo/></a>
            <a href="https://instagram.com/ktpbostonu?igshid=YmMyMTA2M2" target="_blank"
               rel="noreferrer"><InstagramLogo/></a>
            <a href="https://www.youtube.com/channel/UCnAKU1RtEodVm2EL9m8vyNw" target="_blank"
               rel="noreferrer"><YoutubeLogo/></a>
            <a href="https://www.linkedin.com/company/kappa-theta-pi-lambda-chapter/" target="_blank"
               rel="noreferrer"><LinkedinLogo/></a>
            <a href="https://twitter.com/KappaThetaPiBU" target="_blank"
               rel="noreferrer"><XLogo/></a>
        </IconsContainer>
        <NavLinks>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/aboutktp"}>About</NavLink>
            <DropdownWrapper>
                <DropdownLink
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    Events {RenderDropdownIcon()}
                    <DropdownContent>
                      <NavLink to={"/aboutktp"}>Lambda</NavLink>
                      <NavLink to={"/hackktp"}>HackKTP</NavLink>
                    </DropdownContent>
                </DropdownLink>
            </DropdownWrapper>
            <NavLink to={"/rush"}>Rush</NavLink>
            <NavLink to={"/members"}>Members</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <StyledKTPLogo alt="KTP logo" src={KTPLogo} />
        </NavLinks>
     </NavContainer>
    );

    function RenderDropdownIcon () {
        if (isDropdownOpen) {
        return <InvertedDropdownIcon />;
        } else {
        return <DropdownIcon />;
        }
    }
}