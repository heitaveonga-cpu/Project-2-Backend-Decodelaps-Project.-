const express = require('express');
const app = express();
app.use(express.json());

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

// For local
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}

// For Vercel
module.exports = app;
