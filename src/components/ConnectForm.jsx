import React from 'react'
import { useState } from 'react'

export default function ConnectForm() {
    const [name, setName] = useState("")

    
    const handleSubmit = (event) => {
        if (name === "") {
            alert("Ce champ ne peut être vide")
        } else {
            event.preventDefault()
            alert("Bonjour " + name)
            setName("")
        }
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input type="text" placeholder='Entrez votre prénom...' onChange={handleChangeName} value={name}/>
                <button>Accédez à votre espace</button>
            </form>
        </div>
    )
}
