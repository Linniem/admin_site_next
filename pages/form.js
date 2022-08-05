import Head from 'next/head';
import { useState } from 'react';

export default function Page1() {
    return (
        <>
            <Head>
                <title>Page1</title>
            </Head>
            <Form />
        </>
    );
}

function Form() {
    const [zones] = useState(['zone 1', 'zone 2', 'zone 3']);
    const [resources] = useState(['resource 1', 'resource 2']);
    const [activityName, setActivityName] = useState('');
    const [activityZone, setActivityZone] = useState(
        zones?.length > 0 ? zones[0] : ''
    );
    const [activityResource, setActivityResource] = useState('');
    const [isInstantDelivery, setIsInstantDelivery] = useState(false);

    return (
        <form style={{ padding: '20px' }}>
            <FormRow text="Activity Name">
                <FormInput setValue={setActivityName} />
            </FormRow>
            <FormRow text="Activity Zone">
                <FormSelect options={zones} setValue={setActivityZone} />
            </FormRow>
            <FormRow text="Instant delivery">
                <FormCheckBox setValue={setIsInstantDelivery} />
            </FormRow>
            <FormRow text="Resources">
                <FormRadio options={resources} setValue={setActivityResource} />
            </FormRow>
            <FormRow>
                <FormConfirm />
            </FormRow>
        </form>
    );
}

function FormRow({ text = '', children }) {
    return (
        <>
            <div className="wrapper">
                <div className="text">{text}</div>
                <div style={{ width: '100%' }}>{children}</div>
            </div>

            <style jsx>{`
                .wrapper {
                    display: flex;
                    padding: 10px 0px;
                    align-items: center;
                }
                .text {
                    box-sizing: border-box;
                    width: 180px;
                    text-align: right;
                    padding-right: 10px;
                    font-weight: bold;
                    font-size: 0.9rem;
                }
            `}</style>
        </>
    );
}

function FormInput({ setValue }) {
    return (
        <>
            <input
                autoCorrect="false"
                autoComplete="false"
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            ></input>

            <style jsx>{`
                input {
                    box-sizing: border-box;
                    border: 1px solid #dcdfe6;
                    border-radius: 4px;
                    width: 100%;
                    outline: 0;
                    padding: 5px 15px;
                }
                input:focus {
                    border-color: #409eff;
                    outline: 0;
                }
            `}</style>
        </>
    );
}

function FormSelect({ options, setValue }) {
    return (
        <>
            <select onChange={(e) => setValue(e.target.value)}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <style jsx>{`
                select {
                    border: 1px solid #dcdfe6;
                    border-radius: 4px;
                    outline: 0;
                    padding: 5px 15px;
                }
            `}</style>
        </>
    );
}

function FormRadio({ options, setValue }) {
    return (
        <>
            <div className="wrapper">
                {options.map((option) => (
                    <div className="option" key={option}>
                        <input
                            type="radio"
                            id={option}
                            name="drone"
                            value={option}
                            onChange={(e) => setValue(e.target.value)}
                        ></input>
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .wrapper {
                    display: flex;
                    flex-wrap: wrap;
                }

                .option {
                    padding-right: 15px;
                }

                label {
                    padding-left: 5px;
                }
            `}</style>
        </>
    );
}

function FormCheckBox({ setValue }) {
    return (
        <input
            type="checkbox"
            style={{ transform: 'translateX(3px) scale(1.5)' }}
            onChange={(e) => setValue(e.checked)}
        ></input>
    );
}

function FormConfirm({ onClick = () => {} }) {
    return (
        <>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}
            >
                Create
            </button>

            <style jsx>{`
                button {
                    outline: 0;
                    color: white;
                    border: 1px solid #dcdfe6;
                    background-color: #409eff;
                    border-color: #409eff;
                    cursor: pointer;
                    appearance: button;
                    border-radius: 4px;
                    padding: 12px 20px;
                }
            `}</style>
        </>
    );
}
