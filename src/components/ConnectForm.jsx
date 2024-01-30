import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from './Theme/index'
import { BsChevronRight } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";



export default function ConnectForm() {
    const [name, setName] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if (name === "") {
            alert("Ce champ ne peut être vide")
            navigate("/")
        } else {
            event.preventDefault()
            setName("")
            navigate(`/order/${name}`)
        }
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }



    return (
        <div>
            <StyledH2 className='title'>Bienvenue chez nous !</StyledH2>
            <StyledHr />
            <StyledH3>Connectez-vous</StyledH3>
            <StyledForm action="submit" onSubmit={handleSubmit}>
                <StyledInput> <IoPersonCircleOutline className='icon'/> <input className='input' type="text" placeholder='Entrez votre prénom...' onChange={handleChangeName} value={name}/> </StyledInput>
                <StyledButton>
                    <p>Mon espace</p> <BsChevronRight />
                </StyledButton>
            </StyledForm>
        </div>
    )
}

const StyledButton = styled.button`
    background-color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: ${theme.spacing.xxl};
    font-family: 'Open Sans', sans-serif;
    font-weight: ${theme.fonts.weights.heavy};
    font-size: ${theme.fonts.size.P4};
    border: none;
    border-radius: ${theme.borderRadius.round};
    gap: 1.5rem;
`;

const StyledHr = styled.hr`
    height: ${theme.spacing.xxs};
    background-color: ${theme.colors.primary};
    border: none;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.lg};
`;

const StyledInput = styled.div`
display: flex;
background-color: white;
align-items: center;
padding-left: 10%;
gap: 1rem;
height: ${theme.spacing.xxl};
border-radius: ${theme.borderRadius.round};

.icon {
    font-size: ${theme.fonts.size.P4};
    color: grey;
}

.input {
    width: 95%;
    height: 90%;
    font-size: ${theme.fonts.size.P3};
    font-weight: ${theme.fonts.weights.light};
    border: none;
    }   
`;

const StyledH2 = styled.h2`
    font-family: 'Pacifico', cursive;
    text-align: center;
    font-size: ${theme.fonts.size.P6};
    color: ${theme.colors.white};
`;

const StyledH3 = styled.h3`
    font-family: 'Pacifico', cursive;
    text-align: center;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.white};
`;
