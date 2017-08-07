const path = require("path");

const sendHTML = (res, filePath) => res.sendFile(path.join(__dirname, filePath));

module.exports = app => {

  app.get("/", (req, res) => sendHTML(res, "../public/index.html"));

  app.get("/clientSignUp", (req, res) => sendHTML(res, "../public/clientSignUp.html"));

  app.get("/stylistSignUp", (req, res) => sendHTML(res, "../public/stylistSignUp.html"));

  app.get("/list", (req, res) => sendHTML(res, "../public/list.html"));

};