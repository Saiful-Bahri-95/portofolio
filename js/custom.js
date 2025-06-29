
  (function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});

  // RESET FORM SETELAH SUBMIT
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactEmail');

    form.addEventListener('submit', function (e) {
      // Hanya jika kamu tidak ingin form reload
      // e.preventDefault();

      // Tunggu 1 detik sebelum reset (beri waktu kirim ke Formspree)
      setTimeout(() => {
        form.reset();
      }, 1000);
    });
  });

  })(window.jQuery);



