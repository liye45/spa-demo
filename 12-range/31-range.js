
$(function() {
  var $range = $('#range'),   
      $age   = $('#age');     

  $age.html($range.val());
  
  $range.change(function() {
      $age.html($range.val());
    });
});
