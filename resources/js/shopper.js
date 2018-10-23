$(document).ready(function() {

var shop = document.querySelectorAll(".shopper-btn");

for (i = 0; i < shop.length; i++) {
  shop[i].addEventListener("click", function(event) {
    event.preventDefault();
    $(function() {
      $('#shopper').arcticmodal();
    });
  });
};

var shop = document.querySelectorAll(".seller-btn");

for (i = 0; i < shop.length; i++) {
  shop[i].addEventListener("click", function(event) {
    event.preventDefault();
    $(function() {
      $('#seller').arcticmodal();
    });
  });
};

});
