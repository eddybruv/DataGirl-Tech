const { urlencoded } = require("express");
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const connection = mongoose.connect(
  "mongodb+srv://eddybruv:bimelaA4@shared-cluster.l6far.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
const UserRouter = require('./routes/User.router')

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/user', UserRouter);

connection.then(() => console.log('Connection successful'));
connection.catch(() => console.log('connection unsuccessful'));

const PORT = 3000;



app.listen(PORT, console.log(`Running on port ${PORT}`));