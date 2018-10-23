$(document).ready(function() {
  var edit = $(".edit-address")
  for (var p = 0; p < edit.length; p++) {
    edit[p].addEventListener("click", function(event) {
      event.preventDefault();
      $(function() {
        $('#add-address h3').html("Редактировать адрес");
        $('#add-address').arcticmodal();
      });
    });
  };




  var address = document.querySelector(".add-address");
  $(".time-from").mask("99:99", {
    placeholder: "09:00"
  });
  $(".time-to").mask("99:99", {
    placeholder: "18:00"
  });
  $("#add-address input[type='tel']").mask("+375(99) 999-99-99", {
    placeholder: "+375(__) ___-__-__"
  });

  address.addEventListener("click", function(event) {
    event.preventDefault();
    $(function() {
      $('#add-address h3').html("Добавить адрес");
      $('#add-address').arcticmodal();
    });
  });

  var add_address_phone = document.querySelector(".add-phone .plus");
  add_address_phone.addEventListener("click", function(event) {
    event.preventDefault();
    $(function() {

    });
  });




  $("#equally-week").change(
    function() {
      if (this.checked) {
        $(".days").slideUp();
        $(".days").addClass("eq");
        $(".days").slideDown();
        $(".title .week-days").css("color", "#50E6C9");
        $(".title .equally").css("color", "#000");
        if ($(window).width() > '758') {
        $("#friday").parent().insertAfter($("#monday").parent());
        $("#saturday").parent().insertAfter($("#tuesday").parent());
        $("#sunday").parent().insertAfter($("#wednesday").parent());
      }
        //Блокируем общий инпут
        var ch = $(".day-check");
        for (var y = 0; y < ch.lenght; y++) {
          if (ch[y].checked) {
            console.log(1);
          } else {
            $(".days input[type=text]").removeAttr("disabled");
          }
        }

        $(".from-to-for-all input").attr("disabled");

      } else {
        $(".days").slideUp();
        $(".days").removeClass("eq");
        $(".days").slideDown();
        $(".title .equally").css("color", "#50E6C9");
        $(".title .week-days").css("color", "#000");
         if ($(window).width() > '758') {
        $("#friday").parent().insertAfter($("#thursday").parent());
        $("#saturday").parent().insertAfter($("#friday").parent());
        $("#sunday").parent().insertAfter($("#saturday").parent());
      }
        //Блокируем все инпуты
        $(".days input[type=text]").attr("disabled");
        $(".from-to-for-all input").removeAttr("disabled");
      }
    });

  $(".day-check").change(
    function() {
      if (this.checked) {
        var temp = $(this).parent().find(".from-to");
        $(temp).find("input").removeAttr("disabled");
      } else {
        var temp = $(this).parent().find(".from-to");
        $(temp).find("input").attr("disabled", "true");
        $(temp).find("input").attr("value", " ");
      }
    });


  $(function() {
    $(".company-present-procent").slideUp();
    $('#company-bonus').dropkick({
      startSpeed: 400, // the speed of fade in effect. A low value (lowest is probably 100) to stop the effect.
      theme: 'black',
      change: function(value, label) { // callback event

        if (label == "Скидка") {
          $(".company-bonus-procent").slideDown();
          $(".company-present-procent").slideUp();
        } else {
          $(".company-bonus-procent").slideUp();
          $(".company-bonus-procent").val(" ");
          $(".company-present-procent").slideDown();
        }


      }
    });

    $('#company-category').dropkick({
      startSpeed: 400, // the speed of fade in effect. A low value (lowest is probably 100) to stop the effect.
      theme: 'black',
    });

    delete_address();

    function delete_address() {

      var del_addr = $(".delete-address")
      var addr_list = $(".addresses")
      for (var g = 0; g < del_addr.length; g++) {
        del_addr[g].addEventListener("click", function(event) {
          event.preventDefault();
          $(function() {
            $(event.target).parent().parent().slideUp();

            setTimeout(function() {
              $(event.target).parent().parent().remove();
            }, 1000);
          });
        });
      };

    };
  });


  delete_tag();
  //Удаление тега по щелчку на крестик
  function delete_tag() {
    var del_tag = $(".delete-tag")
    var tag = $(".input-field .tag")
    for (var k = 0; k < del_tag.length; k++) {
      del_tag[k].addEventListener("click", function(event) {
        event.preventDefault();
        $(function() {
          $(event.target).parent().remove();
        });
      });
    };
  };

  var add = $("#add-tag");
  add[0].addEventListener("click", function(event) {
    event.preventDefault();
    var txt = $("#company-tegs").val();
    if( txt != "") {
      var text = txt.toLowerCase();
      $(".tegs-control").append(function(i) {
        return "<div><div class='tag'><p>#" + text + "</p></div><div class='delete-tag'></div></div>";

      });
      delete_tag();
    };
  });


});
