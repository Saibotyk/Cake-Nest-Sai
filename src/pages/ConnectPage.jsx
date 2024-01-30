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
    margin:0 auto;
    height: 100vh;

    ::before{
      background-color: black;
      /* background-image: linear-gradient(to right, rgb(0 0 0 / 100%), rgb(0 0 0 / 0%)), url(${bg}); */
    }
  `;

