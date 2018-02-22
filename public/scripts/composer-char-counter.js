
$(document).ready(function() {
  $(".new-tweet textarea").keyup(function() {
    var charLeft = (140 - $(this).val().length);
    var targetCounter = $(this).closest(".new-tweet").find(".counter");
      // traverse up (.closest) to find parent with .new-tweet class
      //then traveerse down (.find) to find sibing with class .counter

    targetCounter.text(charLeft);

    if (charLeft < 0) {
      targetCounter.addClass('redText');
    } else {
      targetCounter.removeClass('redText');
    }

  })
});
