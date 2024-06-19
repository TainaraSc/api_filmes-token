import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    background-color: #f0f0f0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 800px;
`;

export const MovieImage = styled.img`
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    margin-bottom: 1rem;
`;

export const MovieInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left; /* Alinhar o texto à esquerda em telas maiores */
`;

export const MovieTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
`;

export const MovieDescription = styled.p`
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 1rem;
    text-align: justify;
`;

export const BackButton = styled.button`
    margin-top: 1rem;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #61dafb;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
    max-width: 200px;
    &:hover {
        background-color: #21a1f1;
    }
`;

