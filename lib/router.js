Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.onBeforeAction('loading');
Router.onBeforeAction(function(){

	if (!Meteor.userId()){
		this.redirect('/');
	}
		this.next();
});

Router.map(function(){

	this.route('roomList', {
		path: '/',
		waitOn: function(){
			return Meteor.subscribe('roomList');
		},
		data: function(){
			return Rooms.find();
		}
	})

	this.route('roomView', {
		name: 'show.room',
		path: '/rooms/:_id',
		waitOn: function(){
			return [
				Meteor.subscribe('roomSingle', this.params._id),
				Meteor.subscribe('roomMessages', this.params._id)
			]
		},
		data: function(){
			return Rooms.findOne(this.params._id)
		},
		action: function(){
			this.render();
		}
	});
});