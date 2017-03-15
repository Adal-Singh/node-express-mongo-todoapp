var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Comments = new Schema({
    title : String,
    comment : String,
    postedon : Date,
    postedby : Schema.Types.ObjectId,
    location : [Number]
});
 
mongoose.model( 'Comments', Comments );