import React from 'react'
import { useParams } from 'react-router-dom'

import { theme } from '../components/Theme';
import styled from 'styled-components'
import NavBar from '../components/reusable_ui/NavBar';
import Container from '../components/reusable_ui/Container';

export default function OrderPage() {

  const { username } = useParams();

  return (
    <BackgroundStyled>
      <Container>
        <NavBar username={username} />
      </Container>
    </BackgroundStyled>
  )
}

const BackgroundStyled = styled.div`
    content: "";
    position: absolute  ;
    top: 0;
    left: 0;
    z-index: -1000;
    background-color: ${theme.colors.primary};
    height: 100%;
    width: 100%;
  
`;