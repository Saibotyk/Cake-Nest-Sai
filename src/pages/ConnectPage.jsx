import React from 'react'
import ConnectForm from '../components/ConnectForm'
import styled from 'styled-components'
import bg from '../assets/tarts.jpg'
import Logo from '../components/reusable_ui/Logo'

export default function ConnectPage() {


  return (
    <StyledDiv>
      <Logo />
      <ConnectForm />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`

    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 5rem 0;
    height: 100vh;
    width: 50vw;
    
    ::before{
      content: "";
    position: absolute; 
    top: 0;
    left: 0;
    width: 100vw; /* Couvre toute la largeur du parent */
    height: 100vh; /* Couvre toute la hauteur du parent */
    background-image: linear-gradient(to right, rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)), url(${bg});
    z-index: -1000;
    background-size: cover;
    background-repeat: no-repeat;
    }
  `;

