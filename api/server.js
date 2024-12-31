const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/database.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
  console.log("connected to db successfully---------->>>");
});

require("./routes/auth.routes.js")(app);
require("./routes/problemstatements.routes.js")(app);
require("./routes/finalist.routes.js")(app);
require("./routes/profile.routes.js")(app);


app.listen(4500, () => {
  console.log("listening on 4500");
});
