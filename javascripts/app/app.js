(function () {
    "use strict";
    var main,
        i,
        tasks,
        allTask,
        target,
        button,
        bycat,
        bytask,
        newTask,
        newCat,
        listByCat,
        categoryArray,
        allCategory,
        taskHandler,
        clickHandler,
        buttonHandler,
        $ = window.$;
    main = function () {
        $.getJSON("javascripts/lib/all.json", function (toDoList) {
            toDoList.forEach(function (taskList) {
                jsonTask(taskList);
                buttonHandler(button);
            });
        });
        $("#category").click(function () {
            categoryList($(".allTasks .active"));
            $(".byCategories").children().remove();
            singleCategories.forEach(function (catA) {
                bycat = $("<div class = 'category'>" + catA + "</div>");
                $(".byCategories").append(bycat);
                for (i = 0; i < categoryArray.length; i++) {
                    if (categoryArray[i].match(catA)) {
                        bytask = $("<div>" + tasks[i] + "</div>").addClass("taskList");
                        $(".byCategories").append(bytask);
                    }
                }
            });
            $(".taskList").each(function () {
                $(this).prepend("<button type ='button'>X</button>");
            });
            $("button").click(function () {
                $(this).parent().remove();
            });
        });
        buttonHandler = function (element) {
            element.click(function () {
                $(this).nextUntil("button").remove();
                $(this).remove();
                return false;
            });
        };
        clickHandler = function (anchor) {
            anchor.click(function () {
                target = $(this).attr("href");
                $(".active").removeClass("active");
                $(this).addClass("active");
                $("#" + target).addClass("active");
                return false;
            });
        };
        clickHandler($(".tabs .tab"));
        taskHandler = function (tab) {
            allTask = $("<div>" + tab.description + "</div>").addClass("ACTab");
            allCategory = $("<div>" + tab.categories + "</div>").addClass("category");
            button = $("<button type ='button'>X</button>");
            $(".allTasks").append(button).append(allTask).append(allCategory);
        };
        $("#inputButton").click(function () {
            newTask = $("<div>" + $("#newTask").val() + "</div>").addClass("ACTab");
            newCat = $("<div>" + $("#newCategory").val() + "</div>").addClass("category");
            $(".allTasks").append("<button type ='button'>X</button>").append(newTask).append(newCat);
            $("#newTask").val("");
            $("#newCategory").val("");
            buttonHandler($("button"));
        });
        
    } // end of main
    $(document).ready(main);
}());