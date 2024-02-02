import React from 'react'
import { useState, useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../Theme';
import AdminContext from '../../context/AdminContext';
import { FaChevronUp, FaPencilAlt, FaPlus, FaChevronDown } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";
import { MdPhotoCamera, MdOutlineEuroSymbol  } from "react-icons/md";
import cakeImg from "../fakeData/images/cupcake-item.png"


export default function AdminPanel({ addOrModify, setAddOrModify, shopMenu, setShopMenu }) {
    const [isOpen, setIsOpen] = useState(true)

    const { isAdmin, setIsAdmin } = useContext(AdminContext);

    const closePanel = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    const [ inputTitle, setTitle ] = useState("")
    const [ inputPrice, setPrice ] = useState("")
    const [ inputImageSource, setImageSource ] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const shopCopy = [...shopMenu]
        const id = new Date().getTime()
        const imageSource = inputImageSource
        const title = inputTitle
        const price =inputPrice
        shopCopy.push({ id, title, imageSource, price })
        setShopMenu(shopCopy)
        setTitle("")
        setPrice("")
        setImageSource("")
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangePrice = (event) => {
        setPrice(event.target.value)
    }

    const handleChangeImageSource = (event) => {
        setImageSource(event.target.value)
    }


    return (
        <ContainerAdminPanelStyled>
            <div className='container-btn'>
                <button className={isOpen ? 'btn-admin-light' : 'btn-admin'} onClick={closePanel}>{isOpen ? <FaChevronDown /> : <FaChevronUp />}</button>
                <button className={isOpen && addOrModify == "add" ? 'btn-admin' : 'btn-admin-light'} onClick={() => { setAddOrModify("add"); setIsOpen(true); } }><FaPlus /> Ajouter un produit</button>
                <button className={isOpen && addOrModify == "modify" ? 'btn-admin' : 'btn-admin-light'} onClick={() => { setAddOrModify("modify"); setIsOpen(true) }}><FaPencilAlt /> Modifier un produit</button>
            </div>
            {
                isOpen && isAdmin && addOrModify == "add"
                    ?
                    <div className='panel-add'>
                        <form action="submit" className='form' onSubmit={handleSubmit}>
                            <img src={inputImageSource} className='input-img' />
                            <div className='input-list'>
                                <div className='input'>
                                    <GiCupcake />
                                    <input type="text" onChange={handleChangeTitle}  value={inputTitle}/>
                                </div>
                                <div className='input'>
                                    <MdPhotoCamera />
                                    <input type="text" onChange={handleChangeImageSource}  value={inputImageSource}/>
                                </div>
                                <div className='input'>
                                    <MdOutlineEuroSymbol />
                                    <input type="text" onChange={handleChangePrice}  value={inputPrice}/>
                                </div>
                                <button className='btn-form'>Ajouter un nouveau produit</button>
                            </div>
                        </form>
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
    width: 93%;

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
        box-shadow: 0px -8px 4px -3px rgba(0,0,0,0.1);
    }

    .panel-modify{
        background-color:${theme.colors.background_white};
        height:25vh;
    }

    .form{
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    .input-img{ 
        width: 10%;
        border-radius: 25%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border: 1px solid ${theme.colors.greyLight};;
    }

    .input-list{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        width: 100%;
    }

    .input {
        display: flex;
        align-items: center;
        background-color: #80808012;
        padding:.1rem 1rem;
        width: 50%;
        border-radius: 5px;
    }
    
    .input input{
        background-color: rgba(128, 128, 128, 0.010);
        border: none;
        width: 100%;
    }

    .btn-form{
        background-color: green;
        width: 15%;
        padding:6px 10px;
        border-radius: 5px;
        border: none;
        color: white;
        cursor: pointer;
    }

    `;
