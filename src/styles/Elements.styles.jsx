import styled from 'styled-components';

// all the elements style will be written here as named export

export const TitleContainer = styled.h1`
    font-size: 30px;
    color: green;
    text-decoration: underline;
    margin-bottom: 24px;
`;

export const NormalTextContainer = styled.p`
    font-weight: bold;
    padding: 24px;
    background: ${(props) =>
        props.bgcolor}; // props gula amra evabe pete pari styled component e. r etar ei super power er maddhome amra component ke call korar somoy dynamic vaabe style pathate pari
    color: ${(props) => props.color};
    margin-bottom: 24px;
`;

export const CustomLink = styled.a`
    text-decoration: none;
    display: block;
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    text-shadow: 2px 2px 8px #0cf145;
    :hover {
        text-shadow: 2px 2px 8px #6f04fa;
    }
`;
