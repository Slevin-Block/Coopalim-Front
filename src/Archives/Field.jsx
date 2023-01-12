import React from 'react'
import { useState } from "react"

// Component qui gère les champs type input field, text ou password et select
// Et crée le lien avec le register et la "banque" d'erreur de Yum.
// Le handleChange gère la disparition du message d'erreur quand l'utilisateur recorrige son champ
const Field = ({ fields, register, errors, handleChange }) => {
    const [type, setType] = useState(fields.type)

    const handleType = () => {
        if (fields.type === "password") {
            setType( type === "password" ? "text" : "password" )
        }
    }

    return (
        <>
                {(fields.type === "password" || fields.type === "text") &&
                    <label > {fields.label} : 
                        <input  type={type} {...register(fields.field)} onChange={e => handleChange(e)}/>
                    </label>
                }
                {fields.type === "password" && <button type="button" onClick={handleType}>EYE</button>}
                {errors[fields.field]?.message && <p>{errors[fields.field]?.message}</p>}
        </>
    )
}

export default Field