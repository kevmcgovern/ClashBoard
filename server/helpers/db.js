const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clanSchema = new Schema({
  tag: {type: String, unique: true},
  name: {type: String, unique: true},
  role: {type: String, unique: false},
  expLevel: {type: Number, unique: false},
  leagueId: {type: Number, unique: false},
  leagueName: {type: String, unique: false},
  leagueIconUrl: {type: String, unique: false},
  trophies: {type: Number, unique: false},
  versusTrophies: {type: Number, unique: false},
  clanRank: {type: Number, unique: false},
  previousClanRank: {type: Number, unique: false},
  donations: {type: Number, unique: false},
  donationsReceived: {type: Number, unique: false}
});

const Clan = mongoose.model("Clan", clanSchema);

mongoose.connect("mongodb://localhost/clan")

var getClan = (callback) => {
	Clan.find({}, function(err, doc) {
		if (err) {
			console.log(err);
		} else if (doc === null) {
			console.log('Empty doc object');
		} else {
			var output = {};
			// for var
			// console.log(doc);
      callback.send(doc);
		}
	});
};

var saveClan = (items) => {
	console.log('Inside saveClan')
	items.forEach(function(item) {
    var clanMember = new Clan({
    	tag: item.tag,
    	name: item.name,
    	role: item.role,
    	expLevel: item.expLevel,
    	leagueId: item.league.id,
    	leagueName: item.league.name,
    	leagueIconUrl: item.league.iconUrls.small,
    	trophies: item.trophies,
    	versusTrophies: item.versusTrophies,
    	clanRank: item.clanRank,
    	previousClanRank: item.previousClanRank,
    	donations: item.donations,
    	donationsReceived: item.donationsReceived
    });
    clanMember.save().then(() => console.log(`${clanMember.name} has been saved to the dataBase`));
	});
};


module.exports = { saveClan, getClan };
