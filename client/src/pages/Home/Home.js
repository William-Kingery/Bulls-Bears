import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import Ticker from "../../components/Ticker/Ticker";
import Futures from "../../components/Futures/Futures";

const Home = () => {
   return (
      <main>
         <Header />
         <Ticker />
         <Futures />
         <Calendar />
      </main>
   );
}

export default Home;