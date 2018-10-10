//Intitial Setup to run this module
var express = require("express");
var app = express();
//=======================================================
//Requiring the model that is  exported from another file
//=======================================================
var modelThatIsExported = require("./models/test");
//=============================================================
// Mongoose Setup 
//(Be sure to start up ./mongod on the terminal)
// 27017 is the default port number for mongoose
//=============================================================
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/boom");
//=============================================================
//Setting the view-engine are ejs (Express Js)
app.set("view engine", "ejs");
//==============================================================================
//Putting up body-parser because it will automatically change the form post into 
//JSON format to be stored on the DataBase
//==============================================================================
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//==============================================================================

//=========================================
//The Actual Getting and Posting Operations
//=========================================
app.get("/", function(req, res){
	res.render("index");
})

app.post("/index", function(req, res){
	//Creating a new object Variable of the same schema as modelThatIsExported
	var dataToSave = new modelThatIsExported({
		name: req.body.name
	});
	//========================================================================
	//Saving the dataToSave Object using mongoDb`s inbuilt .save method 
	dataToSave.save(function(err){
		if(err){
			console.log(err);
		}else{
			res.send("Yes Dude, You did it !");
		}
	});
});




//====================
//This you know Buddy!
//====================
app.listen(1234, function(){
	console.log("This Turns on the Server, Yayy Im on !");
});