$(document).ready(function() {
  $("#hover").hover(
    function() {
      $("#hidden").show();
    },
    function() {
      $("#hidden").hide();
    });
});
