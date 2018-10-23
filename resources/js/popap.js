var partner = document.querySelectorAll("a.partner");


popaps();



function popaps() {
  $("#partner input[type='tel']").mask("+375(99) 999-99-99",{placeholder:"+375(__) ___-__-__"});

  for (n = 0; n < 2; n++) {
    partner[n].addEventListener("click", function(event) {
      event.preventDefault();
      $(function() {
        $('#partner').arcticmodal();
      });
    });
  };
};
