const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb+srv://eddybruv:bimelaA4@cluster0.rseih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
connection.then(() => console.log("Connection to database successful"));
connection.catch(() => console.log("unsuccessful"));

app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");

const PORT = 3000;

const PersonSchema = mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
});

const PersonModel = mongoose.model("Person", PersonSchema);

const newUser = new PersonModel({ name: "Eddy", age: 20, gender: "M" });
newUser.save();

let todoList = [];

const users = [
  { id: 1, name: "Eddy", age: 20 },
  { id: 2, name: "Sonia", age: 18 },
  { id: 3, name: "Kyle", age: 0 },
];
// replace with suitable view
app.get("/todo-list", (req, res) => {
  res.render("todoList", { todoList });
});

app.post("/todo-list", (req, res) => {
  todoList.push({ ...req.body, id: uuidv4() });
  res.render("todoList", { todoList });
});

app.get("/", (req, res) => {
  res.send("You just visited home route");
});

// Get all users
app.get("/all_users", (req, res) => {
  res.json(users);
});

// Get single user
app.get("/user/:id", (req, res) => {
  return res.json(
    users.filter((user) => user.id === Number(req.params.id))[0] ||
      "User not found"
  );
});

// Delete user
app.get("/delete_user/:id", (req, res) => {
  res.json(users.filter((user) => user.id !== Number(req.params.id)));
});

app.post("/create_user", (req, res) => {
  users.push(req.body);
  res.send(users);
});

app.listen(PORT, console.log(`Server running on port: ${PORT}`));
