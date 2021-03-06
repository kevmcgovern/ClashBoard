const request = require('request');

const keys = require('../creds.js');
const db = require('./helpers/db.js');

var downloadClanData = () => {
	var endpoint = 'https://api.clashofclans.com/v1/clans/%23CJ8V990C/members';
	var headers = {
		'Authorization': 'Bearer ' + keys.sutter
	};
	var options = {
		url: endpoint,
		headers: headers
	};
  try {
  	request(options, (clashErr, clashRes, clashBody) => {
  		if(!clashErr) {
  			var info = JSON.parse(clashBody);
  			// db.saveClan(info.items);
  		} else {
  			console.log('Clash Error: ', clashErr);
  		}
  	});
  } catch(err) {
	  console.log('Request Error: ', err);
  }
};

// getClanData();
