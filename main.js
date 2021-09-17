const express = require('express');

const app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.listen(3000, (req, res) => {
	console.log('server start');
});

// Routes
var Router = require('./routes/route');

// 메인페이지
app.use('/', Router);
app.use('/weather', Router);