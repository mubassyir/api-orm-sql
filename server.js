const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const app = express();
const PORT = process.env.PORT || 8080;

var corsOptions = {
  origin: "http://localhost:8081",
};

//cors and body parser
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
//home 
app.get("/", (req, res) => {
  res.json({
    message: "welcome to rest api",
  });
});

//syncronizing call from routes 
db.sequelize.sync();
require("./app/routes/tutorial.routes.js")(app);

app.listen(PORT, () => {
  console.log(`server http://localhost:${PORT} running . . .`);
});
