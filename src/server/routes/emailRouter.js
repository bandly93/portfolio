const express = require('express');
const emailRouter = express.Router();
const nodeMailer = require('nodemailer');
const config = require('../../../config.json');

emailRouter.route('/')
.post((req,res) => {
	console.log(req.body);
	const { GMAIL_USER,GMAIL_PASSWORD } = config;
	let transporter = nodeMailer.createTransport({
		service:'Gmail',
		auth : {
				user:GMAIL_USER,
				pass:GMAIL_PASSWORD,
		}	
	});

	let mailOptions = {
		from : req.body.data.name,
		to : GMAIL_USER,
		subject : req.body.data.email,
		text : req.body.data.message,
	}
	transporter.sendMail(mailOptions,function(error,response){
		if(error){
			console.log(error)
		}else{
			console.log(response);
		}
	})
})

module.exports = emailRouter;
