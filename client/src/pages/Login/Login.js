import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Signin from '../../components/Signin/Signin';
import Footer from '../../components/Footer/Footer'
import './Login.scss';

const Login = () => {
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         const response = await axios.post(
            "http://localhost:8080/user/login",
            {
               email: event.target.email.value,
               password: event.target.password.value,
            }
         );
         sessionStorage.setItem("token", response.data.token);
         navigate("/home");
      } catch (error) {
         setError("Something went wrong", error);
      }
   };

   return (
      <main className="login">
         <header className="login__header-cont">
            <h1 className="login__title">Bulls & Bears</h1>
         </header>
         <form className="login__form" onSubmit={handleSubmit}>
            <h1 className="login__header">Log In</h1>
            <Signin type="text" name="email" label="Email" />
            <Signin type="password" name="password" label="Password" />
            <button className="login__button">Log In</button>
            <div className="login__message-cont">
               {error && <div className="login__message">There was issue with Email or Password</div>}
            </div>
            <p className="login__signup">
               Need an account? <Link className="login__signup-link" to="/signup">Sign up</Link>
            </p>
         </form>
         <Footer />
      </main>
   );
}

export default Login

