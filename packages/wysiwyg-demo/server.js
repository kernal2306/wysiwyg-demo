Meteor.publish("datastore", function() {
	return Datastore.find();
});

Datastore.allow({
    insert: function(userid, doc){
        return true;
    },
    update: function(userId, doc, fields, modifier){
        return true;
    }
});

Meteor.methods({
    'storedata': function(id, stuff){
        check(stuff, String);
        var info = stuff;
        console.log(info);
        Datastore.update({_id: id}, {$set: {desc: info}});
    }
});