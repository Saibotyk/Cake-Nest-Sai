import React from 'react'
import styled from 'styled-components'
import { theme } from '../Theme'
import { formatPrice } from '../utils/maths'

export default function Card({ image, name, price }) {
  return (
    <CardStyled>
      <img src={image} alt="Un cupcake" className='shop-img' />
      <div className='grid-price-button'>
        <h4 className='name'>{name}</h4>
        <p className='price'>{formatPrice(price)}</p>
        <button className='btn-add'>Ajouter</button>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${theme.borderRadius.extraRound};
  justify-content: space-around;
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.xl} ${theme.spacing.sm};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  .shop-img{
    width:100%;
    object-fit: contain;
  }

  .grid-price-button{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 10px;
    align-items: center;
  }

  .name{
    font-family: 'Pacifico', cursive;
    font-size:${theme.fonts.size.P3};
    grid-area: 1 / 1 / 2 / 3;
    margin: 0;
  }
  
  .price{
    grid-area: 2 / 1 / 3 / 2;
    margin: 0;
    color: ${theme.colors.primary};
    font-family: 'Open Sans', sans-serif;
    font-size: ${theme.fonts.size.Xl};
  }

  .btn-add{
    grid-area: 2 / 2 / 3 / 3;
    padding: .8rem 2rem;
    background-color: ${theme.colors.primary};
    border: none;
    color: white;
    font-weight: bold;
    border-radius: ${theme.borderRadius.round};
  }

  .btn-add:hover{
    cursor: pointer;
    background-color: ${theme.colors.primary_cake};
  }

`;
