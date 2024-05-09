import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Signin from '../../components/Signin/Signin';
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
           console.log(response.data);
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
            <h1 className="login__header">Log in</h1>
            <Signin type="text" name="email" label="Email" />
            <Signin type="password" name="password" label="Password" />
            <button className="login__button">Log in</button>
            {error && <div className="login__message">{error}</div>}
            <p className="login__signup">
               Need an account? <Link className="login__signup-link" to="/signup">Sign up</Link>
            </p>
         </form>
       
      </main>
     
   );
}

export default Login

