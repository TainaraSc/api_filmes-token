import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 2rem 1rem;
`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const FooterLogo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

const FooterLinks = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        margin-top: 1rem;
    }
`;

const FooterLinkItem = styled.li`
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #ddd;
    }
`;

const CopyrightText = styled.p`
    margin-top: 1rem;
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLogo>MovieApp</FooterLogo>
                <FooterLinks>
                    <FooterLinkItem>Home</FooterLinkItem>
                    <FooterLinkItem>Categories</FooterLinkItem>
                    <FooterLinkItem>About Us</FooterLinkItem>
                    <FooterLinkItem>Contact</FooterLinkItem>
                </FooterLinks>
            </FooterContent>
            <CopyrightText>&copy; {new Date().getFullYear()} MovieApp. All rights reserved.</CopyrightText>
        </FooterContainer>
    );
};

export default Footer;
