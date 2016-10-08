////////////////// Nav Menu  //////////////////

var amountScrolled = 300;

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

////////////////// Three.js header background  //////////////////
