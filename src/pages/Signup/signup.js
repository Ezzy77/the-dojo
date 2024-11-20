import './signup.css';
import {useState} from "react";
import {useSignup} from "../../hooks/useSignup";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailError, setThumbnailError] = useState(null);
    const {signup, error, isPending} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password, displayName, thumbnail);
        await signup(email, password, displayName, thumbnail);
    }

    const handleFileChange = (e) => {
        setThumbnail(null);
        let selected = e.target.files[0];
        if (!selected) {
            setThumbnailError('Please select a file');
            return;
        }
        if (!selected.type.includes('image')) {
            setThumbnailError('Please select an image file');
            return;
        }
        if (selected.size > 1000000) {
            setThumbnailError('File size is too large');
            return;
        }
        setThumbnailError(null);
        setThumbnail(selected);
        console.log('thumbnail selected:');
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
                <span>display name: </span>
                <input
                    required
                    type="displayName"
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                />
            </label>
            <label>
                <span>profile thumbnail:</span>
                <input
                    required
                    type="file"
                    onChange={handleFileChange}
                />
                {thumbnailError && <p className="error">{thumbnailError}</p>}
            </label>
            {!isPending && <button className="btn" type="submit">Sign up</button>}
            {isPending && <button className="btn" disabled>Signing up...</button>}
            {error && <p className="error">{error}</p>}
        </form>
    );
}