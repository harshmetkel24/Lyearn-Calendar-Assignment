import { React, useState, useEffect } from "react";
import { Calendar } from "react-calendar";

import "../calendar.css";
const CalendarComponent = () => {
  const locale = "hi-IN";
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <>
      <Calendar
        onChange={setDate}
        value={date}
        maxDetail="month"
        minDetail="decade"
        formatMonthYear={(locale, date) => {
          const yr = new Intl.DateTimeFormat(locale, {
            year: "numeric",
          }).format(date);
          const mo = new Intl.DateTimeFormat(locale, { month: "long" }).format(
            date
          );

          return `${mo}, ${yr}`;
        }}
      />
    </>
  );
};

export default CalendarComponent;
