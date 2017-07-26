var mongoose = require('mongoose');
var TodoSchema = new mongoose.Schema({
  name: String,
  happyHour: Boolean,
  description: String,
  brewery: String,
  beerType: String,
  cost: Number,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('todo', TodoSchema);




// curl -XPOST http://localhost:3000/todos -d 'name=London%20Pride&happyHour=true&beerType=Ale&description=Classic%20British%20Ale&brewery=Fullers&cost=6.5'

// curl -XPUT http://localhost:3000/todos/5977da900fb2e635f6fe89c4 -d 'description=Classic%20Irish%20Stout'

// curl -X "DELETE" http://localhost:3000/todos/5977db17afaa54360f8abafe
