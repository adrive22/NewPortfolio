$(document).ready(function () {




    //when hovering over image//
      $('.gallery-item').hover(function () {
        $(this).find('.img-title').fadeIn(100);
      }, function () {
        $(this).find('.img-title').fadeOut(100);
      });
    
    
      //if a project image is clicked//
      $(".projImg").click(function () {
        $(".mainContainer").data("clicked", "true");
        console.log($(".mainContainer").data("clicked"));
        $('.mainContainer').removeAttr('style'); //
        $(".mainContainer").animate({
          opacity: 'hide', // animate slideUp
          right: '200px', // slide left
        }, 'slow', 'linear', function () {
    
    
    
        });
      });
    
    
    //if showMaps image or text is clicked//
      $(".S").on("click", function () {
        console.log($(".mainContainer").data("clicked"));
        if ($(".mainContainer").data("clicked") === "true") {
          $(".mapsLinks").show();
          $(".albumLinks").hide();
          $(".giphyLinks").hide();
          $(".trainLinks").hide();
          $(".showMapsContainer").css('opacity', 0)
    
            .animate({
              opacity: 1
            }, {
              queue: false,
              duration: 'slow'
            });
          if ($(".albumContainer").css("opacity") === "1") {
            // .slideLeft('slow')
            $(".albumContainer")
              .animate({
                opacity: 0
              }, {
                queue: false,
                duration: 'slow'
              })
          };
          if ($(".giphyContainer").css("opacity") === "1") {
            // .slideLeft('slow')
            $(".giphyContainer")
              .animate({
                opacity: 0
              }, {
                queue: false,
                duration: 'slow'
              })
          };
          if ($(".trainContainer").css("opacity") === "1") {
            // .slideLeft('slow')
            $(".trainContainer")
              .animate({
                opacity: 0
              }, {
                queue: false,
                duration: 'slow'
              })
          };
        } else {
          console.log("wrong one")
    
          $('.mainContainer').removeAttr('style'); //
          $(".mainContainer").animate({
            opacity: 'hide', // animate slideUp
            right: '200px', // slide left
          }, 'slow', 'linear', function () {
            $(".mainContainer").data("clicked", "true");
            $(".showMapsContainer").css('opacity', 0)
              // .slideLeft('slow')
              .animate({
                opacity: 1
              }, {
                queue: false,
                duration: 'slow'
              });
          })
        }
      })
    
    
    //if album image or text is clicked//
      $(".A").on("click", function () {
        console.log($(".mainContainer").data("clicked"));
        if ($(".mainContainer").data("clicked") === "true") {
          $(".mapsLinks").hide();
          $(".albumLinks").show();
          $(".giphyLinks").hide();
          $(".trainLinks").hide();
          $(".albumContainer").css('opacity', 0)
            //.slideLeft('slow')
            .animate({
              opacity: 1
            }, {
              queue: false,
              duration: 'slow'
            });
    
          if ($(".showMapsContainer").css("opacity") === "1") {
            // .slideLeft('slow')
            $(".showMapsContainer")
              .animate({
                opacity: 0
              }, {
                queue: false,
                duration: 'slow'
              })
          };
          if ($(".giphyContainer").css("opacity") === "1") {
            // .slideLeft('slow')
            $(".giphyContainer")
              .animate({
                opacity: 0
              }, {
                queue: false,
                duration: 'slow'
              })
          };
          if ($(".trainContainer").css("opacity") === "1") {
            // .slideLeft('slow')
            $(".trainContainer")
              .animate({
                opacity: 0
              }, {
                queue: false,
                duration: 'slow'
              })
          };
        } else {
          console.log("wrong one")
    
          $('.mainContainer').removeAttr('style'); //
          $(".mainContainer").animate({
            opacity: 'hide', // animate slideUp
            right: '200px', // slide left
          }, 'slow', 'linear', function () {
            $(".mainContainer").data("clicked", "true");
            $(".albumContainer").css('opacity', 0)
              // .slideLeft('slow')
              .animate({
                opacity: 1
              }, {
                queue: false,
                duration: 'slow'
              });
          })
        }
      })
    
      
      //if eye candy image or text is clicked//
      $(".G").on("click", function () {
        console.log($(".mainContainer").data("clicked"));
        if ($(".mainContainer").data("clicked") === "true") {
          $(".mapsLinks").hide();
          $(".albumLinks").hide();
          $(".giphyLinks").show();
          $(".trainLinks").hide();
          $(".giphyContainer").css('opacity', 0)
            //.slideLeft('slow')
            .animate({
              opacity: 1
            }, {
              queue: false,
              duration: 'slow'
            });
          if ($(".showMapsContainer").css("opacity") === "1") {
            // .slideLeft('slow')
            $(".showMapsContainer")
              .animate({
                opacity: 0
              }, {
                queue: false,
                duration: 'slow'
              })
          };
          if ($(".albumContainer").css("opacity") === "1") {
            // .slideLeft('slow')
            $(".albumContainer")
              .animate({
                opacity: 0
              }, {
                queue: false,
                duration: 'slow'
              })
          };
          if ($(".trainContainer").css("opacity") === "1") {
            // .slideLeft('slow')
            $(".trainContainer")
              .animate({
                opacity: 0
              }, {
                queue: false,
                duration: 'slow'
              })
          };
        } else {
          console.log("wrong one")
    
          $('.mainContainer').removeAttr('style'); //
          $(".mainContainer").animate({
            opacity: 'hide', // animate slideUp
            right: '200px', // slide left
          }, 'slow', 'linear', function () {
            $(".mainContainer").data("clicked", "true");
            $(".giphyContainer").css('opacity', 0)
              // .slideLeft('slow')
              .animate({
                opacity: 1
              }, {
                queue: false,
                duration: 'slow'
              });
          })
        }
      })
    
    
    
    //if train container image or text is clicked//
    
      $(".T").on("click", function () {
        console.log($(".mainContainer").data("clicked"));
        if ($(".mainContainer").data("clicked") === "true") {
          $(".mapsLinks").hide();
          $(".albumLinks").hide();
          $(".giphyLinks").hide();
          $(".trainLinks").show();
          $(".trainContainer").css('opacity', 0)
            //.slideLeft('slow')
            .animate({
              opacity: 1
            }, {
              queue: false,
              duration: 'slow'
            });
          if ($(".showMapsContainer").css("opacity") === "1") {
            // .slideLeft('slow')
            $(".showMapsContainer")
              .animate({
                opacity: 0
              }, {
                queue: false,
                duration: 'slow'
              })
          };
          if ($(".albumContainer").css("opacity") === "1") {
            // .slideLeft('slow')
            $(".albumContainer")
              .animate({
                opacity: 0
              }, {
                queue: false,
                duration: 'slow'
              })
          };
          if ($(".giphyContainer").css("opacity") === "1") {
            // .slideLeft('slow')
            $(".giphyContainer")
              .animate({
                opacity: 0
              }, {
                queue: false,
                duration: 'slow'
              })
          };
        } else {
          console.log("wrong one")
    
          $('.mainContainer').removeAttr('style'); //
          $(".mainContainer").animate({
            opacity: 'hide', // animate slideUp
            right: '200px', // slide left
          }, 'slow', 'linear', function () {
            $(".mainContainer").data("clicked", "true");
            $(".trainContainer").css('opacity', 0)
              // .slideLeft('slow')
              .animate({
                opacity: 1
              }, {
                queue: false,
                duration: 'slow'
              });
          })
        }
      })
    
    
    
      //if project list text is clicked//
    
      $(".sideTextH").on("click", function () {
        $(".mainContainer").data("clicked", "false");
        // $('.mainContainer').removeAttr('style'); //
        $(".mainContainer").animate({
          opacity: 'show',
          left: '1px',
        }, 'slow', 'linear', function () {});
    
        if ($(".showMapsContainer").css("opacity") === "1") {
          // .slideLeft('slow')
          $(".showMapsContainer")
            .animate({
              opacity: 0
            }, {
              queue: false,
              duration: 'fast'
            })
        }
    
        if ($(".albumContainer").css("opacity") === "1") {
          // .slideLeft('slow')
          $(".albumContainer")
            .animate({
              opacity: 0
            }, {
              queue: false,
              duration: 'slow'
            })
        };
    
        if ($(".giphyContainer").css("opacity") === "1") {
          // .slideLeft('slow')
          $(".giphyContainer")
            .animate({
              opacity: 0
            }, {
              queue: false,
              duration: 'slow'
            })
        };
    
        if ($(".trainContainer").css("opacity") === "1") {
          // .slideLeft('slow')
          $(".trainContainer")
            .animate({
              opacity: 0
            }, {
              queue: false,
              duration: 'slow'
            })
        };
    
      })
    
    
    
      //toggle css for text in menus//
    
      function toggle() {
        $(".sideTextH").hover(
          function () {
            $(this).css({
              "background-color": "#101010",
              "color": "white"
            });
          },
          function () {
            $(this).css({
              "background-color": "transparent",
              "color": "black",
              "cursor": "pointer"
            });
          });
        $(".sideText").hover(
          function () {
            $(this).css({
              "background-color": "#101010",
              "color": "white"
            });
          },
          function () {
            $(this).css({
              "background-color": "transparent",
              "color": "black",
              "cursor": "pointer"
            });
          });
    
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
    
    
    
    
    
    
    })