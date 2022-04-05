const express = require('express');
const app = express();

app.use(express.json())

const PORT = 6000;
const users = [
  {id: 1, name: 'Eddy', age: 20},
  {id: 2, name: 'Sonia', age: 18},
  {id: 3, name: 'Kyle', age: 0}
];

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