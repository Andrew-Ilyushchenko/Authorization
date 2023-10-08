import React, { useCallback, useState } from 'react';
import Input from '../../components/Input';

const initialLoginForm = {email: '', password: ''};

const LoginPage = () => {
    const [loginForm, setLoginForm] = useState(initialLoginForm);

    const onLoginFormChange = useCallback ((e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm( prevState => ({...prevState, [e.target.id]: e.target.value }))
    }, []);

    return(
        <>
            <div>Login page</div>
            <Input onChange={onLoginFormChange} value={loginForm.email} fieldName='email'/>
            <Input onChange={onLoginFormChange} value={loginForm.password} fieldName='password'/>
        </>
    )
}

export default LoginPage;