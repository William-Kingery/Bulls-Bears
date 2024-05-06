import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar";

const Home = () => {
    return (
        <div>
            this is home
             <Calendar/>
        </div>
    );
}

export default Home;