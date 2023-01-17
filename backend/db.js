const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://sreedevi:manager123@cluster0.jfzzdrd.mongodb.net/?retryWrites=true&w=majority'

const mongoDB = () => {
    mongoose.connect(mongoURL,{useNewUrlParser : true} , (err,result) => {
        if(err) console.log("---", err)
        else{
            console.log("connected successfully")
        }
   
    });
}

module.exports = mongoDB
