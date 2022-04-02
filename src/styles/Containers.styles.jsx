import Styled from 'styled-components';

export const Container = Styled.div`
    height: 50vh;
    width: 50vw;
    box-shadow: 2px 12px 8px #ccc;
    margin: 120px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

export const LinkContainer = Styled.div`
    width: inherit;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
