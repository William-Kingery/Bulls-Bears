import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import Ticker from "../../components/Ticker/Ticker";
import Futures from "../../components/Futures/Futures";
import TopFive from "../../components/TopFive/TopFive";
import IPO from "../../components/Ipo/Ipo";
import Footer from "../../components/Footer/Footer";
import "./Home.scss"

const Home = () => {
   const [user, setUser] = useState(null);
   const [usersList, setUsersList] = useState(null);
   const [failedAuth, setFailedAuth] = useState(false);

   useEffect(() => {
      const token = sessionStorage.getItem("token");

      if (!token) {
         setFailedAuth(true);
     }
     console.log(token)
     const authorizeUser = async () => {
      try {
         const response = await axios.get(
             "http://localhost:8080/user/current",
            { headers: { Authorization: `Bearer ${token}`} }
            );
         console.log(response.data);
         setUser(response.data);

         const usersRes = await axios.get("http://localhost:8080/user",
             { headers: {Authorization: `Bearer ${token}`}}
         );
         console.log(usersRes.data)
         setUsersList(usersRes.data);
      } catch (error) {
         console.log(error);
         if (error.response && error.response.status === 401) {
            setFailedAuth(true);
         } else {
            setFailedAuth(true);
            console.error("Authentication failed:", error);
         }
         }
      };

      authorizeUser();
   }, []);
  
   if (failedAuth) {
      return (
          <main className="dashboard">
              <p>You must be logged in to see this page.</p>
              <p>
                  <Link to="/">Log in</Link>
              </p>
          </main>
      );
   }

   return (
      <main>
         {console.log(failedAuth)}
         <Header />
         <Ticker />
         <Futures />
         <div className="home__1280">
            <Calendar />
            <div className="home__main">
               <IPO />
               <TopFive />
            </div>
         </div>
         <Footer />
      </main>
   );
}

export default Home;

