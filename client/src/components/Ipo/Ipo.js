import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Ipo.scss"

const URL = 'http://localhost:8080/'

const IPO = () => {
   const [ipoData, setIPOData] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchIPOData = async () => {
      try {
         const response = await axios.get(`${URL}home/ipo`);
         const parsedData = response.data.split('\n').slice(1).map(line => {
         const [symbol, name, ipoDate, priceRangeLow, priceRangeHigh, currency, exchange] = line.split(',');
            return { symbol, name, ipoDate, priceRangeLow, priceRangeHigh, currency, exchange };
         });
         setIPOData(parsedData);
         setLoading(false);
      } catch (error) {
         console.error('Error fetching IPO data:', error);
      }
      };
      fetchIPOData();
   }, []);

   return (
      <section className="ipo">
         <h2 className="ipo__header">Upcoming IPOs</h2>
         {loading ? (<p>Loading IPO data...📈</p>) : (
            <article className="ipo__main-cont">
            {ipoData.map((ipo, index) => (
               ipo.ipoDate && ipo.symbol && ipo.name && ipo.currency && ipo.exchange && (
               <div key={index} className="ipo__container">
                  <div className="ipo__item">
                     <strong className="ipo__header-small">{ipo.name}</strong> 
                  </div>
                  <div className="ipo__item">
                     <strong className="ipo__header-small">IPO Date: </strong> 
                     <p className="ipo__description"> {ipo.ipoDate}</p>
                  </div>
                  <div className="ipo__item">
                     <strong className="ipo__header-small">Symbol: </strong> 
                     <p className="ipo__description"> {ipo.symbol}</p>
                  </div>
               </div>
               )
               ))}
         </article>
         )}
      </section>
  );
};

export default IPO;
