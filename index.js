
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

// Almacenamiento en memoria
let tasks = [];

// GET /tasks: trae todas las tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks: crea una nueva tarea
app.post('/tasks', (req, res) => {
  const { title, description, dueDate, priority, status } = req.body;
  if (!title || !priority || !status) {
    return res.status(400).json({ error: 'title, priority y status son requeridos' });
  }
  if (!['Baja', 'Media', 'Alta'].includes(priority)) {
    return res.status(400).json({ error: 'priority debe ser Baja, Media o Alta' });
  }
  if (!['Pendiente', 'Completado'].includes(status)) {
    return res.status(400).json({ error: 'status debe ser Pendiente o Completado' });
  }
  const newTask = {
    id: uuidv4(),
    title,
    description: description || '',
    dueDate: dueDate || '',
    priority,
    status
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id: actualiza una tarea (por ID)
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, priority, status } = req.body;
  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  if (priority && !['Baja', 'Media', 'Alta'].includes(priority)) {
    return res.status(400).json({ error: 'priority debe ser Baja, Media o Alta' });
  }
  if (status && !['Pendiente', 'Completado'].includes(status)) {
    return res.status(400).json({ error: 'status debe ser Pendiente o Completado' });
  }
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (dueDate !== undefined) task.dueDate = dueDate;
  if (priority !== undefined) task.priority = priority;
  if (status !== undefined) task.status = status;
  res.json(task);
});

// DELETE /tasks/:id: elimina una tarea (by ID)
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  const deleted = tasks.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
