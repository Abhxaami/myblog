const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://abhirami:aamx@cluster0.kfzrqo8.mongodb.net/MyBlogs?retryWrites=true&w=majority&appName=Cluster0")
  .then(()=>{
       console.log("Db connected")
  })
  .catch((error)=>{
       console.log(error)
  })