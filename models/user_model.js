var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name: String,
  userName: String,
  password: String,
  profilePic: String,
  age: String,
  member: Boolean,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('user', userSchema);






// curl -XPOST http://localhost:3000/users -d 'name=Bobb&userName=bobb&password=ndusgv&age=23&member=false'

// curl -XGET http://localhost:3000/users 

// curl -XPUT http://localhost:3000/todos/59780cf1e5c3e03b11c364bb -d 'description=http%3A%2F%2F21st-amendment.com%2Fassets%2Fbrewfree_can_022113-230x409.png'

// curl -X "DELETE" http://localhost:3000/todos/5977fb8e21aab138f5feeb4f
