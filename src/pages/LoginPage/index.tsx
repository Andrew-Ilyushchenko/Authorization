import React, { useCallback, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { authActionCreators } from '../../redux/actions/authActionCreators';
import { useAppDispatch } from '../../redux/hooks';

const initialLoginForm = {email: '', password: ''};

const LoginPage = () => {
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const dispatch = useAppDispatch();

    const onLoginFormChange = useCallback ((e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm( prevState => ({...prevState, [e.target.id]: e.target.value }))
    }, []);

    const onLoginFormSubmit = useCallback(() => 
        dispatch(authActionCreators.getLogin( { email: loginForm.email, password: loginForm.password} )),
        [dispatch, loginForm.email, loginForm.password]);

    return(
        <>
            <div>Login page</div>
            <section className='login'>
                <div className='container'>
                    <Input onChange={onLoginFormChange} value={loginForm.email} fieldName='email' className='input input-email'/>
                    <Input onChange={onLoginFormChange} value={loginForm.password} fieldName='password' className='input input-pass'/>
                    <Button type='button' text='Login' className='btn-login' onClick={onLoginFormSubmit} />
                </div>
            </section>
        </>
    )
}

export default LoginPage;