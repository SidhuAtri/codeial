const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error Connectiong to mongodb"));

db.once('open',function(){
    console.log("Connected to db");
});

module.exports=db;