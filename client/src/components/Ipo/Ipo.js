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
         console.log('Parsed IPO Data:', parsedData); 
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
         <ul className="ipo__list">
         {ipoData.map((ipo, index) => (
            ipo.ipoDate && ipo.symbol && ipo.name && ipo.currency && ipo.exchange && (
            <li key={index} className="ipo__list-item">
               <strong>IPO Date:</strong> {ipo.ipoDate}, <strong>Symbol:</strong> {ipo.symbol}, <strong>Name:</strong> {ipo.name}
            </li>
            )
            ))}
        </ul>
      )}
    </section>
  );
};

export default IPO;
