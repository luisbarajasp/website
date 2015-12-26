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
            scrollTop: $(anchor.attr('href')).offset().top - 60
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
    	var scrollHeight = $(document).height();
    	var scrollPosition = $(window).height() + $(window).scrollTop();
    	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
    	    // when scroll to bottom of the page
            $('.contact').fadeIn();
    	}else{
            $('.contact').fadeOut();
        }
    });

    $('.btn-group input').on('change',function(){
        var selected = $('input[name=options]:checked', '.btn-group').val();

        if (selected == 'all'){
            $('.thumbnail').show(800);
        }else{
            $('.thumbnail').each(function(){
                var id = $(this).attr('id');

                if(id == selected){
                    $(this).show(800);
                }else{
                    $(this).hide(800);
                }
            });
        }
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop() + 70;
    $('.navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos - 80) {
            $('.navbar a').removeClass("active");
            $('.navbar a').addClass("inactive");
            currLink.removeClass("inactive");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
            currLink.addClass("inactive");
        }
    });
}
