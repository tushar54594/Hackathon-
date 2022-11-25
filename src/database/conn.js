const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/hospitalDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database connected successfully");
}).catch((error)=>{
    console.log(error);
})
