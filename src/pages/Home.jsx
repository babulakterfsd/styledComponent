import React from 'react';
import { Container, LinkContainer } from '../styles/Containers.styles';
import { StyledCustomText } from '../styles/Custom.styles';
import {
    CustomLink,
    NormalTextContainer,
    // eslint-disable-next-line prettier/prettier
    TitleContainer
} from '../styles/Elements.styles';
import GlobalStyle from '../styles/Global.styles';

function Home() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <TitleContainer>This is a title</TitleContainer>
                <NormalTextContainer bgcolor="#3b5" color="#fff">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere inventore,
                    consequatur est aspernatur soluta porro quis, voluptates ex dignissimos ab esse,
                    vel dicta magnam mollitia maiores corrupti blanditiis libero necessitatibus?
                </NormalTextContainer>
                <LinkContainer>
                    <StyledCustomText text="This is styled custom text" color="#3b5" />
                    <CustomLink href="https://babulakter.com" fontWeight="bold" fontSize="18px">
                        visit portfolio
                    </CustomLink>
                </LinkContainer>
            </Container>
        </>
    );
}

export default Home;
