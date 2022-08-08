export default function Form({ children }) {
    return <form>{children}</form>;
}

export function FormRow({ text = '', children }) {
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

export function FormInput({ setValue }) {
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

export function FormSelect({ options, setValue }) {
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

export function FormRadio({ options, setValue }) {
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

export function FormCheckBox({ setValue }) {
    return (
        <input
            type="checkbox"
            style={{ transform: 'translateX(3px) scale(1.5)' }}
            onChange={(e) => setValue(e.checked)}
        ></input>
    );
}

export function FormConfirm({ onClick = () => {} }) {
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
