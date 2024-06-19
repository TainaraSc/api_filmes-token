import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
    background-color: #333;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.h1`
    font-size: 2rem;
    margin: 0;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 1rem;
    }

    a {
        color: #fff;
        text-decoration: none;
        margin-left: 1.5rem;
        font-size: 1.2rem;
        transition: color 0.3s ease;

        &:hover {
            color: #61dafb;
        }

        @media (max-width: 768px) {
            margin-left: 0;
            margin-top: 1rem;
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>MovieApp</Logo>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/tv-shows">TV Shows</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
