const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000
const session = require("express-session");
const  cookieParser = require("cookie-parser");
const usersRouter = require("./routes/users");
const indexRouter = require("./routes");
const usersCookie = require("./middleware/usersCookie")
const cookieCheck = require("./middleware/cookieCheck")
/* Template engine config */
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
/* Middlewares */
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session(
    {secret: "color",
 resave:false, 
 saveUninitialized: true}));
 app.use(cookieCheck)
app.use(usersCookie)
/* Routers */
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.listen(PORT, () => console.log(`Server listen in port ${PORT}\nhttp://localhost:${PORT}`));