const express = require('express');
const app = express();
app.use(express.json());

const PORT = 5000;
let tasks = [];

app.get('/', (req, res) => res.json({message: 'Welcome to Task Management API'}));

app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
  const {title, completed} = req.body;
  if(!title) return res.status(400).json({message: 'Title is required'});
  
  const task = {
    id: tasks.length + 1,
    title,
    completed: completed || false
  };
  tasks.push(task);
  res.status(201).json({message: 'Task added', task});
});

app.listen(PORT, () => console.log(Server running on http://localhost:${PORT}));
