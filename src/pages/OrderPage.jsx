import React from 'react'
import { useParams } from 'react-router-dom'

import { theme } from '../components/Theme';
import styled from 'styled-components'
import NavBar from '../components/reusable_ui/NavBar';
import Container from '../components/reusable_ui/Container';
import Card from '../components/card';
import { fakeSmallMenu } from '../components/fakeData/fakeMenu';

export default function OrderPage() {

  const { username } = useParams();

  return (
    <BackgroundStyled>
      <Container>
        <NavBar username={username} />
        {
          fakeSmallMenu.map((product) => <Card key={product.id}  image={product.imageSource} name={product.title} price={product.price}/>  )
        }

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