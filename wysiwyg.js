Testing = new Meteor.Collection('test');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  testingDemo = Meteor.subscribe('test');

  Template.wysiwyg.onRendered(function(){
    $(document).ready(function() {
      $('#editor').summernote({
        height: 300,

        minHeight: null,
        maxHeight: null,

        focus: true,
      });
    });
  });

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
    //render: function(){
      //var templateText = $('summernote').code();
      //console.log(templateText);
    //},
    collectionText: function(){
      var description = Testing.findOne({page: 1});
      console.log(description);
      return description.desc;
    }

    
  });
  

  
  Template.wysiwyg.events({
    'click #saveText': function(){
      var textDemo = $('#editor').code();

      console.log(textDemo);
      alert(textDemo);
      var id = Testing.findOne({page: 1})._id;

      Testing.update({_id: id},{
        $set: {
          desc: textDemo
        }
      })


    }
  });

  Template.body.events({

  });
}

if (Meteor.isServer) {
  Meteor.publish('test', function(){
    return Testing.find();
  })

  Meteor.startup(function () {
    // code to run on server at startup
    Testing.allow({
      update: function(userId, doc){
        return true;

    }
  });
});
}