import "./Signin.scss";

const Signin = ({ label, name, type, required }) => {
    return (
        <div className="field">
            <div>
                <span className="field__required">{required ? "*" : ""}</span>
                <label htmlFor={name} className="field__label">
                    {label}
                </label>
            </div>

            <input
                type={type}
                id={name}
                name={name}
                className="field__input"
                required={required}
            />
        </div>
    );
}

export default Signin



