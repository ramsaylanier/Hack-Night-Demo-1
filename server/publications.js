Meteor.publish('roomList', function(){
	return Rooms.find({});
})

Meteor.publish('roomSingle', function(roomId){
	return Rooms.find({_id: roomId});
})

Meteor.publish('roomMessages', function(roomId){
	return Messages.find({roomId: roomId});
})