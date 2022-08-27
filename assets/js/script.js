// display the current day of the week and date
var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").html(todaysDate);

$(".saveBtn").on("click", function () {
    var event = $(this).siblings(".description").val();
    var time = $(this).siblings(".description").attr("id");

    localStorage.setItem(time, event);
})


$("#hour-9").val(localStorage.getItem("hour-9"));
$("#hour-10").val(localStorage.getItem("hour-10"));
$("#hour-11").val(localStorage.getItem("hour-11"));
$("#hour-12").val(localStorage.getItem("hour-12"));
$("#hour-1").val(localStorage.getItem("hour-1"));
$("#hour-2").val(localStorage.getItem("hour-2"));
$("#hour-3").val(localStorage.getItem("hour-3"));
$("#hour-4").val(localStorage.getItem("hour-4"));
$("#hour-5").val(localStorage.getItem("hour-5"));