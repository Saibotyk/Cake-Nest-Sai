import React from 'react'
import styled from 'styled-components'
import { theme } from './Theme'

export default function Card({image, name, price}) {
  return (
    <CardStyled>
        <img src={image} alt="Un cupcake" />
        <h4 className='name'>{name}</h4>
        <div>
            <p>{price}</p>
            <button>Ajouter</button>
        </div>
    </CardStyled>
  )
}

const CardStyled = styled.article`

`;
