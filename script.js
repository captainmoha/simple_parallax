$(document).ready(function() {
  $("h1").html("Parallax");
  $(window).on('scroll', function() {
    yPos = window.pageYOffset;
    shift = yPos * 0.8 + 'px';
    $('.bg').css('top', shift);
  });

});