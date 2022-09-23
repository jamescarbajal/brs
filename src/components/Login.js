import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { NavLink, useNavigate } from 'react-router-dom';
import LabeledTextInput from './LabeledTextInput';
import { LoginContainer, MiniHeader, StyledButton } from './StyledComponents';

const testUser = {
    id: 1,
    username: 'jamescarbajal',
    email: 'james@email.com',
    password: 'password',
};


export default function Login() {

    const { setLoggedInUser } = useContext(UserContext);

    const [ email, setEmail ] = useState("");

    const [ password, setPassword ] = useState("");

    const [ showLoginError, setShowLoginError ] = useState(false);

    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (email === testUser.email && password === testUser.password) {
            setLoggedInUser(testUser.email);
            navigate('/Shop');
        } else {
            setShowLoginError(true);
        }
    }

    return (

        <LoginContainer>

            <MiniHeader>Login</MiniHeader>

            <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                <LabeledTextInput 
                    name="Email" 
                    value={email} 
                    setValue={setEmail} 
                />
                <LabeledTextInput 
                    name="Password" 
                    value={password} 
                    setValue={setPassword} 
                    inputType="password"
                />

                <StyledButton type="submit">Login</StyledButton>
            </form>

            {showLoginError && <div style={{ marginTop: '20px', color: 'darksteelblue' }}>Invalid email or password.</div>}


            <MiniHeader style={{ position: 'absolute', top: '70%' }}>
                or <NavLink style={{ textDecoration: 'none', color: 'darkblue' }} to="/CreateAccount">Create Account</NavLink>
            </MiniHeader>

        </LoginContainer>
    );
};