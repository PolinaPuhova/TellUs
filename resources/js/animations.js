$(document).ready(function() {

  jQuery('.actor').addClass("hid").viewportChecker({
  classToAdd: 'vis animated jackInTheBox',
  offset: 200
  });

  jQuery('.text p').addClass("hid").viewportChecker({
  classToAdd: 'vis animated jackInTheBox',
  offset: 200
  });
  jQuery('.text ul').addClass("hid").viewportChecker({
  classToAdd: 'vis animated jackInTheBox',
  offset: 200
  });

});
