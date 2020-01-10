var express = require("express");

var app = express();

app.get("/", function(req, res) {
  console.log(`>> ${req.method} ${req.path}`);
  res.send("Hello World\n");
});

app.listen(process.env.PORT || 5000);

module.exports = app;
