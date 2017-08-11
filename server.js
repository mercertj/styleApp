const express = require("express");
const expressSession = require('express-session');
const bodyParser = require("body-parser");
const passport = require('passport')
const db = require("./models");


const app = express();

//setup passport
app.use(expressSession({secret: 'ucsd0417'}));
app.use(passport.initialize());
app.use(passport.session());
const initPassport = require('./auth/auth');
initPassport(passport);


//setup bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//static files
app.use(express.static("public"));

// Routes
const htmlRoutes = require("./controllers/htmlController.js");
const stylistRoutes = require("./controllers/apiStylist.js");
const clientRoutes = require("./controllers/apiClient.js");
const authRoutes = require("./controllers/apiAuth.js");
const testRoutes = require("./controllers/apiTest.js");

app.use("/", htmlRoutes)
app.use("/api/client", clientRoutes)
app.use("/api/stylist", stylistRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/test", testRoutes)


//check for reset param from terminal, if reset, drop tables and rebuild
const reset = process.argv[2] === '--reset' ? { force: true } : { force: false };
const PORT = process.env.PORT || 8080;

db.sequelize.sync(reset).then(() => {
    app.listen(PORT, () => console.log("App listening on PORT " + PORT));
});


