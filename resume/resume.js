$(document).ready(function () {





    $("body").css('opacity', 0)
      //.slideLeft('slow')
      .animate({
        opacity: 1
      }, {
        queue: false,
        duration: 'slow'
      });
  
  
  
  
    function toggle() {
  
      $(".nav").hover(
        function () {
          $(this).css({
            "background-color": "white",
            "color": "black",
            "cursor": "pointer"
          });
        },
        function () {
          $(this).css({
            "background-color": "#101010",
            "color": "white"
          });
        });
    }
  
    toggle();
  
    if (($(window).width() >= 1025)) {
      $(".resumeImg").remove();
    }
  
    if (($(window).width() <= 1024)) {
      console.log("working");
      $(".resume").remove();
    }
  
  
  })