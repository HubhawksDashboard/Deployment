const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

const path = require('path');
const express = require('express');
 
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors')
app.use(cors())
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath)); 
 
app.post('/BookReviews',(req,res)=>{
	
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	console.log(data, 'hhhl');
	let mailOptions = {
		from: `${req.body.email}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}<strong>Choose the preferred platform</strong><br>${req.body.platform}<strong>How many reviews would you like to have?</strong><br>${req.body.reviews}<strong>Drop your amazon book link</strong><br>${req.body.link}  `,
	  };
 
	
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/editing',async (req,res)=>{
	
	// const response =  await fetch("http://localhost:5000/users", {
	// 		method: "GET",
	// 		headers: {
	// 			"Content-type": "application/json",
	// 		},
	// 		body: JSON.stringify(data),
	// 	}).then((res) => res.json()).then(async (res) => {
	// 		const resData = await res;
	// 		console.log(resData);
	// 		if (resData.status === "success") {
	// 			alert("Message Sent");
	// 		} else if (resData.status === "fail") {
	// 			alert("Message failed to send");
	// 		}
	// 	})
	// 	console.log(JSON.stringify(data));
		
	  
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}</strong><br>${req.body.Timeline}<strong>What is your approximate advertising budget?</strong><br>`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/coverdesign',async(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'simrantandon2801@gmail.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What is the “Title of the Story”?</strong><br> ${req.body.title}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}<strong> What is the summary of the Story?</strong><br>${req.body.Summary}<strong> What is the expected timeline?</strong><br>${req.body.EditingType}<strong> Do you want your own dashboard?</strong><br>${req.body.EditingType}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/translation',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'simrantandon2801@gmail.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}<strong>What language is  your content in?</strong><br>${req.body.content}<strong>What is the word count of your book?</strong><br>${req.body.count}<strong>What kind of translation do you want?</strong><br>${req.body.translation} `,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/ghostwriting',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}<strong>What is the author’s background?</strong><br>${req.body.authorbackground}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/amazonAds',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}<strong>What are you looking for ?</strong><br>${req.body.look}<strong>What is your approximate advertising budget?</strong><br>${req.body.budget}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/booktrailer',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}<strong>Describe your book’s storyline?</strong><br>${req.body.storyline}<strong>What kind of trailer do you want?</strong><br>${req.body.trailor}<strong>What is the expected timeline?</strong><br>${req.body.timeline}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/bookstore',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard(BookStore)`,
		html: `<strong>Which is your preferred book store?</strong><br>${req.body.bookStore}<strong>Who is the publisher of your book?</strong><br>${req.body.publisher}<strong>How many stores would you like to get your book placed at?</strong><br>${req.body.bookplaced}<strong> What kind of promos are you looking for?</strong><br>${req.body.promos}<strong> Get a Quote</strong><br>${req.body.Quote}<strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
// listen to the port
app.listen(5000, () => {
    console.log('server start on port 3030');
  });

module.exports = router;