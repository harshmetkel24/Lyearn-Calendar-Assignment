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
      />
    </>
  );
};

export default CalendarComponent;
