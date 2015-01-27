Rooms = new Mongo.Collection('rooms');

if (Meteor.isServer){
	Meteor.methods({
		'createRoom': function(roomName, userId){
			console.log(roomName);
			if (!roomName){
				throw new Meteor.Error(422, 'No room name.');
			}
			
			var existingRoom = Rooms.findOne({roomName: roomName});

			if (existingRoom)
				throw new Meteor.Error(422, 'Room already exists');

			var room = Rooms.insert({roomName: roomName});

			return room;
		}
	})
}
