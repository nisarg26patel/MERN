const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Data',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{
    console.log("MongoDb Connection Suceeded");
})
.catch((err)=>{
    console.log("MongoDb Connection Failed");
    });
require("./models/user.model")
