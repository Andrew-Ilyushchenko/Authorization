import React, { useCallback, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const initialLoginForm = {email: '', password: ''};

const LoginPage = () => {
    const [loginForm, setLoginForm] = useState(initialLoginForm);

    const onLoginFormChange = useCallback ((e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm( prevState => ({...prevState, [e.target.id]: e.target.value }))
    }, []);

    return(
        <>
            <div>Login page</div>
            <section className='login'>
                <div className='container'>
                    <Input onChange={onLoginFormChange} value={loginForm.email} fieldName='email' className='input input-email'/>
                    <Input onChange={onLoginFormChange} value={loginForm.password} fieldName='password' className='input input-pass'/>
                    <Button type='button' text='Login' className='btn-login'/>
                </div>
            </section>
        </>
    )
}

export default LoginPage;