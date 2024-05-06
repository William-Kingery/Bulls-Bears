import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar";
import Ticker from "../../components/Ticker/Ticker";

const Home = () => {
   return (
      <div>
         this is /home
         <Ticker />
         <Calendar/>
      </div>
    );
}

export default Home;