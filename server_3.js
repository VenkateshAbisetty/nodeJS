//Express JS SERVER
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chicken", (req, res) => {
  res.send("chicken is the best");
});

app.get("/idli", (req, res) => {
  res.send("Idli is world's best food");
});

app.get("/customizedIdli", (req, res) => {
  const customizedIdli = {
    name: "Ragi Idli",
    size: "10cm dia",
    is_sambar: true,
    is_chutney: false,
  };
  // res.send(customizedIdli);
  res.send("Item Name : " + customizedIdli.name);
});

app.listen(port, () => {
  console.log(`I am Listening on port ${port}`);
});
