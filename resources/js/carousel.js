$(document).ready(function() {
  $('.new-stock_carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.tegs').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true
  });


  $('.popular-stock_list').imagesLoaded(function() {
    $('.popular-stock_list').masonry({
      // options
      itemSelector: '.box',
      columnWidth: '.box',
      gutter: 10,
      isFitWidth: true
    });
  });

});
