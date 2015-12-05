Meteor.subscribe("datastore", function() {
	return Datastore.find();
});

Template.wysiwyg.events({
 'click #save': function(){
   event.preventDefault();
   var stuff = $('#summernote').code();
   console.log(stuff);
}
});

Template.wysiwyg.onRendered(function(){
   $('#summernote').summernote({
     height: 300,                 
     minHeight: null,            
     maxHeight: null,             
     focus: true
   })
});