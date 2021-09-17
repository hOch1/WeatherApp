const express = require('express');
const router = express.Router();

var KTE = require('../public/js/KorToEng');
var getApi = require('../public/js/getApi');

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/weather', async (req, res) => {
	var city = KTE(req.query.address);
	if(city == "err"){
		res.render('err');
	}else{
		var data = await getApi(city);
		res.render('weather', { city: data, name : req.query.address });
	}
});

module.exports = router;