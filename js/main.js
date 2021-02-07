$(document).ready(function () {

    // luxy.init();

    var circles = $(".circle");
    var sections = $(".section");

    var n = circles.length;
    var currentSection = $(sections[0]);


    var windowHeight = $(window).height(),
        gridTop = windowHeight * .01,
        gridBottom = windowHeight * .8;

    $(window).scroll(function () {



        for (var i = 0; i < n; i++) {

            // var alto_total = $(this).scrollTop();
            var thisTop = $(circles[i]).offset().top - $(window).scrollTop();
            if (thisTop >= gridTop && (thisTop + $(circles[i]).height()) <= gridBottom) {
                $(circles[i]).css("width", "40px");
                $(circles[i]).css("height", "40px");

                var inactiveElements = $(".section-" + i + "  .element-inactive");
                var en = inactiveElements.length;
                for (var x = 0; x < en; x++) {

                    $(inactiveElements[x]).removeClass("element-inactive");
                    $(inactiveElements[x]).addClass("element-active");

                }


            } else {
                $(circles[i]).css("width", "20px");
                $(circles[i]).css("height", "20px");




                var activeElements = $(".section-" + i + "  .element-active");
                var en = activeElements.length;
                for (var x = 0; x < en; x++) {

                    $(activeElements[x]).removeClass("element-active");
                    $(activeElements[x]).addClass("element-inactive");

                }



            }
        }

    });





});