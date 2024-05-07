import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar";
import Ticker from "../../components/Ticker/Ticker";
import Futeres from "../../components/Futures/Futures";

const Home = () => {
   return (
      <main>
         <Ticker />
         <Futeres />
         <Calendar />
      </main>
   );
}

export default Home;