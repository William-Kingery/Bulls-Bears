import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "../Popup/Popup";
import "./Calendar.scss"

const URL = 'http://localhost:8080/'

const Calendar = () => {
   const currentDate = new Date();
   const [selectedDate, setSelectedDate] = useState(currentDate);
   const [earnings, setEarnings] = useState([]);
   const [popupData, setPopupData] = useState(null);

   useEffect(() => {
      const earningsData = async (date) => {
         try {
            const response = await axios.get(`${URL}home/earnings`, {
               params: {
                  month: date.getMonth() + 1,
                  year: date.getFullYear(),
               },
            });
            const parsedData = response.data.split('\n').slice(1).map(line => {
               const [symbol, name, reportDate,fiscalDateEnding, estimate, currency] = line.split(',');
               return { symbol, name, reportDate, fiscalDateEnding, estimate, currency };
             });
            setEarnings(parsedData);
            console.log(parsedData)
          } catch (error) {
            console.error("Error fetching earnings:", error);
         }
        };
        earningsData(selectedDate);
   }, [selectedDate]);

   const daysInMonth = (date) => {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
   };

   const firstDayOfMonth = (date) => {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
   };

   const changeMonth = (increment) => {
      setSelectedDate((prevDate) => {
         const newDate = new Date(prevDate);
         newDate.setMonth(newDate.getMonth() + increment);
         return newDate;
      });
   };

   const openPopup = (day) => {
      const earningForDay = earnings.filter((earning) => {
         const earningDate = new Date(earning.reportDate);
         return (
            earningDate.getFullYear() === selectedDate.getFullYear() &&
            earningDate.getMonth() === selectedDate.getMonth() &&
            earningDate.getDate() === day
         );
      });
      setPopupData(earningForDay);
   };
  
   const closePopup = () => {
      setPopupData(null);
   };
   
   const generateHeader = () => {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return daysOfWeek.map(day => (
         <div key={day} className="calendar__day-header">
            {day}
         </div>
      ));
   };

   const generateCalendar = () => {
      const numDays = daysInMonth(selectedDate);
      const firstDay = firstDayOfMonth(selectedDate);
      const calendar = [];

      for (let i = 0; i < firstDay; i++) {
         calendar.push(<div key={`empty-${i}`} className="calendar__cell calendar__empty"></div>);
      }
      for (let day = 1; day <= numDays; day++) {
         const earningsForDay = earnings.filter((earning) => {
            const earningDate = new Date(earning.reportDate);
            return (earningDate.getFullYear() === selectedDate.getFullYear() &&
            earningDate.getMonth() === selectedDate.getMonth() &&
            earningDate.getDate() === day);
         });
        calendar.push(
         <div
            key={day}
            className={`calendar__cell ${
               selectedDate.getDate() === day ? "calendar__selected" : ""
            }`}
            onClick={() => openPopup(day)}
         >
         {day}
         <div className="earnings">
            {earningsForDay.map((earning, index) => (
               <div key={index} className="calendar__earning-sym">
                  {earning.symbol}
               </div>
            ))}
            </div>
         </div>
      );
   }
      return calendar;
   };

   return (
      <section className="calendar">
            <div className="calendar__header-cont">
               <button className="calendar__button" onClick={() => changeMonth(-1)}>&lt; Prev</button>
                  <h2 className="calendar__header">{selectedDate.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
               <button className="calendar__button" onClick={() => changeMonth(1)}>Next &gt;</button>
            </div>
            <div key="header" className="calendar__day-cont">{generateHeader()}</div>
            <div className="calendar__grid">{generateCalendar()}</div>
            {popupData && (
               <Popup selectedDate={selectedDate} data={popupData} onClose={closePopup} />
            )}
      </section>
   );
};

export default Calendar;






