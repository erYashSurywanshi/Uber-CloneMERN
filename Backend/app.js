const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.route");
const cookieParser = require("cookie-parser");
const captainRoutes = require("./routes/captain.route");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.send('hello World')
}) 
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
