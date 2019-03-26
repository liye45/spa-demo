
$(function() {
  var t,a=$('input[type="button"]'),e=9;
  a.val("同意 ("+e+" s)"),a.attr("disabled","disabled"),
  t=window.setInterval(function(){a.val("同意 ("+e--+" s)"),
  -1===e&&(window.clearInterval(t),a.val("同意"),
    a.removeAttr("disabled"))},1e3),a.click(
      function()
      {
        alert("就知道你会同意的！")
      }
        
        
      )}
  );
