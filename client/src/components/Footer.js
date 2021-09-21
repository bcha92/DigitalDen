import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Footer = () => {

    return (
        <FooterContainer>
            <FooterLink to="#">About</FooterLink>
            <FooterLink to="#">Contact</FooterLink>
            <FooterLink to="#">Terms of Use</FooterLink>
            <FooterLink to="#">FAQ</FooterLink>
        </FooterContainer>
    )
};

const FooterContainer = styled.div`
width: 100%;
height: 60px;
position: fixed;
left: 0;
bottom: 0;
background-color: #F4A869;
color: white;
display: flex;
justify-content: space-evenly;
text-decoration: none;
`

const FooterLink = styled(Link)`
color: white;
text-decoration:none;
margin: 25px;
`