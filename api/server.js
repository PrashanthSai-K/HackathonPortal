const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/database.js");

const app = express();

app.use(bodyParser.json({limit : '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

const allowedOrigins = ["https://w2tpzms2-5173.inc1.devtunnels.ms","http://localhost:8000", "http://localhost:5173","https://mklcwgkh-5173.inc1.devtunnels.ms"];

app.use(cors({  
  origin: (origin, callback) => { 
    // console.log(origin);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, 
}));

// Specify the client URL in the CORS options
// const corsOptions = {
//   origin: allowedOrigins, // Replace with your client URL if different
//   optionsSuccessStatus: 200
// };

// app.use(cors());


sequelize.sync({ force: false }).then(() => {
  console.log("connected to db successfully---------->>>");
});

require("./routes/auth.routes.js")(app);
require("./routes/problemstatements.routes.js")(app);
require("./routes/finalist.routes.js")(app);
require("./routes/profile.routes.js")(app);
require("./routes/event.routes.js")(app);
require("./routes/notification.routes.js")(app);
require("./routes/submitted.routes.js")(app);
require("./routes/winner.routes.js")(app);
require("./routes/presentation.routes.js")(app);
require("./routes/forgotPassword.routes.js")(app);



app.listen(4500, () => {
  console.log("listening on 4500");
});