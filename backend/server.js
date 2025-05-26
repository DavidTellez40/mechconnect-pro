const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Mecanico = require('./models/Mecanico');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mechconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/api/mecanicos', async (req, res) => {
  const mecanicos = await Mecanico.find();
  res.json(mecanicos);
});

app.listen(3001, () => {
  console.log('Servidor backend corriendo en http://localhost:3001');
});
