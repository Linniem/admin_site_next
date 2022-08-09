import Head from 'next/head';
import Router from 'next/router';
import React, { useContext, useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { login } from '../client/loginApi';
import { setToken, setUserName } from '../client/localStorage';
import { useLoginInfoDispatch } from '../components/loginInfoContext';
import style from '../styles/login.module.css';

Login.getLayout = (page) => page;
export default function Login() {
    return (
        <>
            <Head>
                <title>login</title>
            </Head>

            <Wrapper>
                <Form />
            </Wrapper>
        </>
    );
}

function Wrapper({ children }) {
    return <div className={style.wrapper}>{children}</div>;
}

function Form() {
    const [account, setAccount] = useState('admin');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);
    const [emptyWarning, setEmptyWarning] = useState(false);
    const dispatchLogin = useLoginInfoDispatch();

    const handleClickLogin = () => {
        if (account === '' || password === '') {
            setEmptyWarning(true);
            return;
        }

        login(account, password)
            .then((loginInfo) => {
                setToken(loginInfo.token);
                setUserName(loginInfo.userName);
                dispatchLogin({
                    type: 'login',
                    userName: loginInfo.userName,
                });
                Router.push('/');
            })
            .catch(() => {
                setLoginFailed(true);
            });
    };

    const handleKeyDown = (event) => {
        setEmptyWarning(false);
        setLoginFailed(false);
        if (event.key === 'Enter') {
            handleClickLogin();
        }
    };

    const handleAccountChange = (e) => {
        setAccount(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className={style.form}>
            <h2>Login Form</h2>

            <Input
                value={account}
                onChange={handleAccountChange}
                onKeyDown={handleKeyDown}
            >
                <FaUser size={'0.8rem'} />
            </Input>
            <br />

            <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onKeyDown={handleKeyDown}
            >
                <FaLock size={'0.8rem'} />
            </Input>
            <br />

            <Button text="Login" width="100%" onClick={handleClickLogin} />

            {loginFailed && <p style={{ color: 'red' }}>login failed</p>}
            {emptyWarning && (
                <p style={{ color: 'red' }}>
                    please input account and password
                </p>
            )}
        </div>
    );
}

function Input({ children, type = 'text', value, onChange, onKeyDown }) {
    return (
        <div className={style.input}>
            {children}
            <input
                type={type}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}

function Button({ text, width = '140px', onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                width,
                color: '#fff',
                backgroundColor: '#409eff',
                borderColor: '#409eff',
                borderRadius: '4px',
                padding: '12px 20px',
                cursor: 'pointer',
            }}
        >
            {text}
        </button>
    );
}
