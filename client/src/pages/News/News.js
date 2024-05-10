import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";
import Ticker from "../../components/Ticker/Ticker";
import Futures from "../../components/Futures/Futures";
import "./News.scss"

const URL = 'http://localhost:8080/'

const News = () => {
 
   const [newsData, setNewsData] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getNewsData = async () => {
         try {
            const response = await axios.get(`${URL}/news/`);
            setNewsData(response.data);
            setLoading(false);
         } catch (error) {
        console.error('Error fetching news data:', error);
         }
      };

      getNewsData();
  }, []);

    return (
        <main>
            <Header />
            <Ticker />
            <Futures />

        </main>
    )
}

export default News