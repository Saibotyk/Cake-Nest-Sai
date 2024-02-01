import React from 'react'
import { FaChevronUp } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import styled from 'styled-components';
import { theme } from '../Theme';
import { useState } from 'react';


export default function AdminPanel() {
    const { isOpen, setIsOpen } = useState(false)
    const { addOrModify, setAddOrModify } = useState("add")


    return (
        <ContainerAdminPanelStyled>
            <div className='container-btn'>
                <button className='btn-admin'><FaChevronUp /></button>
                <button className='btn-admin-light'><FaPlus /> Ajouter un produit</button>
                <button className='btn-admin'><FaPencilAlt /> Modifier un produit</button>
            </div>
            <div className='panel-add'>
                <p>Ajouter un produit</p>
            </div>
        </ContainerAdminPanelStyled>
    )
}

const ContainerAdminPanelStyled = styled.div`
    margin-left: 3rem;
    position: sticky;
    left: 0;
    bottom: 0;

    .container-btn{
        display: flex;
        margin: 0;
    }

    .btn-admin{
        border: none;
        background-color: ${theme.colors.background_dark};
        color: white;
        padding: 10px 20px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    .btn-admin-light{
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        color: grey;
        border: none;
        padding: 10px 20px;
        box-shadow: 0px -8px 4px -3px rgba(0,0,0,0.1);
    }

    .panel-add{
        background-color:${theme.colors.background_white};
        height:25vh;
        width: 50%;
    }
    `;