import './login.css'
import {useState} from "react";
import {useLogin} from "../../hooks/useLogin";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isPending} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <label>
                <span>email: </span>
                <input
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <span>password: </span>
                <input
                    required
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </label>
            {!isPending && <button className="btn" type="submit">Login</button>}
            {isPending && <button className="btn" disabled>Logging in...</button>}
            {error && <p className="error">{error}</p>}
        </form>
    )
}