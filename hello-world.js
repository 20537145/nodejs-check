// task one
console.log('HELLO WORLD')
// second task
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(201, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello Node!!!!</h1>\n');
  res.end();
});
server.listen(3001,()=>{
    console.log('hello nodejs checkpoint')
})
// third task
const fs = require('fs')
fs.writeFile('./welcome.txt','hello node',(err)=>{
    if (err) {
        console.log('there is an error',err)
    }
})
fs.readFile('./welcome.txt',"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})


// fourth task
const generator = require('generate-password');
const password = generator.generate({
	length: 10,
	numbers: true
});
console.log(password)
// fifth task
const nodemailer = require('nodemailer');
const yourEmail = 'cherifahmed619@gmail.com';
const yourPassword = '';
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: yourEmail,
      pass: yourPassword,
    },
  });
  const mailOptions = {
    from: yourEmail,
    to:'ahmedcherif.19x@gmail.com',
    subject: 'test test',
    text: 'Hello, this is a test email from Node.js!',
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log('Error sending email:', err);
    }
    console.log('Email sent:', info);
  });