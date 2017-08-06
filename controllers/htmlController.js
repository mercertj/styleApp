const path = require("path");

module.exports = app => {

  app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

  app.get("/results", (req, res) => res.sendFile(path.join(__dirname, "../public/results.html")));

  app.get("/stylist", (req, res) => res.sendFile(path.join(__dirname, "../public/profile.html")));

  app.get("/clientSignUp", (req, res) => res.sendFile(path.join(__dirname, "../public/clientSignUp.html")));

  app.get("/stylistSignUp", (req, res) => res.sendFile(path.join(__dirname, "../public/stylistSignUp.html")));

};