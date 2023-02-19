const { min } = require("lodash");
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost/fruitDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please insert a name for your fruit"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 5,
    review: "Good"
});
//apple.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 7,
    review: "so good!"
});
kiwi.save();

const pplSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const People = mongoose.model("People", pplSchema);

const joun = new People({
    name: "joun",
    age: 22
});
//joun.save();


 const banana = new Fruit({
    name: "Banana",
    rating: 9,
    review: "taste good"
});

const orange  = new Fruit({
    name: "Orange",
    rating: 3,
    review: "too soal"
});

const watermelon = new Fruit({
    name: "Watermelon",
    rating: 7,
    review: "Taste good but, hard to be cut"
});

/*Fruit.insertMany([banana, orange, watermelon], function(err){
    if(err){
        console.log(err);
    }
        else{
            console.log("Fruits were added succesfully ");
        }
    })*/

    Fruit.find(function(err, fruits){
        if(err){
            console.log(err);
    }else{
        mongoose.connection.close();

        fruits.forEach(function(fruits)  {
            console.log(fruits.name);
    })
}});  


/*Fruit.updateOne({_id: "63f1bbe4f0d13ec2b3e60b26"}, {name: "Peach"}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Succesfullt updated");
    }
});*/ 

Fruit.deleteMany({name: "Kiwi"}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Succesfullt deleted");
    }
}); 
    
const mango  = new Fruit({
    name: "Mango",
    rating: 9,
    review: "decent fruit"
});
//mango.save();

People.updateOne({name: "joun"}, {favouriteFruit: mango}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Succesfullt updated");
    }
});