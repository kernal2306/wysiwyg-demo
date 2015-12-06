Meteor.subscribe('datastore');

Template.wysiwyg.helpers({
   description: function(){
       var dataStuff = Datastore.findOne();
       console.log(dataStuff);
       return dataStuff.desc;
   }
   
});

Template.wysiwyg.events({
 'click #save': function(){
   event.preventDefault();
   var dataStuff = Datastore.findOne();
   var id = dataStuff._id;
   console.log(id);
   var stuff = $('#summernote').code();
   console.log(stuff);
   
   Meteor.call('storedata', id, stuff);
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