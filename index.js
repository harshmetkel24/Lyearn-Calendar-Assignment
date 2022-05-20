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

app.get("/", (req, res) => {
  const data = [
    {
      _id: 1,
      date: new Date(2020, 5, 22).toDateString(),
      events: [
        {
          id: 1,
          event: "first event",
          time: "8:30-9:45 PM IST",
          src: "/img1.png",
        },
        {
          id: 2,
          event: "second event",
          time: "8:30-9:30 AM IST",
          src: "/img3.png",
        },
      ],
    },
    {
      _id: 2,
      date: new Date(2022, 5, 26).toDateString(),
      events: [
        {
          id: 1,
          event: "first event",
          time: "8:30-10:45 PM IST",
          src: "/img2.png",
        },
        {
          id: 2,
          event: "second event",
          time: "8:00-9:45 AM IST",
          src: "/img6.png",
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
