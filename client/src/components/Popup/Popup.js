import React from "react";
import "./Popup.scss";

const Popup = ({ selectedDate, data, onClose }) => {
  return (
   <section className="popup">
      <div className="popup__cont">
         <div className="popup__header-cont">
            <h2 className="popup__header">{selectedDate.toDateString()}</h2>
            <button className="popup__button" onClick={onClose}>Close</button>
         </div>
         <p className="popup__key">Symbol: Company Name, Estimate </p>
         <div className="popup__content-cont">
            {data.map((item, index) => (
            <div key={index} className="popup__item">
               <span className="popup__symbol">{item.symbol}: </span>
               {item.symbol !== item.name && (
               <span className="popup__name">{item.name}, </span>
               )}
               {item.estimate && (
               <span className="popup__estimate">${item.estimate}</span>
               )}
            </div>
            ))}
         </div>
      </div>
   </section>
  );
};

export default Popup;

