const mongoose= require('mongoose');
const mongoURI="mongodb+srv://kauxtubx:<password>@cluster0.ur1ayyp.mongodb.net/?retryWrites=true&w=majority

const connectToMongo =()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo successfully")
    })
}

module.exports= connectToMongo;
