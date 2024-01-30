import React from 'react'
import styled from 'styled-components'
import { theme } from '../Theme';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Profile from '../Profile';
import { refresh } from '../utils/refreshWindow';

export default function NavBar({ username }) {
    return (
        <NavBarStyled>
            <button className='logo' onClick={() => refresh()}>
                <Logo/>
            </button>
            <Profile username={username}/>
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
    
    .logo{
        border: none;
        background-color: rgba(0,0,0,0);
    }

    .logo:hover {
        cursor: pointer;
    }
`;
