const express = require('express');
const emailRouter = express.Router();
const nodeMailer = require('nodemailer');
const config = require('../../../config.json');

emailRouter.route('/')
.post((req,res) => {
	const { GMAIL_USER,GMAIL_PASSWORD } = config;
	let transporter = nodeMailer.createTransport({
		service:'Gmail',
		auth : {
				user:GMAIL_USER,
				pass:GMAIL_PASSWORD,
		}	
	});

	let mailOptions = {
		from : req.body.name,
		to : GMAIL_USER,
		subject : req.body.subject + ' | From : ' + req.body.email,
		text : req.body.message,
	}
	transporter.sendMail(mailOptions,function(error,response){
		if(error){
			res.json({status:'failure'});
		}else{
			res.json({status:'success'});
		}
	})
})

module.exports = emailRouter;
