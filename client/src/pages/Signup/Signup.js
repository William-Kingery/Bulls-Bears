import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signin from "../../components/Signin/Signin";

const Signup = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/user/register",
                {
                    email: event.target.email.value,
                    password: event.target.password.value,
                    first_name: event.target.first_name.value,
                    last_name: event.target.last_name.value,
                }
            );
            if (response) {
                setSuccess(true);
                setError("");
                event.target.reset();
                navigate("/home"); 
            }
 
        } catch (err) {
            console.log(err.response.data);
            setError(err.response.data);
            setSuccess(false);
            console.log(err);
        }
    };

    return (
        <main className="signup-page">
            <form className="signup" onSubmit={handleSubmit}>
                <h1 className="signup__title">Sign up</h1>
                <Signin
                    type="text"
                    name="first_name"
                    label="First name"
                    required={true}
                />
                <Signin
                    type="text"
                    name="last_name"
                    label="Last name"
                    required="true"
                />
                <Signin
                    type="email"
                    name="email"
                    label="Email"
                    required={true}
                />
                <Signin
                    type="password"
                    name="password"
                    label="Password"
                    required={true}
                />

                <button className="signup__button">Sign up</button>

                {success && <div className="signup__message">Signed up!</div>}
                {error && <div className="signup__message">{error}</div>}
            </form>
            <p>
                Have an account? <Link to="/login">Log in</Link>
            </p>
        </main>
    );
}

export default Signup;