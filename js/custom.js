(function($) {

    "use strict";

    $(window).on("load", function() {

    /* ----------------------------------------------------------- */
    /*  PRELOADER
    /* ----------------------------------------------------------- */

        $("body").toggleClass("loaded");
        setTimeout(function() {
            $("body").addClass("loaded");
        }, 3000);

    });

    $(document).ready(function() {

        /* ----------------------------------------------------------- */
        /*  TEXT ROTATOR
        /* ----------------------------------------------------------- */

        $("#selector").animatedHeadline({
            animationType: "clip"
        });

        /* ----------------------------------------------------------- */
        /*  TESTIMONIALS CAROUSEL
        /* ----------------------------------------------------------- */

        $('#customers-testimonials').owlCarousel({
            loop: true,
            items: 1,
            margin: 30,
            center: true,
            autoplay: false,
            dots:true,
            autoplayTimeout: 8500,
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });

        /* ----------------------------------------------------------- */
        /*  SHOW/HIDE SECTIONS
        /* ----------------------------------------------------------- */

        $('#about').on('click', function () {
            $('#fullview__portfolio, #fullview__contact').css('display','none');
        });

        $('#portfolio').on('click', function () {
            $('#fullview__about, #fullview__contact').css('display','none');
        });

        $('#contact').on('click', function () {
            $('#fullview__portfolio, #fullview__about').css('display','none');
        });

        $('.grid__toggle').on('click', function () {
            setTimeout(function(){
                $('#fullview__portfolio, #fullview__about, #fullview__contact').css('display','block');
                document.getElementById('fullview__about').scrollIntoView();
                document.getElementById('fullview__portfolio').scrollIntoView();
                document.getElementById('fullview__contact').scrollIntoView();
            }, 1000);
        });

        $('.portfolio-container .grid__item').on('click', function () {
            $('.simplebar-mask').css('z-index','111');
        });

        $('.action--close').on('click', function () {
            $('.simplebar-mask').css('z-index','auto');
        });

        /* ----------------------------------------------------------- */
        /*  AJAX CONTACT FORM
        /* ----------------------------------------------------------- */

        $(".contactform").on("submit", function() {
            $(".output_message").text("Sending...");
            var form = $(this);
            $.ajax({
                url: form.attr("action"),
                method: form.attr("method"),
                data: form.serialize(),
                success: function(result) {
                    if (result == "success") {
                        $(".contactform").find(".output_message").addClass("success");
                        $(".output_message").text("Message Sent!");
                    } else {
                        $(".contactform").find(".output_message").addClass("error");
                        $(".output_message").text("Error Sending!");
                    }
                }
            });
            return false;
        });

        /* ----------------------------------------------------------- */
        /*  MOBILE MENU
        /* ----------------------------------------------------------- */

        $("#singlepage-nav").singlePageNav({
            offset: 0,
            filter: ":not(.nav-external)",
            updateHash: 0,
            currentClass: "current",
            easing: "swing",
            speed: 2000
        });

    });

})(jQuery);