var mongoose = require('mongoose');
var TodoSchema = new mongoose.Schema({
  name: String,
  happyHour: Boolean,
  description: String,
  brewery: String,
  beerType: String,
  cost: Number,
  notes: String,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('todo', TodoSchema);




// curl -XPOST http://localhost:3000/todos -d 'name=London%20Pride&happyHour=true&beerType=Ale&description=Classic%20British%20Ale&brewery=Fullers&cost=6.5'

// curl -XPUT http://localhost:3000/todos/59780cf1e5c3e03b11c364bb -d 'description=http%3A%2F%2F21st-amendment.com%2Fassets%2Fbrewfree_can_022113-230x409.png'

// curl -X "DELETE" http://localhost:3000/todos/5977fb8e21aab138f5feeb4f
