import React from 'react'
import { useParams } from 'react-router-dom'

import { theme } from '../components/Theme';
import styled from 'styled-components'
import NavBar from '../components/reusable_ui/NavBar';

export default function OrderPage() {

  const { username } = useParams();

  return (
    <BackgroundStyled>
      <NavBar username={username}/>
    </BackgroundStyled>
  )
}

const BackgroundStyled = styled.div`
  height: 100vh;
  ::before{
    content: "";
    position: absolute  ;
    top: 0;
    left: 0;
    z-index: -1000;
    background-color: ${theme.colors.primary};
    height: 100vh;
    width: 100vw;
  }
`;