import { useEffect, useState } from "react"




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
    })


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
            />
        </>
    )
}
