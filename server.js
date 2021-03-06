var express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 3000; // heroku will pass the port value to this variable

//open weather app dung http, khong dung https
app.use(function (req, res, next){
	if (req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public'));
app.listen(PORT, function() {
	console.log('Express server is up on port ' + PORT);
});

//const gion var, ngoai tru const khong the thay doi gia tri
