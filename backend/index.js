'use strict'
let routes = require("./routes");
let bodyparser = require("body-parser");
let mongoose = require("mongoose");

let express = require("express");

let app= express();

var port = process.env.PORT || 3000;


app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
mongoose.connect('mongodb://mongo:27017/API3', {useNewUrlParser:true});
var db = mongoose.connection;
if(!db)
    console.log("erro connectig db")
else 
    console.log("conecction successfully")

app.use('/api',routes);

app.get('/', (req, res)=> res.send("hello peruuuuu"));

app.listen(port, function(){
    console.log("running API3 o port" + port)
});

