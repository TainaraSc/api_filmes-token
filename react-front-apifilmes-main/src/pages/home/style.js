import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    h1 {
        text-align: center;
        margin: 2rem 0;
        font-size: 2.5rem;
        color: #333; /* Mudança: cor do título */
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
`;

export const Movie = styled.li`
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
`;

export const MovieImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const MovieDetails = styled.div`
    padding: 1.5rem;
`;

export const MovieTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333; /* Mudança: cor do título */
`;

export const MovieInfo = styled.p`
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
`;

export const Btn = styled.button`
    display: block;
    width: 100%;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #61dafb;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: all 250ms;
    &:hover {
        background-color: #21a1f1;
    }
`;

export const CategoryButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 1rem; /* Mudança: espaçamento entre os botões */
`;

export const CategoryButton = styled.button`
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 10px;
    background-color: #61dafb;
    color: #fff;
    cursor: pointer;
    transition: all 250ms;
    &:hover {
        background-color: #21a1f1;
    }
`;
