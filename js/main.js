$(document).ready(function(){
  /* Code for potential scrolling process box */
  // var height = $(window).height();
  // var scrollTop = $(window).scrollTop();
  // $('.process_box').scroll(function() {
  //   var pos = $(this).scrollTop();
  //   if (pos > 500 && pos < 800) {
  //       $('.process_box').css('color', "#000000");
  //       console.log('passed');
  //   } else if (pos >= 800) {
  //       $('.process_box').css( "background-color", "#ffffff" );
  //       console.log('passed more');
  //   }});


  // Start with no visible subheader
  $(".subheader").fadeOut(0);
  // var topHovered = false;
  // var subHovered = false;

  // Hovering makes subheader appear
  $(".active_page").hover(function(){
    $(".subheader").fadeIn(300);

    $(".subheader").hover(function(){
      $(".subheader").fadeIn(0);
    }, function() {
      $(".subheader").fadeOut(0);
    });

  }, function() {
    $(".subheader").fadeOut(0);
  });




});
