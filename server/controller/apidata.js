import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const snatchData = async () => {

   const API_KEY = process.env.POLY_API_KEY;
   try {
      const response = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=${API_KEY}`);
      const allStocks = response.data.results;
      const selectedStocks = allStocks.map(stock => ({
         T: stock.T,
         o: stock.o,
         c: stock.c,
         h: stock.h
      }));
      const shuffledStocks = shuffleArray(selectedStocks);
      const randomStocks = shuffledStocks.slice(0, 500);
       return randomStocks;
   } catch (error) {
       console.error('Error retrieving stock data:', error);
       throw error;
   }
};

// Durstenfeld shuffle
const shuffleArray = (arr) => {
   const shuffled = [...arr];
   for (let i = shuffled.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
   }
   return shuffled;
};

const indicesData = async () => {
   const API_KEY = process.env.TWELVE_API_KEY;
   try {
   const response = await axios.get(`https://api.twelvedata.com/time_series?symbol=DJI,IXIC,GSPC,RUT,GOOG,TNX,NVDA,AAPL,AMZN,NCNO&interval=2h&outputsize=1&apikey=${API_KEY}`);
   return response.data 
   } catch (error) {
      console.error('Error fetching data:', error);
   }
};

const earningsData = async () => {
   const API_KEY = process.env.ALPHA_API_KEY;
   try {
      const response = await axios.get(`https://www.alphavantage.co/query?function=EARNINGS_CALENDAR&horizon=3month&entitlement=delayed&apikey=${API_KEY}`);
      return response.data; 
   } catch (error) {
   console.error('Error retrieving earnings data:', error);
   throw error;
   }
};


const newsData = async () => {
   const API_KEY = process.env.ALPHA_API_KEY;
   try {
      const response = await axios.get(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`);
      const data = response.data;
      const filteredData = data.feed.map(item => ({
         title: item.title,
         url: item.url,
         summary: item.summary,
         banner_image: item.banner_image,
         source_domain: item.source_domain,
         time_published: item.time_published 
      }));

      filteredData.sort((a, b) => new Date(b.time_published) - new Date(a.time_published));
      const top20News = filteredData.slice(0, 20);
      const mappedData = top20News.map(item => ({
         title: item.title,
         url: item.url,
         summary: item.summary,
         banner_image: item.banner_image,
         source_domain: item.source_domain,
         time_published: item.time_published
      }));
      
      return mappedData;
   } catch (error) {
      console.error('Error retrieving news data:', error);
      throw error;   
   }
};
const winnersLosersData = async () => {
   const API_KEY = process.env.ALPHA_API_KEY;

   try {
      const response = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`);
      const topWinners = response.data.top_gainers.map(({ ticker, price, change_amount, change_percentage }) => ({
      ticker,
      price,
      change_amount,
      change_percentage
     })).slice(0, 5);
 
      const topLosers = response.data.top_losers.map(({ ticker, price, change_amount, change_percentage }) => ({
      ticker,
      price,
      change_amount,
      change_percentage
     })).slice(0, 5);
     return { topWinners, topLosers };
   } catch (error) {
     console.error('Error fetching top winners and losers:', error);
     throw error;
   }
};

const ipoData = async () => {
   const API_KEY = process.env.ALPHA_API_KEY;
   try {
      const response = await axios.get(`https://www.alphavantage.co/query?function=IPO_CALENDAR&apikey=${API_KEY}`)
      return response.data; 
   } catch (error) {
      console.error('Error retrieving earnings data:', error);
      throw error;
   }
};




export { snatchData, indicesData, earningsData, newsData, winnersLosersData, ipoData };
