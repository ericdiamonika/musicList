Template.home.helpers({
	users: function(){
	if(Session.get("musicsId")){
	   var curUsers = Musics.findOne({_id: Session.get("musicsId")});
		if(curUsers){
			return {_id:curUsers._id, name:curUsers.name, shares: curUsers.shares, positio:0}
		}
	   }else{
		   return null
	   }
},
});
Template.musics.helpers({

	musics: function(){
		return Musics.find({});
	}
});
Template.form.events({
	'click .btn': function (event, template){
		event.preventDefault();
		var name = $('#name').val();
		var email = $('#name').val();
		var artiste = $('#artiste').val();
		var music = $('#music').val();
		
		
		Music = Musics.insert(
		{name: name, email: email, artiste: artiste, music: music, shares : 0, createdAt : Date.now()}, 
		function(error, result){});
		if (result){
			Session.setPersistent("musicsID", result);
			console.log(result);
		}
	}
});