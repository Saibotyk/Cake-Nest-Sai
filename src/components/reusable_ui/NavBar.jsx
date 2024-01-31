import React from 'react'
import styled from 'styled-components'
import { theme } from '../Theme';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Profile from '../Profile';
import { refresh } from '../utils/refreshWindow';
import { useState } from 'react';

export default function NavBar({ username, isAdmin, setIsAdmin }) {

    const toggleBtn = () => {
        if (isAdmin) {
            setIsAdmin(false)
        } else {
            setIsAdmin(true)
        }
    }

    return (
        <NavBarStyled>
            <button className='logo' onClick={() => refresh()}>
                <Logo />
            </button>
            <div className='container-nav'>
                <div className={isAdmin ? 'container-btn-drag-on': 'container-btn-drag-off'}>
                    <button className='btn-drag-off' onClick={() => toggleBtn()}></button>
                    <p id='text-admin' className='text-drag-off'>{isAdmin ? 'DESACTIVER LE MODE ADMIN ': 'ACTIVER LE MODE ADMIN'}</p>
                </div>
                <Profile username={username} />
            </div>
        </NavBarStyled>
    )
}

const NavBarStyled = styled.nav`
    background-color: ${theme.colors.greyLight};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-top-left-radius: ${theme.borderRadius.extraRound};
    padding: ${theme.spacing.sm};
    box-shadow: 0px 34px 12px 0px rgba(0,0,0,0.2),0px 10px 15px -3px rgba(0,0,0,0.1);
    z-index: 1000;
    height: 10vh;

    .logo{
        border: none;
        background-color: rgba(0,0,0,0);
    }

    .logo:hover {
        cursor: pointer;
    }

    .container-nav{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items:center;
    }

    .container-btn-drag-off{
        display: flex;
        justify-content: space-between;
        background-color: ${theme.colors.background_dark};
        border-radius: 50px;
        padding: 3px;
        width:14rem;
        height:100%;
        transition: all 500ms ease;
    }

    .btn-drag-off{
        background-color: ${theme.colors.primary};
        aspect-ratio: 1 / 1;
        border-radius:${theme.borderRadius.circle};
        border: none;
        cursor: pointer;
    }

    .text-drag-off{
        font-size: ${theme.fonts.size.XS};        
        color: ${theme.colors.primary};
        font-weight: bold;
        text-align: left;
        margin:auto;
    }

    .container-btn-drag-on{
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        background-color: ${theme.colors.background_white};
        border:1px solid ${theme.colors.primary};
        border-radius: 50px;
        padding: 3px;
        width:14rem;
        height:100%;
        transition: all 500ms ease;
    }

    .btn-drag-on{
        background-color: ${theme.colors.primary};
        aspect-ratio: 1 / 1;
        border-radius:${theme.borderRadius.circle};
        border: none;
        cursor: pointer;
    }

    .text-drag-on{
        font-size: ${theme.fonts.size.XS};        
        color: ${theme.colors.dark};
        font-weight: bold;
        text-align: left;
        margin: auto;
    }
`;
