const mongoose = require('mongoose');

const MecanicoSchema = new mongoose.Schema({
  nombre: String,
  especialidad: String,
  calificacion: Number,
});

module.exports = mongoose.model('Mecanico', MecanicoSchema);
