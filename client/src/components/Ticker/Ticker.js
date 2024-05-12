import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "./Ticker.scss"

const URL = 'http://localhost:8080/'

const StockTicker = () => {
   const [stocks, setStocks] = useState([]);
   
   useEffect(() => {
      const getStocks = async () => {
         try {
            const response = await axios.get(`${URL}home/stocks`);
            setStocks(response.data);
         } catch (error) {
            console.error('Error fetching stocks:', error);
         }
      };
      getStocks();
    
   }, []);

   if (!stocks) {
      return <p>Loading...🫠</p>
   }

   const determineColor = (open, close) => {
      return open < close ? 'green' : 'red';
   };
  
   return (
      <section className='ticker'>
         <marquee>
            {stocks.map((stock, index) => (
            <span key={index}>
               {stock.T}: $
               <span
               className="ticker__text"
               style={{ color: determineColor(stock.o, stock.c) }}>
               {stock.h}
               </span>
            </span>
            ))}
         </marquee>
      </section>
   )

};

export default StockTicker 

