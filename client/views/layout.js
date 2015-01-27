Template.layout.events({
	'submit .new-room-form': function(e){
		e.preventDefault();

		var roomName = $(e.target).find('[name=room-name-field]').val();

		if (roomName){
			Meteor.call('createRoom', roomName, function(error){
				if (error)
					alert(error.reason);
			});
		}
	}
})

Template.roomList.helpers({
	'rooms': function(){
		return Rooms.find();
	}
})

Template.roomListSingle.helpers({
	'name': function(){
		return this.roomName;
	}
})

Template.messageForm.events({
	'submit .message-form': function(e, template){
		e.preventDefault();
		var message = $(e.target).find('[name=new-message-field]').val();

		console.log(template);
		var roomId = template.data._id;

		Meteor.call('createMessage', message, roomId, function(error){
			if (error)
				alert(error.reason);
		});
	}
})


Template.showRoom.helpers({
	'messages': function(){
		return Messages.find();
	},
	'isCurrentUser': function(){
		var currentUserEmail = Meteor.user().emails[0].address;
		if (currentUserEmail == this.user){
			return true
		}
	}
})