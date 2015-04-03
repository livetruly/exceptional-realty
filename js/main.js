$(function() {

  ////////// Mobile Menu //////////

  $('a.menu-icon').click(function() {
    $('#menu-links').slideToggle();
  });

  // fix hidden links on window resize

  $(window).resize(function() {
    if ($(window).width() > 700) {
      $('#menu-links').removeAttr('style');
    }
  });


  ///////// Contact Form Validation  ///////// 

  $('form').submit(function(event){

    var fullname = $('#fullname').val(),
        email = $('#email').val(),
        message = $.trim($('#message').val());

    event.preventDefault();  //prevent form from submitting!
  });

});