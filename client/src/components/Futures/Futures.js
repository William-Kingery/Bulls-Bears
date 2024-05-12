import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Futures.scss'

const URL = 'http://localhost:8080/'

const Futures = () => {
   const [futuresData, setFuturesData] = useState([]);

   useEffect(() => {
      const getData = async () => {
      try {
        const response = await axios.get(`${URL}home/indices`);
        setFuturesData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching futures data:', error);
      }
      };

      getData();
   }, []);

  if (!futuresData) {
   return <p>Loading...🫠</p>
   }

   const determineColor = (open, close) => {
      return parseFloat(close) > parseFloat(open) ? 'green' : 'red';
   };
   
   return (
      <section className='futures'>
         <div className='futures__main-cont'>
            {Object.keys(futuresData).map((symbol, index) => {
            const { values } = futuresData[symbol];
            if (values && values.length > 0) {
               const { open, close, high } = values[0];
               const highColor = determineColor(open, close);
               const roundedHigh = parseFloat(high).toFixed(2);
               return (
               <div className='futures__container' key={index}>
                  <h3 className='futures__header'>{symbol}</h3>
                  <p className='futures__price' style={{ color: highColor }}>
                     ${roundedHigh}
                  </p>
               </div>
              );
            }
          })}
        </div>
      </section>
   );
   
};


export default Futures
