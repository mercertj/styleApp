const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

const reset = process.argv[2] === '--reset' ? { force: true } : { force: false };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

const htmlRoutes = require("./controllers/htmlController.js");
const stylistRoutes = require("./controllers/apiStylist.js");
const clientRoutes = require("./controllers/apiClient.js");
const testRoutes = require("./controllers/apiTest.js");
// require("./controllers/apiLogin.js")(app);

app.use("/", htmlRoutes)
app.use("/api/client", clientRoutes)
app.use("/api/stylist", stylistRoutes)
app.use("/api/test", testRoutes)
// app.use("/api/login", loginRoutes)

db.sequelize.sync(reset).then(() => {
    app.listen(PORT, () => console.log("App listening on PORT " + PORT));
});