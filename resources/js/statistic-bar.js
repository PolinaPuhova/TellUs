$(document).ready(function() {
//Переменные для проверки
var month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
var year = ['2017', '2017', '2017', '2017', '2017', '2017', '2017'];

  var tooltips_array = [];
    var label_array = [];

  var quantity_month_grades = 500;
  var quantity_views = 800;
  var good_month_grades = 160;
  var bad_month_grades = 140;

  /*Функция для вставки общего количества просмотров*/
  function quantity_views_sql(quantity_views) {
    $(".quantity-views span").html(quantity_views);
  };

  quantity_views_sql(50);


  function tooltip_add(data_array) {

    for (var i = 0; i<data_array.length; i++) {
      tooltips_array.push(data_array[i] + " пользователей <br><span>просмотрело ваш профиль</span> ");
    }
    return tooltips_array;
  }

  function label_add(data_array) {
    for (var i = 0; i<data_array.length; i++) {
      label_array.push(month[i]);
    }
    return label_array;
  }

  var data_array = [450, 300, 48, 156, 376, 50, 220]; //Данные количества для графика



  var bar = new RGraph.Bar({
    id: 'bar',
    data: data_array,
    options: {
      hmargin: 1,
      tooltipsEvent: 'mousemove',
      labels: label_add(data_array),
      tooltips: tooltip_add(data_array),
      colors: ['Gradient(#66eeba:#00c9ff)'],
      yaxis: false,
      backgroundGridVlines: false,
      backgroundGridBorder: false,
      eventsClick: myClick
    }
  });

  //Расчет размеров холста
    var bar_ctx = $("#bar");
    var bar_width = $("#statistic-bar").width();
    bar_ctx.attr("width", bar_width);

      //Функция для перерисовки диаграмм при нажатии на статистику
  function myClick (e, shape)
    {
/*
            quantity_views -- количество просмотров страницы за этот месяц,
            quantity_month_grades -- количество отзывов за этот месяц,
             good_month_grades -- количество хороших отзывов за этот месяц,
              bad_month_grades -- количество плохих отзывов за этот месяц
*/
            diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades);

    }
if($(window).width()<640)
{
  adaptive(data_array, label_array);
}
else {
    bar.draw();
}


  //Отрисовка статистики
  function bar_draw(data_array, label_array) {
    var tooltips_array = [];
    var label_array = [];
    bar.original_data = data_array;


    RGraph.redraw();
  }


  //Изменение размеров холста canvas при ресайзе
  setTimeout(function() {
    $(window).resize(function() {
      if($(window).width()>640)
      {
      $("#statistic-bar").empty();
        console.log("empty");
        $("#statistic-bar").html('<canvas id="bar" width="724" height="350">[No canvas support]</canvas>');
        var bar_ctx = $("#bar");
        var bar_width = $("#statistic-bar").width();
        bar_ctx.attr("width", bar_width);
          RGraph.redraw();
      }
      else {
      adaptive(data_array, label_array);
      }
    });
  }, 1000);

/*Для адаптива*/
  function adaptive(data_array, label_array) {
    $("#statistic-bar").empty();
    console.log($("#statistic-bar").html());
    for(var b = 0; b<data_array.length;b++) {
      $("#statistic-bar").append("<p>"+label_array[b]+"-"+data_array[b]+"пользователей</p>");
    }
  }


  $("#statistic-bar svg rect").click(diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades))
  /*Функция для отрисовки диаграмм с количеством оценок*/

  diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades);

  function diagramms(quantity_views, quantity_month_grades, good_month_grades, bad_month_grades) {
    var rating_procent = quantity_month_grades * 100 / quantity_views; //процент общего количество оценок
    var good_reviews_procent = good_month_grades * 100 / quantity_month_grades; //количество положительных
    var bad_reviews_procent = bad_month_grades * 100 / quantity_month_grades; //количество отрицательных
    var rating_text = quantity_month_grades;

    //Удаляем предыдущие диаграммы
    $("#rating-diagramm svg").remove();
    $("#good-review-diagramm svg").remove();
    $("#bad-review-diagramm svg").remove();

    //Вставляем нужные нам данные
    $(".all-grades").html(quantity_month_grades);
    $(".good-grades").html(good_month_grades);
    $(".bad-grades").html(bad_month_grades);

    //Отрисовываем диаграммы
    var rat_dia = Circles.create({
      id: "rating-diagramm",
      radius: 81,
      value: rating_procent,
      maxValue: 100,
      text: function() {
        return "<p>" + quantity_month_grades + "</p><p>оценок рейтинга</p>";
      },
      colors: ['#ddd', '#15d1f1'],
      wrpClass: 'circles-wrp',
      textClass: 'circles-text',
      valueStrokeClass: 'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper: true,
      styleText: false
    });

    var good_dia = Circles.create({
      id: "good-review-diagramm",
      radius: 81,
      value: good_reviews_procent,
      maxValue: 100,
      text: function() {
        return "<p>" + good_month_grades + "</p><p>положительные</p>";
      },
      colors: ['#ddd', '#15d1f1'],
      wrpClass: 'circles-wrp',
      textClass: 'circles-text',
      valueStrokeClass: 'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper: true,
      styleText: false
    });

    var bad_dia = Circles.create({
      id: "bad-review-diagramm",
      radius: 81,
      value: good_reviews_procent,
      maxValue: 100,
      text: function() {
        return "<p>" + bad_month_grades + "</p><p>отрицательные</p>";
      },
      colors: ['#ddd', '#15d1f1'],
      wrpClass: 'circles-wrp',
      textClass: 'circles-text',
      valueStrokeClass: 'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper: true,
      styleText: false
    });
  }

  $('input[name=date-from-to]').nativeMultiple({
      stylesheet: "slider",
      onCreate: function() {

      },
      onChange: function(first_value, second_value) {
        label_array.length = 0;
        data_array.length = 0;
        tooltips_array.length = 0;
        var from = first_value;
        var to = second_value;
        //Обработка переданного номера месяца, надо отправить на сервер и вернуть значения
        if (from > 12) {
          from = from - 12;
        }
        if (to > 12) {
          to = to - 12;
        }
        $("#from-date").html(month[from - 1]);
        $("#to-date").html(month[to - 1]);
        for (var u = from; u < to; u++) {
          label_array.push(month[u - 1]);
          data_array.push((u - 1) * 10);

        }
        tooltip_add(data_array);
        //отрисовка в зависимости от разрешения
        if($(window).width()<640)
        {
          adaptive(data_array, label_array);
        }
        else {
          bar_draw(data_array, label_array);
        }
      },
     onSlide: function(first_value, second_value) {

      }
  });

});
