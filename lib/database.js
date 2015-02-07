var password = proces.enc.PASSWORD;

var DATABASE_URI = process.env.MONGOLAB_URI || null;

if (DATABASE_URI)
DATABASE_URI = DATABASE_URI.toString().trim();

var mongoose = require('mongoose');
var schema = require('./schema.js');

var db = mongoose.connect(DATABASE_URI);

var db

mongoose.connection.once('open',function(err){
	
	console.log("Connected to DB");
});

var Speaker = db.model('speaker',schema.speaker);
var User = db.model('user',schema.user);
var Session = db.model('session',schema.session);

function Database() {
	var database = {};
	//Add
	database.addUser = function (options, cb) {
		var user = new User(options);

		user.save(cb);
	};
	
	database.addSpeaker = function(options, cb){
		var speaker = new Speaker(options);
		
		speaker.save(cb);
	}
	
	database.addSession = function(options, cb){
		var session = new Session(options);
		
		session.save(cb);
	};
	//Remove
	database.removeSpeaker = function(condition, cb){
		speaker.remove(condition,cb);
	};
	
	database.removeSession = function(condition, cb){
		session.remove(condition,cb);
	};
	
	database.removeUser = function(condition, cb){
		user.remove(condition,cb);
	};
	//Update
	database.updateSpeaker = function(query,update,cb){
		speaker.update(query,update,cb);
	};
	
	database.updateUser = function(query,update,cb){
		user.update(query,update,cb);
	};
	
	database.updateSession = function(query,update,cb){
		session.update(query,update,cb);
	};
	return database;
}
module.exports = Database;
