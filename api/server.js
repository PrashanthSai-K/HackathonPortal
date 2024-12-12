const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(4500, ()=>{
    console.log("listening on 3500");
})