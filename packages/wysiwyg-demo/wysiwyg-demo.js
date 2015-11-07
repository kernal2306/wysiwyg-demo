Template.wysiwyg.helpers({
 render: function(){
   var templateText = $('#summernote').code();
   console.log(templateText);
 }
});

Template.wysiwyg.onRendered(function(){
 $(document).ready(function() {
   $('#summernote').summernote({
     height: 300,                 

     minHeight: null,            
     maxHeight: null,             

     focus: true,                
     });
 });
});