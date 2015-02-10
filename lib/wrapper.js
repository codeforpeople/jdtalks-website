var Database = require('./database.js');

var Validator = function(){

	var db = new Database();

	var addNewUser = function (name,password,type,cb){

			var nume = user.path('name').validate(function(value,cb){

				if (cb) {return handleError(cb);}
				var first=false,second=false;
				if(value.length>=6)
					{first=true;}
				query.find({name:value});
				if(!query) {second=true;}

				if(first && second) {return true;}
			});

			var pass = user.path('password').validate(function(value,cb){
				if (cb) {return handleError(cb);}
				var first=false,second=false;
				if(value.length>=6)
					{first=true;}
				if(first) {return true;}
			});

			if(nume && pass){
				
				db.addUser({
					uid : db.generateId(),
					name : name,
					password : password,
					type : type
				
				}, cb);
			}


	};

	var UpdateUserType = function(uid,type,cb){
				
				db.updateUser(uid,{
					type : type
			   }, cb);
	};

	var UpdateUserPass = function(uid,password,cb){
				
				db.updateUser(uid,{
					password : password
			   }, cb);
	};

	var DeleteUser = function(uid,cb){
				
				db.remove({uid:uid},function(err){
					if(err) {return handleError(err);}
				},cb);
				if(cb) {return handleError(cb);}
	};



	var addNewSpeaker = function(name,desired_name,title,description,email,biography,session_time,photo,uni,uni_year,position,agreed,phone,cb){
			
			//Valdation Basic
			var nume = speaker.path('name').validate(function(value,cb){
				
				if(cb) {return handleError(cb);}
				if(value.length>=6) {return true;}
				return false;
			});

			var d_nume = speaker.path('desired_name').validate(function(value,cb){
				
				if(cb) {return handleError(cb);}
				if(value.length>=6) {return true;}
				return false;
			});

			var titlu = speaker.path('title').validate(function(value,cb){
				if(cb) {return handleError(cb);}
				if(value.length>=4) {return true;}
				return false;
			});			

			var descriere = speaker.path('description').validate(function(value,cb){
				if(cb) {return handleError(cb);}
				if(value.length>=20) {return true;}
				return false;
			});

			var mail = speaker.path('email').validate(function(value,cb){
				
				if(cb) {return handleError(cb);}
				if(value.length>=10) {return true;}
				return false;
			});

			var biografie = speaker.path('biography').validate(function(value,cb){
				
				if(cb) {return handleError(cb);}
				if(value.length>=20) {return true;}
				return false;
			});

			var poza = speaker.path('photo').validate(function(value,cb){
				
				if(cb) {return handleError(cb);}
				if(value.length>=6) {return true;}
				return false;
			});

			var universitate = speaker.path('university').validate(function(value,cb){
				
				if(cb) {return handleError(cb);}
				if(value.length>=6) {return true;}
				return false;
			});

			var an = speaker.path('uni_year').validate(function(value,cb){
				
				if(cb) {return handleError(cb);}
				if(parseInt(value)>0 && parseInt(value)<7) {return true;} 
				return false;
			});

			var poz = speaker.path('position').validate(function(value,cb){
				
				if(cb) {return handleError(cb);}
				if(value.length>=5) {return true;}
				return false;
			});

			var telefon = speaker.path('phone').validate(function(value,cb){
				
				if(cb) {return handleError(cb);}
				if(!parseInt(value) && value.length>8) {return true;}
				return false;
			});

			//QUERY NOW
			var sesiune = speaker.path('session_time').validate(function(value,cb){

				if(cb) {return handleError(cb);}
													//still to work here
				if(!speaker.find({session_time:value})) {return true;}
				return false;
			});

			if(nume && d_nume && titlu && descriere && mail && biografie && poza && universitate && an && poz && telefon && sesiune){
				
				db.addSpeaker({
				  	sid : db.generateId(),
				  	name : name,
				  	desired_name : desired_name,
				  	title : title,
				  	description : description,
				  	email : email,
				  	biography : biography,
				  	session_time : session_time,
				  	photo : photo,
				  	university : uni,
				  	uni_year : uni_year,
				  	position : position,
				  	agreement : agreed,
				  	phone : phone, 
				}, cb);
			}


	};

	var UpdateSpeakerDetails = function(sid,name,desired_name,title,description,email,biography,uni,uni_year,position,phone,){
		db.updateSpeaker(sid,{
			name : name,
			desired_name : desired_name,
			title : title,
		  	description : description,
		 	email : email,
		  	biography : biography,
		  	session_time : session_time,
		  	photo : photo,
		  	university : uni,
		  	uni_year : uni_year,
		 	position : position,
		  	phone : phone, 
		},cb);
	};

	var UpdateSpeakerTime = function(sid,session_time,cb){
		db.updateSpeaker(sid,{
			session_time : session_time
		},cb);
	};

	var UpdateSpeakerPhoto = function(sid,photo,cb){
		db.updateSpeaker(sid,{
			photo : photo
		},cb);
	};

	var UpdateSpeakerBio = function(sid,biography,cb){
		db.updateSpeaker(sid,{
			biography : biography
		},cb);
	};

	var DeleteSpeaker = function(sid,cb){
				
				db.remove({sid:sid},function(err){
					if(err) {return handleError(err);}
				},cb);
				if(cb) {return handleError(cb);}
	};

	var addNewSession = function(location_name,location_description,location_adress,link_eventbrite,program,cb){

			var nume = session.path('location_name').validate(function(value,cb){

				if(cb) {return handleError(cb);}
				if(value.length>=4) {return true;}
				return false;
			});

			var descriere = session.path('location_description').validate(function(value,cb){

				if(cb) {return handleError(cb);}
				if(value.length>=10) {return true;}
				return false;
			});

			var adresa = session.path('location_adress').validate(function(value,cb){

				if(cb) {return handleError(cb);}
				if(value.length>=10) {return true;}
				return false;
			});

			var eventbrite = session.path('link_eventbrite').validate(function(value,cb){

				if(cb) {return handleError(cb);}
				if(value.length>=20) {return true;}
				return false;
			});
			// La program avem de discutat 

			
			if(nume && descriere && adresa && eventbrite && prog){
				
				db.addSession({
					sesid : db.generateId();
					location_name : location_name,
					location_description : location_description,
					location_adress : location_adress,
					link_eventbrite : link_eventbrite,
					//program..
				},cb);
			}


	};

	var UpdateSessionDetails = function(sesid,location_name,location_description,location_adress,link_eventbrite,cb){
			
			db.updateSession(sesid,{
				location_name : location_name,
				location_description : location_description,
				location_adress : location_adress,
				link_eventbrite : link_eventbrite,
			},cb);
	};

	var UpdateSessionProgram = function(sesid,program,cb){
		db.updateSession(sesid,{},cb);

	};

	var DeleteSession = function(sesid,cb){
				
				db.remove({sesid:sesid},function(err){
					if(err) {return handleError(err);}
				},cb);
				if(cb) {return handleError(cb);}
	};

	return{
		
			addNewUser : addNewUser,
			UpdateUserType : UpdateUserType,
			UpdateUserPass : UpdateUserPass,	
			DeleteUser : DeleteUser,
			addNewSpeaker : addNewSpeaker
			UpdateSpeakerDetails : UpdateSpeakerDetails,
			UpdateSpeakerTime : UpdateSpeakerTime,
			UpdateSpeakerPhoto : UpdateSpeakerPhoto,
			UpdateSpeakerBio : UpdateSpeakerBio,
			DeleteSpeaker : DeleteSpeaker,
			addNewSession : addNewSession,
			UpdateSessionDetails : UpdateSessionDetails,
			UpdateSessionProgram : UpdateSessionProgram,
			DeleteSession : DeleteSession

	    	};
};

module.exports = Validator;
