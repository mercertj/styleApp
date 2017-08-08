const path = require("path");
const router = require('express').Router();

const sendHTML = (res, filePath) => res.sendFile(path.join(__dirname, filePath));

router.get("/", (req, res) => sendHTML(res, "../public/index.html"));

router.get("/clientSignUp", (req, res) => sendHTML(res, "../public/clientSignUp.html"));

router.get("/stylistSignUp", (req, res) => sendHTML(res, "../public/stylistSignUp.html"));

router.get("/list", (req, res) => sendHTML(res, "../public/list.html"));

module.exports = router;