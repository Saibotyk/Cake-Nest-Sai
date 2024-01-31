import React from 'react'
import { useParams } from 'react-router-dom'
import { theme } from '../components/Theme';
import styled from 'styled-components'
import NavBar from '../components/reusable_ui/NavBar';
import Container from '../components/reusable_ui/Container';
import Card from '../components/reusable_ui/Card';
import { fakeMenu } from '../components/fakeData/fakeMenu';

export default function OrderPage() {

  const { username } = useParams();

  return (
    <BackgroundStyled>
      <Container>
        <NavBar username={username} />
          <ShopStyled>
            {
              fakeMenu.map((product) => <Card key={product.id} image={product.imageSource} name={product.title} price={product.price} />)
            }
          </ShopStyled>
      </Container>
    </BackgroundStyled>
  )
}

const BackgroundStyled = styled.div`
    content: "";
    position: absolute  ;
    top: 0;
    left: 0;
    bottom: 0;
    /* z-index: -1000; */
    background-color: ${theme.colors.primary};
    /* height: 100vh; */
    width: 100vw;

`;

const ShopStyled = styled.div`
  display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 50px 50px 150px;
    gap: 5rem;
    max-height: 62vh;
    overflow-y: scroll;
`;