$(document).ready(function(){
  var height = $(window).height();
  var scrollTop = $(window).scrollTop();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
        $('.process_box').attr('background-color', '#FFFFFF');
    }
  });

});
