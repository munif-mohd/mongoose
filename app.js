const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost/fruitDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 5,
    review: "Good"
});
//apple.save();

const pplSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const People = mongoose.model("People", pplSchema);

const joun = new People({
    name: "joun",
    age: 22
});
joun.save();