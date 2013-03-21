(function () {
  "use strict";
  var main,
    target,
    $ = window.$;
    
  main = function() {
    console.log("I'm here. What do you want.");
    $(".tabs .tab").click(function() {
      target = $(this).attr("href");
      $(this).addClass("acvite");
      $("#" + target).addClass("active");
      return false;
    });
  }
  $(document).ready(main);
}());