import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";
import Ticker from "../../components/Ticker/Ticker";
import Futures from "../../components/Futures/Futures";
import "./News.scss"

const URL = 'http://localhost:8080/'

const News = () => {
 
   const [newsData, setNewsData] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getNewsData = async () => {
         try {
            const response = await axios.get(`${URL}news`);
            setNewsData(response.data);
            setLoading(false);
         } catch (error) {
         console.error('Error fetching news data:', error);
         }
      };

      getNewsData();
  }, []);

   return (
      <main>
         <Header />
         <Ticker />
         <Futures />
         <section className='news'>
            {loading ? (
            <h3 className='news__loading'>Loading... 📈 📰</h3>
            ) : (
               <article className='news__container'>
               {newsData.map((item, index) => (
                  <div key={index}>
                     <h2 className='news__header'><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></h2>
                     <p className='news__summary'>{item.summary}</p>
                     <img className='news__img' src={item.banner_image} alt="Banner" />
                     <p className='news__source'>Source: {item.source_domain}</p>
                  </div>
               ))}
               </article>
            )}
         </section> 
      </main>
   )
}

export default News