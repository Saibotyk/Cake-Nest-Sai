import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { theme } from '../components/Theme';
import styled from 'styled-components'
import NavBar from '../components/reusable_ui/NavBar';
import Container from '../components/reusable_ui/Container';
import Card from '../components/reusable_ui/Card';
import { fakeMenu } from '../components/fakeData/fakeMenu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPanel from '../components/adminPanel/AdminPanel';
import DocumentContext from '../context/AdminContext';
import { useState } from 'react';

export default function OrderPage() {

  const { username } = useParams();
  const [ addOrModify, setAddOrModify ] = useState("add")
  const {isAdmin, setIsAdmin }= useContext(DocumentContext);
  
  const [ shopMenu, setShopMenu] = useState(fakeMenu);

  return (
    
    <BackgroundStyled>
      <Container>
        <NavBar username={username}/>
        <ShopStyled>
          {
            shopMenu.map((product) => <Card key={product.id} image={product.imageSource} name={product.title} price={product.price} />)
          }
        </ShopStyled>
        {isAdmin ? <AdminPanel addOrModify={addOrModify} setAddOrModify={setAddOrModify} shopMenu={shopMenu} setShopMenu={setShopMenu} /> : ""}
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce />
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
    height: 100vh;
    width: 100vw;

`;

const ShopStyled = styled.div`
  display: grid;
  overflow-y: scroll;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px 50px 150px;
  gap: 5rem;
  max-height: 65vh;
`;