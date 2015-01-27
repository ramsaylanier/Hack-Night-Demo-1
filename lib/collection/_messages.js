Messages = new Mongo.Collection('messages');

if (Meteor.isServer){
	Meteor.methods({
		'createMessage': function(message, roomId){

			var currentUserEmail = Meteor.users.findOne(this.userId).emails[0].address;
			console.log(currentUserEmail);
			var message = Messages.insert({message: message, roomId: roomId, user:currentUserEmail});

			return message;
		}
	})
}