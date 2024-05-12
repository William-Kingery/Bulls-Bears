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
   return (
      <section className='futures'>
         <div className='futures__main-cont'>
         {Object.keys(futuresData).map((symbol) => {
            const { values } = futuresData[symbol];
            if (values && values.length > 0) {
               return (
               <div className='futures__container' key={symbol}>
                  <h3 className='futures__header'>{symbol}</h3>
                  <p className='futures__price'>High: {values[0].high}</p>
                  <p className='futures__price'>Low: {values[0].low}</p>
               </div>
            );}
            })}
         </div>
      </section>
   );

};


export default Futures









// const indices = Object.values(futuresData);

// if (indices.length === 0) {
//   return <p>No data available</p>;
// }

// return (
//    <section className="futures">
//       <div className="futures__main-cont">
//          {Object.keys(futuresData).map((key) => {
//           const { meta, values } = futuresData[key];
//          const highValue = values && values.length > 0 ? values[0].high : 'N/A';
//          return (
//             <div key={key} className="futures__container">
//                <h3 className="futures__header">{meta.symbol}</h3>
//                <p className="futures__price">High: {highValue}</p>
//             </div>
//          );
//          })}
//       </div>
//    </section>
// );
