$(document).ready(function() {

var link = document.querySelectorAll("li.profile.auth");

for (i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function(event) {
    event.preventDefault();
    $(function() {

      $('#authorization').arcticmodal();
    });
  });
};

});
