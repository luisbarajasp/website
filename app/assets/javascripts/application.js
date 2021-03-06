// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require fancybox
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require masonry/jquery.masonry
//= require jquery.turbolinks
//= require turbolinks
//= require_tree .

// function toggleNav(){
//     var menu = $('.navigation-menu');
//
//     $(menu).slideToggle(400);
//
//     var icon = $('#icon');
//     flag = icon.hasClass('fa-bars');
//
//     if(flag){
//         icon.removeClass('fa-bars');
//         icon.addClass('fa-times');
//     }else{
//         icon.removeClass('fa-times');
//         icon.addClass('fa-bars');
//     }
// }

$(document).ready(function(){

   $(document).on("scroll", onScroll);

   $('[data-toggle="tooltip"]').tooltip();

   $('a.page-scroll').click(function(event){
       var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 55
        }, 1000);
        event.preventDefault();
   });

    $('.fancybox').fancybox({
        width  : 600,
        height : 900,
        type   :'iframe',
    });

    $('#btn-about').click(function(event){
        $('html,body').animate({
            scrollTop: $("#about-me").offset().top - 65
        },1000);
        event.preventDefault();
    });

    $('#logo').click(function(event){
        $('html,body').animate({
            scrollTop: $("#profile").offset().top - 60
        },1000);
        event.preventDefault();
    });

    $(window).on("scroll", function() {
        var deviceAgent = navigator.userAgent.toLowerCase();

        var isTouchDevice = ('ontouchstart' in document.documentElement) ||
        (deviceAgent.match(/(iphone|ipod|ipad)/) ||
        deviceAgent.match(/(android)/)  ||
        deviceAgent.match(/(iemobile)/) ||
        deviceAgent.match(/iphone/i) ||
        deviceAgent.match(/ipad/i) ||
        deviceAgent.match(/ipod/i) ||
        deviceAgent.match(/blackberry/i) ||
        deviceAgent.match(/bada/i));

    	if(!isTouchDevice){
            var scrollHeight = $(document).height();
        	var scrollPosition = $(window).height() + $(window).scrollTop();
        	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        	    // when scroll to bottom of the page
                $('.contact').fadeIn();
        	}else{
                $('.contact').fadeOut();
            }
        }
    });

    $('.btn-group input').on('change',function(){
        var selected = $('input[name=options]:checked', '.btn-group').val();

        if (selected == 'all'){
            $('.thumbnail').fadeIn(800);
        }else{
            $('.thumbnail').each(function(){
                var id = $(this).attr('id');

                if(id == selected){
                    $(this).fadeIn(800);
                }else{
                    $(this).fadeOut(800);
                }
            });
        }
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop() + 70;
    $('.navbar-right a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos - 80) {
            $('.navbar-right a').removeClass("active");
            $('.navbar-right a').addClass("inactive");
            currLink.removeClass("inactive");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
            currLink.addClass("inactive");
        }
    });
}
