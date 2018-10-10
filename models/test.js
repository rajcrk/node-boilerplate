//Requiring the mongoose module
var mongoose = require("mongoose");

//Creating a new Schema to store the data
var testSchema = new mongoose.Schema({
	name: {type: String},
});


//Exporting the same schema out with the name of the Schema as modelThatIsExported
module.exports = mongoose.model("modelThatIsExported", testSchema);