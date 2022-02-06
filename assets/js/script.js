// Addition of Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

// Variables for text/hours
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

// Variables for Hours
var hour = moment().hours();
var userInput;
var hourSpan;

// Date + Hour per schedule
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);
  
// InitPage for Hours
function initPage() {
    console.log("Current Hour " + hour);

    // 9:00 AM Hour
    var init9 = JSON.parse(localStorage.getItem("09:00 AM"));
    nineAm.val(init9);
  
    // 10:00 AM Hour
    var init10 = JSON.parse(localStorage.getItem("10:00 AM"))
    tenAm.val(init10);
    
    // 11:00 AM Hour
    var init11 = JSON.parse(localStorage.getItem("11:00 AM"))
    elevenAm.val(init11);

    // 12:00 PM Hour
    var init12 = JSON.parse(localStorage.getItem("12:00 PM"))
    twelvePm.val(init12);

    // 1:00 PM Hour
    var init1 = JSON.parse(localStorage.getItem("01:00 PM"))
    onePm.val(init1);
    
    // 2:00 PM Hour
    var init2 = JSON.parse(localStorage.getItem("02:00 PM"))
    twoPm.val(init2);

    // 3:00 PM Hour
    var init3 = JSON.parse(localStorage.getItem("03:00 PM"))
    threePm.val(init3);

    // 4:00 PM Hour
    var init4 = JSON.parse(localStorage.getItem("04:00 PM"))
    fourPm.val(init4);
    
    // 5:00 PM Hour
    var init5 = JSON.parse(localStorage.getItem("05:00 PM"))
    fivePm.val(init5);

    // 6:00 PM Hour
    var init6 = JSON.parse(localStorage.getItem("06:00 PM"))
    sixPm.val(init6);

    // 7:00 PM Hour
    var init7 = JSON.parse(localStorage.getItem("07:00 PM"))
    sevenPm.val(init7);
}

// Background function for each hour
function background () {
    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
        // Past hours
        if (hour > timeTest) {
            $(this).addClass("past");
        // Future hours
        } else if (hour < timeTest) {
            $(this).addClass("future");
        // Current hours
        } else {
            $(this).addClass("present");
        }
    });
}

// Saves to localstorage
$(document).ready(function () {
    initPage()
    background()

    // Save button
    $(".saveBtn").on("click", function () {
        userInput = $(this).siblings(".form-control").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })

    // Clears the tasks for day
    $("#clearDay").on("click", function () {
        localStorage.clear();
        initPage()
    })
});