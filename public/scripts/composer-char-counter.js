
$(document).ready(function() {
  $(".new-tweet textarea").keyup(function() {    // target textarea tag from index.html
    var charLeft = (140 - $(this).val().length)  // this refers to "textarea"
      // console.log($(this).find(".counter"))
    var targetCounter = $(this).closest(".new-tweet").find(".counter")
            // traverse up (.closest) to find parent with .new-tweet class
            //then traveerse down (.find) to find sibing with class .counter

    targetCounter.text(charLeft)  // use .text to update the value of the counter

    if (charLeft < 0) {
      targetCounter.addClass('redText')
    } else {
      targetCounter.removeClass('redText')
    }

  })
});


   // var charLeft = (140 - (this).val().length)  // this refers to "textarea"
   //    // console.log($(this).find(".counter"))
   //  var targetCounter = (this).closest(".new-tweet").find(".counter")
   //  var targetCounter = (this).closest(".new-tweet").find(".counter")