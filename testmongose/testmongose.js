const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name:String,
    age:Number,
    health:String
}
const Cat = mongoose.model('Catss', schema);

// const kitty = new Cat({ name: 'Zildjiantest' });
// kitty.save().then(() => console.log('meow'));

// const Hellokitty = new Cat({ name: 'kk',age:1,health:"good" });
// Hellokitty.save().then(() => console.log('hhh'));

Cat.find({name:"kk"},(err,data)=>{console.log(data[0]._doc)})