const request = require('request');

const keys = require('../creds.js');

var getClanData = () => {
	var endpoint = 'https://api.clashofclans.com/v1/clans/%23CJ8V990C/members';
	var headers = {
		'Authorization': 'Bearer ' + keys.sutter
	};
	var options = {
		url: endpoint,
		headers: headers
	};
	console.log(options);
  try {
  	request(options, (clashErr, clashRes, clashBody) => {
  		if(!clashErr) {
  			var info = JSON.parse(clashBody);
  			console.log(info);
  		} else {
  			console.log('Clash Error: ', clashErr);
  		}
  	});
  } catch(err) {
	  console.log('Request Error: ', err);
  }
};

getClanData();
