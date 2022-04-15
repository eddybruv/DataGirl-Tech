const express = require("express");
const app = express();

app.use(express.static("public")); //for all static files(html)
app.use(express.urlencoded({ extended: true })); //parse the URL-encoded data with the querystring library
app.use(express.json());

app.set("view engine", "ejs");

const userRouter = require("./routes/users");

app.use('/users', userRouter);

app.listen(3000);