import React from 'react'
import { useState, useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../Theme';
import AdminContext from '../../context/AdminContext';
import { FaChevronUp, FaPencilAlt, FaPlus, FaChevronDown } from "react-icons/fa";


export default function AdminPanel({ addOrModify, setAddOrModify}) {
    const [ isOpen, setIsOpen ] = useState(true)
    
    const { isAdmin, setIsAdmin }= useContext(AdminContext);

    const closePanel = () =>  {
       if (isOpen) {
           setIsOpen(false)
        } else {
            setIsOpen(true)}
        }
    

    return (
        <ContainerAdminPanelStyled>
            <div className='container-btn'>
                <button className={ isOpen ? 'btn-admin-light' : 'btn-admin' } onClick={closePanel}>{isOpen ? <FaChevronDown /> : <FaChevronUp />}</button>
                <button className={ isOpen && addOrModify == "add" ? 'btn-admin' : 'btn-admin-light' } onClick={() => {setAddOrModify("add"); setIsOpen(true);}}><FaPlus /> Ajouter un produit</button>
                <button className={ isOpen && addOrModify == "modify" ? 'btn-admin' : 'btn-admin-light' } onClick={() => {setAddOrModify("modify"); setIsOpen(true)}}><FaPencilAlt /> Modifier un produit</button>
            </div>
            {
                isOpen && isAdmin && addOrModify == "add"
                ?
                <div className='panel-add'>
                        <p>Ajouter un produit</p>
                    </div>
                    : ""
            }
            {
                isOpen && isAdmin && addOrModify == "modify"
                    ?
                    <div className='panel-modify'>
                        <p>Modifier un produit</p>
                    </div>
                    : ""
            }
        </ContainerAdminPanelStyled>
    )
}

const ContainerAdminPanelStyled = styled.div`
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 2%;
    width: 50%;

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
        cursor: pointer;
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
        cursor: pointer;
    }

    .panel-add{
        background-color:${theme.colors.background_white};
        height:25vh;
    }

    .panel-modify{
        background-color:${theme.colors.background_white};
        height:25vh;
    }
    `;
