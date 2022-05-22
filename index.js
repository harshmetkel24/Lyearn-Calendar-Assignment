const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { data } = require("./data");

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

app.get("/events", (req, res) => {
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
