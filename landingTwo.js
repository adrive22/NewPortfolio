$(document).ready(function () {
    checkSize();






    $(window).resize(function () {
        checkSize();
    });

    function checkSize() {
        var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;






        if ($(window).width() >= 1500) {
            $("landingLogo").hide();
            console.log("one");
            $(function () {
                $(".lineOne").animate({
                    width: '525px'
                }, {
                    duration: 4000,
                    queue: false
                });

                $(".lineTwo").animate({
                    height: '250px'
                }, {
                    duration: 4000,
                    queue: false
                });

                $(".nameOne")
                    .animate({
                        opacity: "1",
                        queue: false,
                        duration: 'xslow'
                    })

            });
        }









        /////////////////////////////////////////////////Desktop
        if ($(window).width() >= 1025) {
            $(".landingLogo").hide();
            console.log("one");
            $(function () {
                $(".lineOne").animate({
                    width: '525px'
                }, {
                    duration: 4000,
                    queue: false
                });

                $(".lineTwo").animate({
                    height: '250px'
                }, {
                    duration: 4000,
                    queue: false
                });

                $(".nameOne")
                    .animate({
                        opacity: "1",
                        queue: false,
                        duration: 'xslow'
                    })

            });
        }


        /////////////////////////////////////////////////ipad portrait



    //  if (($(window).height() <= 1024) && ($(window).width() >= 768) && (orientation === "portrait-primary")) {

    //         console.log("two");
    //         $(function () {
    //             $(".lineOne").animate({
    //                 width: '475px'
    //             }, {
    //                 duration: 4000,
    //                 queue: false
    //             });

    //             $(".lineTwo").animate({
    //                 height: '255px'
    //             }, {
    //                 duration: 4000,
    //                 queue: false
    //             });

    //         })
    //     }



        /////////////////////////////////////////////////ipad landscape

    //  if (($(window).width() <= 1024) && ($(window).height() >= 768) && (orientation === "landscape-primary")) {
    //         console.log("three");
    //         $(function () {
    //             $(".lineOne").animate({
    //                 width: '485px'
    //             }, {
    //                 duration: 4000,
    //                 queue: false
    //             });

    //             $(".lineTwo").animate({
    //                 height: '250px'
    //             }, {
    //                 duration: 4000,
    //                 queue: false
    //             });

    //         })

    //     }


        /////////////////////////////////////////////////iphoneX portrait

        // if (($(window).height() <= 812) && ($(window).width() >= 375) && (orientation === "portrait-primary")) {
        //     console.log("four");
        //     $(function () {
        //         $(".lineOne").animate({
        //             width: '270px'
        //         }, {
        //             duration: 4000,
        //             queue: false
        //         });

        //         $(".lineTwo").animate({
        //             height: '125px'
        //         }, {
        //             duration: 4000,
        //             queue: false
        //         });

        //     })

        // }

        // /////////////////////////////////////////////////iphoneX landscape

        // if (($(window).width() <= 812) && ($(window).height() >= 375) && (orientation === "landscape-primary")) {

        //     console.log("five");
        //     $(function () {
        //         $(".lineOne").animate({
        //             width: '390px'
        //         }, {
        //             duration: 4000,
        //             queue: false
        //         });

        //         $(".lineTwo").animate({
        //             height: '200px'
        //         }, {
        //             duration: 4000,
        //             queue: false
        //         });

        //     })


        // }

        ////////////////////////////////////////////////////smaller than 500px

    //     if (($(window).width() <= 1024)) {
    //         $(".lineOne").animate({
    //             width: '250px'
    //         }, {
    //             duration: 4000,
    //             queue: false
    //         });

    //         $(".lineTwo").animate({
    //             height: '125px'
    //         }, {
    //             duration: 4000,
    //             queue: false
    //         });

    //     }

    // }

    if (($(window).width() <= 1024)) {
        $(".lineOne").remove();
        $(".lineTwo").remove();
        $(".nameOne").remove();
        $(".nameTwo").remove();
        $(".nameThree").remove();
       


       
        $(".landingLogo").css('opacity', 0)
    
            .animate({
              opacity: 1
            }, {
              queue: false,
              duration: 5000
            });
            
        }


       
          




    }



    





    $(".nameOne").slideDown(4000);
    $(".nameTwo").slideDown(4000);
    $(".nameThree").slideDown(4000);





    window.setTimeout(function () {
        location.href = "home/home.html";
    }, 5000);




})