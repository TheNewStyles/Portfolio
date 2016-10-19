$(document).ready(function(){

    var amountScrolled = 300;
    var amountScrolledHeader = $('header').height();
    var $windowHeight = $(window).height();

    var bg = $('header, .about-me, .threejs-holder');
    $(window).resize(function() {
        bg.height($(window).height() + 60);
    });
    

    ////////////////// nav menu  //////////////////
    //open/close nav
    $('#hamburger').click(function(){
        $('#nav').animate({height:$windowHeight},200);
        $('.closebtn').fadeIn('slow');
    });
    $('.closebtn, #home-menu, #contact-menu, #projects-menu').click(function(){
        $('#nav').animate({height:0},200);
    });

    //fade in Nav bar
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('.fixed-nav-bar').fadeIn('slow');
        } else {
            $('.fixed-nav-bar').fadeOut('slow');
        }
    });

    //scroll within page on menu click
   $('#home-menu').click(function(e){
       e.preventDefault();       
       $('html, body').animate({
            scrollTop: 0
        }, 1000);
   });
   $('#projects-menu').click(function(e){
       e.preventDefault();       
       $('html, body').animate({
            scrollTop: $('#portfolio').offset().top
        }, 1000);
   });
   $('#contact-menu').click(function(e){
       e.preventDefault();       
       $('html, body').animate({
            scrollTop: $('#about-me').offset().top
        }, 1000);
   });


////////// expand collapse projects ////////////
      $(".wrapper").click(function(){
        $('.btn').toggleClass( 'active');
        $(".portfolio-logos").slideToggle('slow');
      });
    ////////// expand collapse skills ////////////
      $(".wrapper-icons").click(function(){
        $('.btn-icons').toggleClass( 'active');
        $(".skill-icons").slideToggle('slow');
      });
    

////////////////// Back to top button  //////////////////

    //fade in back to top button
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });

    //scroll animation back to top
    $('a.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

});

