const d = new Date("2022-05-25");
const wd = new Intl.DateTimeFormat("en", { weekday: "short" }).format(d);
const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

const data = [
  {
    _id: 1,
    date: `${wd}, ${da} ${mo}`,
    events: [
      {
        id: 1,
        event: "first event",
        time: "8:30-9:45 PM IST",
        duration: 75,
        src: "/img1.png",
        status: {
          registered: false,
          attending: 45,
          seats: 30,
        },
      },
      {
        id: 2,
        event: "second event",
        time: "8:30-9:30 AM IST",
        duration: 60,
        src: "/img3.png",
        status: {
          registered: true,
          attending: 0,
          seats: 0,
        },
      },
      {
        id: 3,
        event: "third event of the day",
        time: "6:00-6:30 PM IST",
        duration: 30,
        src: "/img4.png",
        status: {
          registered: false,
          attending: 122,
          seats: 78,
        },
      },
    ],
  },
  {
    _id: 2,
    date: `${"Monday"}, ${da - 2} ${mo}`,
    events: [
      {
        id: 1,
        event: null,
      },
    ],
  },
  {
    _id: 3,
    date: `${"Sun"}, ${da - 3} ${mo}`,
    events: [
      {
        id: 1,
        event: "first event",
        time: "8:30-10:45 PM IST",
        duration: 135,
        src: "/img2.png",
        status: {
          registered: false,
          attending: 69,
          seats: 11,
        },
      },
      {
        id: 2,
        event: "second event",
        time: "8:00-9:45 AM IST",
        duration: 105,
        src: "/img6.png",
        status: {
          registered: true,
          attending: 0,
          seats: 0,
        },
      },
    ],
  },
];

module.exports = { data };
