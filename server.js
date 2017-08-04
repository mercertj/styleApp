const express = require("express");
const bodyParser = require("body-parser");
const chai = require("chai");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

const reset = process.argv[2] === '--reset' ? { force: true } : { force: false };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

require("./controllers/htmlController.js")(app);
require("./controllers/apiStylist.js")(app);
require("./controllers/apiClient.js")(app);
require("./controllers/apiTest.js")(app);


db.sequelize.sync(reset).then(() => {
    app.listen(PORT, () => console.log("App listening on PORT " + PORT));
});