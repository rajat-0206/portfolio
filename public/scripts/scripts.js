// start navbar
$(function(){
    $(document).scroll(function(){
        var $nav=$("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
// end navbar

var btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
btn.addClass('show');
} else {
btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});

function scrollNav() {
$('nav a').click(function(){
$(".active").removeClass("active");     
$(this).addClass("active");

$('html, body').stop().animate({
scrollTop: $($(this).attr('href')).offset().top - 160
}, 300);
return false;
});
}
scrollNav();
