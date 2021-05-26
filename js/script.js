    const slider = tns({
    container: '.carousel__slider',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  }); 
  
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  }); 


  const slider2 = tns({
    container: '.comment__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    navPosition: 'bottom',
    navAsThumbnails: Boolean,
  });


  (function($) {
    $(function() {
      $("ul.tabs__caption").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
  })(jQuery);
  