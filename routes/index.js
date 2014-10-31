var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'JDTalks' });
});

var contact = function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var content = req.body.content;

	console.log(name);
	console.log(email);
	console.log(content);

	var smtpTransport = nodemailer.createTransport('SMTP', {
		service: 'Gmail',
		auth: {
			user: 'contact@jdl.ro',
			pass: process.env.CONTACT_DETAILS
		}
	});

	smtpTransport.sendMail({
		from: email,
		to: 'contact@jdl.ro',
		subject: 'JDL enquiry from ' + name + ' [' + email + '] [sent via form]',
		text: content
	});

	res.render('contact');
};

router.post('/contact', contact);

module.exports = router;
