const axios = require('axios');

async function getApi(city) {
	try {
		const apiCall = await axios.get(
			'http://api.openweathermap.org/data/2.5/weather?q=' +
				city +
				'API KEY'
		);
		return apiCall.data;
	} catch (err) {
		console.log(err);
	}
}

module.exports = getApi;
