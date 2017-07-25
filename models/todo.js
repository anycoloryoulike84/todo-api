var mongoose = require('mongoose');
var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  age: Number,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('todo', TodoSchema);
