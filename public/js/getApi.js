const axios = require('axios');

async function getApi(city) {
	try {
		const apiCall = await axios.get(
			'http://api.openweathermap.org/data/2.5/weather?q=' +
				city +
				'&appid=026ab5c22636cd9029660b0b20c6a72e'
		);
		return apiCall.data;
	} catch (err) {
		console.log(err);
	}
}

module.exports = getApi;