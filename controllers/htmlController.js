const path = require("path");

module.exports = app => {

  app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

  app.get("/clientSignUp", (req, res) => res.sendFile(path.join(__dirname, "../public/clientSignUp.html")));

  app.get("/stylistSignUp", (req, res) => res.sendFile(path.join(__dirname, "../public/stylistSignUp.html")));

  app.get("/list", (req, res) => res.redirect(`/list/${req.body.speciality}/${req.body['distance-search']}`))

  app.get("/list/:speciality/:range", (req, res) => {
  	res.sendFile(path.join(__dirname, "../public/list.html"))
  });

};