$(document).ready(function() {

var flaer = document.querySelector(".flaer");

flaer.addEventListener("click", function(event) {
  event.preventDefault();
  $(function() {
    $('#flaer').arcticmodal();
  });
});
});
