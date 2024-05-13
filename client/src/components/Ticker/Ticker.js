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
            console.log(response.data)
            setStocks(response.data);
         } catch (error) {
            console.error('Error fetching stocks:', error);
         }
      };
      getStocks();
    
   }, []);

   const determineColor = (open, close) => {
      return open < close ? 'green' : 'red';
   };

      if (!stocks) {
      return <p>Loading...🫠</p>
   }
  
   return (
      <section className='ticker'>
         <div className='ticker__container'>
            {stocks.map((stock, index) => (
            <span className='ticker__item' key={index}>
               {stock.T}: $
               <span className="ticker__text" style={{ color: determineColor(stock.o, stock.c) }}>
               {stock.h}
               </span>
            </span>
            ))}
         </div>
      </section>
   )

};

export default StockTicker 

