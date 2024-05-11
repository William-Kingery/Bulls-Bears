import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import Ticker from "../../components/Ticker/Ticker";
import Futures from "../../components/Futures/Futures";
import TopFive from "../../components/TopFive/TopFive";
import IPO from "../../components/Ipo/Ipo";
import "./Home.scss"

const Home = () => {
   return (
      <main>
         <Header />
         <Ticker />
         <Futures />
         <div className="home__main">
            <TopFive />
            <Calendar />
         </div>
         <IPO />
      </main>
   );
}

export default Home;