import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {
    const { formState, onInputChange, username, email, password, onReset } =
        useForm({
            username: "",
            email: "",
            password: "",
        });

    const asd = ({ target }) => {
        const { value } = target;
        if (value.length) {
            useForm({
                username: "",
                email: "",
                password: "",
            });
        }

    
    };
    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <button onClick={() => onReset()} className="btn btn-primary mt-2">
                Reset
            </button>
        </>
    );
};