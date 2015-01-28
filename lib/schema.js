var mongoose = require('mongoose');

var user = mongoose.Schema({
	uid : Number,
	name : String,
	password : String,
	type : Number, 
	
});

var speaker = mongoose.Schema({
	sid : Number,
	name : String,
	desired_name : String,
	title : String,
	description : String,
	email : String,
	biography : String,
	session_time : Date, 
	photo: {
		type: String,
		default: 'undefined'
	},
	university : String,
	uni_year : Number,
	position : String,
	agreement :{
		type : Boolean,
		default : 'false';
	}
	phone : Number
	
});

var session = mongoose.Schema({
	sesid : Number,
	location_name : String,
	location_description : String, 
	location_adress : String,
	link_eventbrite : String,
	/*program : [
		other:{
			entry_name : String,
			start_time : Date,
			end_time : Date,
			description : String
	},
		speaker:{
			speaker_id : Number,
			start_time : Date,
			end_time : Date
		}
	],*/
	program : []
		
});

module.export.user = user;
module.export.speaker = speaker;
module.export.sessin = session;
