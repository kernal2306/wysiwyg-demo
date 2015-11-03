if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  
  Template.wysiwyg.helpers({
    render: function(){
      var templateText = $('summernote').code();
      console.log(templateText);
    }
    
  });
  
  Template.wysiwyg.onRendered(function(){
    $(document).ready(function() {
      $('#summernote').summernote();
    });
  });
  
  Template.wysiwyg.events({
    'clicked': function(){
      console.log("you have selected text to edit");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
