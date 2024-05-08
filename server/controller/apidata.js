import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const snatchData = async () => {

   const API_KEY = process.env.POLY_API_KEY;
   try {
      const response = await axios.get(`https://api.polygon.io/v3/reference/tickers?type=CS&market=stocks&date=2024-05-07&active=true&limit=1000&sort=market&apiKey=${API_KEY}`);
      console.log(response.data)
      return response.data;
   } catch (error) {
   console.error('Error retrieving stock data:', error);
   throw error;
   }
};

export { snatchData };