const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');

const PORT = 3000;

let todoList = [];

const users = [
  {id: 1, name: 'Eddy', age: 20},
  {id: 2, name: 'Sonia', age: 18},
  {id: 3, name: 'Kyle', age: 0}
];
// replace with suitable view
app.get('/todo-list', (req, res)=> {
  res.render('todoList', { todoList });
})

app.post('/todo-list', (req,res) => {
  todoList.push({...req.body, id: uuidv4()});
  res.render('todoList', {todoList})
})

app.get('/', (req, res) => {
  res.send("You just visited home route")
});

// Get all users
app.get('/all_users', (req, res) => {
  res.json(users);
});

// Get single user 
app.get('/user/:id', (req, res) => {
  return res.json(users.filter(user => user.id === Number(req.params.id))[0] || 'User not found')
});

// Delete user 
app.get('/delete_user/:id', (req, res) => {
  res.json(users.filter(user => user.id !== Number(req.params.id)));
});

app.post('/create_user', (req, res) => {
  users.push(req.body);
  res.send(users);
})

app.listen(PORT, console.log(`Server running on port: ${PORT}`));