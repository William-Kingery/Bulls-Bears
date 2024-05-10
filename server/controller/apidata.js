import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const snatchData = async () => {

   const API_KEY = process.env.POLY_API_KEY;
   try {
      const response = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=${API_KEY}`);
      return response.data.results; 
   } catch (error) {
   console.error('Error retrieving stock data:', error);
   throw error;
   }
};

const indicesData = async () => {

   const API_KEY = process.env.POLY_API_KEY;
   try {
      const response = await axios.get(`https://api.polygon.io/v3/reference/tickers?market=indices&active=true&sort=ticker&apiKey=${API_KEY}`);
      return response.data.results; 
   } catch (error) {
   console.error('Error retrieving indices data:', error);
   throw error;
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

export { snatchData, indicesData, earningsData, newsData };






// const newsData = async () => {
//    const API_KEY = process.env.ALPHA_API_KEY;
//    try {
//       const response = await axios.get(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`);
//       const data = response.data;
//       const filteredData = data.feed.map(item => ({
//          title: item.title,
//          url: item.url,
//          summary: item.summary,
//          banner_image: item.banner_image,
//          source_domain: item.source_domain
//       }));
      
//       return filteredData;
//    } catch (error) {
//       console.error('Error retrieving news data:', error);
//       throw error;   
//    }
// };
