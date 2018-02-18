var showClan = (clanArray) => {
  console.log('Inside showClan');
  if(clanArray.length > 0) {
  	clanArray.forEach((member) => {
      setHome(member);
  	});
  }
};

var setHome = (member)  => {
	console.log('Inside setHome');
	$('#main').append(
      `<div class="clanMember">
        <h3 class="name">${member.name}</h3>
        <div class="memberInfo">
          <span class="tag">Tag: ${member.tag}</span>
          <span class="role">Role: ${member.role}</span>
          <span class="exp">Level: ${member.expLevel}</span>
          <span class="league"><img src=${member.leagueIconUrl} />League: ${member.leagueName}</span>
          <span class="trophies">Trophies: ${member.trophies}</span>
          <span class="rank">Clan Rank: ${member.clanRank}</span>
        </div>
      </div>`
		);
};

var getClan = () => {
  console.log('Inside getClan');
  $.get('/home', function(data) {
    console.log('Inside get above try');
    try {
    	console.log('Inside try');
    	console.log(data)
    	showClan(data);
    } catch(err) {
    	console.log(err);
    }
  });
};

$(document).ready(function() {
  getClan();
});
