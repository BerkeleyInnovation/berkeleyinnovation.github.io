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
  $("#subheader_about").fadeOut(0);
  $("#subheader_process").fadeOut(0);
  $("#subheader_partner").fadeOut(0);
  // var topHovered = false;
  // var subHovered = false;
  cheet('p o r t a l', function () {
    window.location.href = "http://berkeleyinnovation-portal.herokuapp.com/"
  });
  // Hovering makes subheader appear
  $("#about").hover(function(){         // ABOUT
    $("#subheader_about").fadeIn(300);
    $("#subheader_about").hover(function(){
      $("#about").addClass("hovered_a");
      $("#about").attr("style", "color: #ffc299; border-bottom: 8px solid #ffc299");
      $("#subheader_about").fadeIn(0);
    }, function() {
      $("#about").removeClass("hovered_a");
      $("#about").attr("style", "");
      $("#subheader_about").fadeOut(0);
    });
  }, function() {
    $("#subheader_about").fadeOut(0);
  });

  $("#process").hover(function(){         // PROCESS
    $("#subheader_process").fadeIn(300);
    $("#subheader_process").hover(function(){
      $("#process").addClass("hovered_a");
      $("#process").attr("style", "color: #ffc299; border-bottom: 8px solid #ffc299");
      $("#subheader_process").fadeIn(0);
    }, function() {
      $("#process").removeClass("hovered_a");
      $("#process").attr("style", "");
      $("#subheader_process").fadeOut(0);
    });
  }, function() {
    $("#subheader_process").fadeOut(0);
  });

  $("#partner").hover(function(){         // PARTNER
      $("#subheader_partner").fadeIn(300);
      $("#subheader_partner").hover(function(){
        $("#partner").addClass("hovered_a");
        $("#partner").attr("style", "color: #ffc299; border-bottom: 8px solid #ffc299");
        $("#subheader_partner").fadeIn(0);
      }, function() {
        $("#partner").removeClass("hovered_a");
        $("#partner").attr("style", "");
        $("#subheader_partner").fadeOut(0);
      });
    }, function() {
      $("#subheader_partner").fadeOut(0);
    });

});
