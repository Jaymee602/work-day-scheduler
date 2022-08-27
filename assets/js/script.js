// display the current day of the week and date
var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").html(todaysDate);


// when save button is clicked, save event with it's respective hour in local storage
$(".saveBtn").on("click", function () {
    var event = $(this).siblings(".description").val();
    var time = $(this).siblings(".description").attr("id");

    localStorage.setItem(time, event);
});


// display saved events
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));


// color code each hour to indicate whether it is in the past, present, or future
function colorCode() {
    $("textarea").each(function () {
        var currentTime = moment().format("k");
        var hourID = $(this).attr("id");
        
        console.log(hourID, currentTime)

        if (hourID < currentTime) {
            $(this).addClass("past");
        } 
        else if (hourID === currentTime){
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        };
    });
};


colorCode();