Meteor.publish("datastore", function() {
	return Datastore.find();
});