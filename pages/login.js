import Head from 'next/head';
import style from '../styles/login.module.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';

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
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        console.log('a', account, 'p', password);
    };

    return (
        <div className={style.form}>
            <h2>Login Form</h2>

            <Input value={account} setValue={setAccount}>
                <FaUser size={'0.8rem'} />
            </Input>
            <br />

            <Input type="password" value={password} setValue={setPassword}>
                <FaLock size={'0.8rem'} />
            </Input>
            <br />

            <Button text="Login" width="100%" onClick={handleClick} />
        </div>
    );
}

function Input({ children, type = 'text', value, setValue }) {
    return (
        <div className={style.input}>
            {children}
            <input
                type={type}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
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
            }}
        >
            {text}
        </button>
    );
}
