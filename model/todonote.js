var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var TodoNote = new Schema({
    data : String
});
 
mongoose.model( 'TodoNote', TodoNote );