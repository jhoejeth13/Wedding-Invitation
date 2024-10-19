$(document).on('click', function(){
  document.getElementById("my_audio").play();
  console.log('Jarill');
});
    (function ($) {
        "use strict";
        
        // Activate Sakura falling effect
        $('.sakura-falling').sakura();
        
        // Add glitter effect dynamically
        $('.glitter').each(function () {
          $(this).find('.title').addClass('glitter'); // You can adjust the selector to target specific elements if needed
        });
      })(jQuery);