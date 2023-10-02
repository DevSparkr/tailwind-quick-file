(function($){
    // header menu
    $(".h-menu li ul").parents("li").addClass("has-children").append('<i class="fal fa-angle-down"></i>');

    // mobile menu
    $(".h-menu-wrap .h-menu").clone().appendTo(".m-menu");
    function updateHeight(){
        var headerHeight = $(".entire-header").outerHeight(true);
        $(".mobile-menu").css({top: headerHeight +'px'});
    }
    $(window).on('load', function(){
        updateHeight();
    });
    $(window).on('resize', function(){
        updateHeight();
    });
    
    $(".menutrigger").click(function(){
        $(this).toggleClass('active');
        $(".mobile-menu").toggleClass('menu-opened');
        $('body').toggleClass('menu-opened');
    });
    $(".m-menu-body li i").on("click", function(){
        $(this).parent().children("ul").slideToggle();
    });

    // accordion
    // $(".accordion-item").first().addClass("active").children(".accordion-content").show();
    $(".accordion-title").on("click", function(){
        $(this).parent().siblings().removeClass("active").children(".accordion-content").slideUp();
        $(this).parent().toggleClass("active").children(".accordion-content").slideToggle();
    });

    // scrollToTop
    $("body").prepend('<div id="gotop"><i class="fal fa-angle-up"></i></div>');
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $("#gotop").fadeIn();
        }else{
            $("#gotop").fadeOut();
        }
    });
    $("#gotop").on("click", function(){
        $("html, body").animate({scrollTop: 0}, 800);
    });

    // owl carousel
    $(".data-carousel").each(function (index) {
        var items = $(this).data('items');
        var autoplay = $(this).data('autoplay');
        var responsive = $(this).data('responsive');
        var animateout = $(this).data('animateout');
        var dots = $(this).data('dots');
        var nav = $(this).data('nav');
        var margin = $(this).data('margin');
        var autoheight = $(this).data('autoheight');
        var mousedrag = $(this).data('mousedrag');
        var loop = $(this).data('loop');

        $(this).owlCarousel({ 
            smartSpeed: 800,
            items: items,
            responsiveClass: true,
            responsive: responsive,
            autoplay: autoplay,
            animateOut: animateout,
            dots: dots,
            nav: nav,
            margin: margin,
            autoHeight: autoheight,
            navText: ['<i class="fal fa-arrow-left"></i>','<i class="fal fa-arrow-right"></i>'],
            mouseDrag: mousedrag,
            loop: loop
        });
    });

    // Ajax form loading
    $(document).ajaxStart(function(){
        $(".ajax_form button").addClass("loading");
    });
    $(document).ajaxComplete(function(){
        $(".ajax_form button").removeClass("loading");
    });

})(jQuery);