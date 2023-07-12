import { useEffect, useState } from "react"
import { Message } from "./Message"




export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'rodrigo@pocho.com'
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(()=>{
        console.log('useEffect')
    },[])

    useEffect(()=>{
        console.log('Formstate')
    },[formState])
    useEffect(()=>{
        console.log('email')
    },[email])
    

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input
                type='text'
                className="Form"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type='email'
                className="Form mt-2"
                placeholder="rodrigo@pocho.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
          {(username === "strider") && <Message/>}
        </>
    )
}
