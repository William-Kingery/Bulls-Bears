import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Futures.scss'

const URL = 'http://localhost:8080/'

const Futures = () => {
   const [futuresData, setFuturesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}home/indices`);
        setFuturesData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching futures data:', error);
      }
    };

    fetchData();
  }, []);

  if (!futuresData) {
   return <p>Loading...🫠</p>
}

  return (
   <section className='futures'>
      <div className="futures__main-cont">
         {futuresData.slice(0, 6).map((future, index) => (
            <div key={index} className="futures__container">
               <h3 className='futures__header'>{future.ticker}</h3>
               <p className='futures__price'>Price: ${future.price}</p>
            </div>
         ))}
      </div>
   </section>
    
  );
};



export default Futures






