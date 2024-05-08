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
            console.log(response.data)
         } catch (error) {
            console.error('Error fetching stocks:', error);
         }
      };
      getStocks();
    
   }, []);

   if (!stocks) {
      return <p>Loading...🫠</p>
  }
  
   return (
      // <Ticker speed={8} mode="smooth" offset="run-in">
      <section className='ticker'>
         <marquee>
            {stocks.map((stock, index) => (
               <span className='ticker__text' key={index}>
               {stock.T}: ${stock.o}
               </span>
            ))}
         </marquee>
      </section>
      // </Ticker>

   )

};

export default StockTicker 



// const initialStocks = [
//   { symbol: "AAPL", price: 150.25 },
//   { symbol: "GOOGL", price: 2800.75 },
//   { symbol: "MSFT", price: 350.50 },
//   { symbol: "AMZN", price: 3400.00 },
//   { symbol: "TSLA", price: 700.00 },
//   { symbol: "NFLX", price: 500.00 },
//   { symbol: "NVDA", price: 650.00 },
//   { symbol: "FB", price: 320.00 },
//   { symbol: "PYPL", price: 250.00 },
//   { symbol: "SQ", price: 250.00 },
//   { symbol: "CRM", price: 240.00 },
//   { symbol: "INTC", price: 60.00 },
//   { symbol: "AMD", price: 80.00 },
//   { symbol: "BABA", price: 200.00 },
//   { symbol: "BIDU", price: 220.00 },
//   { symbol: "TWTR", price: 60.00 },
//   { symbol: "UBER", price: 50.00 },
//   { symbol: "LYFT", price: 45.00 },
//   { symbol: "ZM", price: 300.00 },
//   { symbol: "WORK", price: 40.00 },
//   { symbol: "SNAP", price: 60.00 },
//   { symbol: "PINS", price: 70.00 }
// ];


 // const handleTickerMove = () => {
   //    if (stocks.length > 0) {
   //       setStocks((prevStocks) => prevStocks.slice(1));
   //    }
   // };onMove={handleTickerMove}
