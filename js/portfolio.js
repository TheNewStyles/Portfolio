var amountScrolled = 300;
var amountScrolledHeader = $('header').height();
console.log(amountScrolledHeader);

////////////////// Nav Menu  //////////////////
function openNav(){
  document.getElementById("nav").style.height= "100%";
}

function closeNav(){
  document.getElementById("nav").style.height = "0%";
}

$(document).ready(function(){

    //fade in Nav bar
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('.fixed-nav-bar').fadeIn('slow');
        } else {
            $('.fixed-nav-bar').fadeOut('slow');
        }
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

    ////////////////// header  //////////////////

    //fade in back to top button
    $(window).scroll(function() {
        if ( $(window).scrollTop() < amountScrolledHeader - 50 ) {
            $('header').fadeIn('slow');
        } else {
            $('header').fadeOut('slow');
        }
    });

});

