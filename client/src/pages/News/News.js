import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from "../../components/Header/Header";
import Ticker from "../../components/Ticker/Ticker";
import Futures from "../../components/Futures/Futures";
import TopFive from '../../components/TopFive/TopFive';
import Footer from '../../components/Footer/Footer';
import bulls_and_bears from "../../assests/images/bulls_and_bearsIMG.jpeg";
import "./News.scss"


const URL = 'http://localhost:8080/'

const News = () => {
   const [user, setUser] = useState(null);
   const [usersList, setUsersList] = useState(null);
   const [failedAuth, setFailedAuth] = useState(false);
   const [newsData, setNewsData] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getNewsData = async () => {
         try {
            const response = await axios.get(`${URL}news`);
            console.log(response.data)
            setNewsData(response.data);
            
            setLoading(false);
         } catch (error) {
         console.error('Error fetching news data:', error);
         }
      };

      getNewsData();
   }, []);

   useEffect(() => {
      const token = sessionStorage.getItem("token");

      if (!token) {
         setFailedAuth(true);
     }

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
         <Header />
         <Ticker />
         <Futures />
            <section className='news'>
               {loading ? (
               <h3 className='news__loading'>Loading... 📈 📰</h3>
               ) : (
                  <article className='news__main-container'>
                  {newsData.map((item, index) => (
                     <div className='news__container' key={index}>
                        <h2 className='news__header'><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></h2>
                        <p className='news__summary'>{item.summary}</p>
                        {item.banner_image ? (
                           <img className='news__img' src={item.banner_image} alt="image banner" />
                           ) : (
                           <img className='news__img' src={bulls_and_bears} alt="placeholder image" />
                           )}
                        <p className='news__source'>Source: {item.source_domain}</p>
                     </div>
                  ))}
                  </article>
               )}
            </section>
         <Footer />
      </main>
   )
}

export default News



