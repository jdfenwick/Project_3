(function () {
  "use strict";
  var main,
    index,
    target,
    $ = window.$;
    
  main = function() {
    console.log("I'm here. What do you want.");
    clickHandler = function (anchor) {
      anchor.click(function() {
        target = $(this).attr("href");
        $(".active").removeClass("active");
        $(this).addClass("active");
        $("#" + target).addClass("active");
        return false;
      });
    };
    
    $.getJSON("javascripts/lib/all.json", function (toDoList) {
      for(i=0; i<toDoList.length; i++) {
        console.log(toDoList[i]);
      };
    });
    
  }//end of main
  $(document).ready(main);
}());