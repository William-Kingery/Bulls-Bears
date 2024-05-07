import React from 'react';
import './Futures.scss'

const Futeres = () => {
      // Stock futures data
  const futuresData = [
    { symbol: 'S&P Futures', price: 4200.00 },
    { symbol: 'Dow Futures', price: 34000.00 },
    { symbol: 'Nasdaq Futures', price: 14000.00 },
    { symbol: 'Gold', price: 1800.00 },
    { symbol: 'Bitcoin', price: 60000.00 },
  
  ];

  return (
   <section className='futures'>
      <div className="futures__main-cont">
         {futuresData.map((future, index) => (
            <div key={index} className="futures__container">
               <h3 className='futures__header'>{future.symbol}</h3>
               <p className='futures__price'>Price: ${future.price}</p>
            </div>
         ))}
      </div>
   </section>
    
  );
};



export default Futeres