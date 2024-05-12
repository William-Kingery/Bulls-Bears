import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./TopFive.scss"


const URL = 'http://localhost:8080/'

const TopFive = () => {
   const [topWinners, setTopWinners] = useState([]);
   const [topLosers, setTopLosers] = useState([]);
   const [loading, setLoading] = useState(true);
  
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${URL}home/topfive`);
            setTopWinners(response.data.topWinners);
            setTopLosers(response.data.topLosers);
            setLoading(false);
         } catch (error) {
            console.error('Error fetching trending data:', error);
         }
      };
      fetchData();
   }, []);
  
   if (loading) {
      return <div>Loading...🫠</div>;
   }
  
   return (
      <section className='top'>
         <div className='top__winner-cont'>
            <h2 className='top__header'>Top 5 Winners</h2>
            <ul className='top__wul-cont'>
               {topWinners.map((winner, index) => (
                  <li className='top__winner' key={index}><h3 className='top__ticker'>{winner.ticker}:</h3> ${winner.price} ({winner.change_percentage})</li>
               ))}
            </ul>
         </div>
         <div className='top__loser-cont'>
            <h2 className='top__header'>Top 5 Losers</h2>
            <ul className='top__lul-cont'>
               {topLosers.map((loser, index) => (
                  <li className='top__loser' key={index}><h3 className='top__ticker'>{loser.ticker}:</h3> ${loser.price} ({loser.change_percentage})</li>
               ))}
            </ul>
         </div>
      </section>
   );

};

export default TopFive