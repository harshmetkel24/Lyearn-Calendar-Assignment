const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
const d = new Date("2022-05-25");
const wd = new Intl.DateTimeFormat("en", { weekday: "short" }).format(d);
const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

app.get("/events", (req, res) => {
  const data = [
    {
      _id: 1,
      date: `${wd}, ${da} ${mo}`,
      events: [
        {
          id: 1,
          event: "first event",
          time: "8:30-9:45 PM IST",
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
          time: "6:00-8:30 PM IST",
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
      date: `${"Sun"}, ${da - 3} ${mo}`,
      events: [
        {
          id: 1,
          event: "first event",
          time: "8:30-10:45 PM IST",
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
  res.send(data);
});

if (process.env.NODE_ENV == "production") {
  const path = require("path");

  app.get("/", function (req, res) {
    app.use(express.static(path.resolve(__dirname, "lyearn", "build")));
    res.sendFile(path.resolve(__dirname, "lyearn", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
