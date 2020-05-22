$(document).ready(function(){
    $('.navbar-nav>li>a').on('click', function(){
      $(".navbar-toggler-icon").toggleClass("toggle-color");
        $('.navbar-collapse').collapse('hide');

      });
      $(".navbar-toggler").click(function(){
        $(".navbar-toggler-icon").toggleClass("toggle-color");
      });
     
})