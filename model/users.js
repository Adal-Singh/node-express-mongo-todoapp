var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Users = new Schema({
    name : String,
    email : String,
    fulladdress : {
    	address: String, location: [Number]
    },
    type : [String]
});
 
mongoose.model( 'Users', Users );