import React, { useState } from "react";

const Calendar = () => {
  // Get current date
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // Function to get number of days in a month
  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Function to get the first day of the month
  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Function to handle date click
  const handleDateClick = (day) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
  };

  // Generate calendar grid
  const generateCalendar = () => {
    const numDays = daysInMonth(selectedDate);
    const firstDay = firstDayOfMonth(selectedDate);
    const calendar = [];

    // Push empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendar.push(<div key={`empty-${i}`} className="calendar-cell empty-cell"></div>);
    }

    // Push cells for each day in the month
    for (let day = 1; day <= numDays; day++) {
      calendar.push(
        <div
          key={day}
          className={`calendar-cell ${selectedDate.getDate() === day ? "selected" : ""}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="calendar">
      <h2>{selectedDate.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
      <div className="calendar-grid">{generateCalendar()}</div>
    </div>
  );
};

export default Calendar;
