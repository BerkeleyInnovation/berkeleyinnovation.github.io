$(document).ready(function(){
  console.log('ready');
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

  $(".top_header_content_list_item").hover(function(){
    $(".subheader").fadeIn(200);
    console.log('fade in');
  }, function() {
    $(".subheader").fadeOut(200);
    console.log('fade out');
  });



});
