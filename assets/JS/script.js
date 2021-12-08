/*var schedulerTime = moment().format("MMMM Do YYYY");
$( "#currentDay" ).text(schedulerTime);

var realTime = moment().format("hh");
var timeToCompare ="01 pm";
console.log(realTime);
console.log(timeToCompare);

var hoursArray = ["9", "10", "11", "12", "01", "02", "03", "04", "05", "06"];


function eventChanger(){
    for(var i = 0; i < hoursArray.length; i++){

        if(realTime == hoursArray[i]){
            console.log("This should be red");
            $("textarea").addClass("present");

        }else if(realTime <= hoursArray[i]){}
    }
}

eventChanger();*/

//Original Idea for starter code above, modified, because add class wasnt working on syntax i was workion
//Tried this different way below. Thought Id still add the first code as a comment, to guide me through the logic. 

var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

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

var hour = moment().hours();
var textWritten;
var hourDiff;

//Shows the date in webpage
var momentNow = moment();
$('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' ' + momentNow.format('dddd').substring(0,3).toUpperCase());

function time() {

var nine = JSON.parse(localStorage.getItem("09:00 am"));
nineAm.val(nine);

var ten = JSON.parse(localStorage.getItem("10:00 am"))
tenAm.val(ten);

var eleven = JSON.parse(localStorage.getItem("11:00 am"))
elevenAm.val(eleven);

var twelve = JSON.parse(localStorage.getItem("12:00 pm"))
twelvePm.val(twelve);

var onepm = JSON.parse(localStorage.getItem("01:00 pm"))
onePm.val(onepm);

var twopm = JSON.parse(localStorage.getItem("02:00 pm"))
twoPm.val(twopm);

var threepm = JSON.parse(localStorage.getItem("03:00 pm"))
threePm.val(threepm);

var fourpm = JSON.parse(localStorage.getItem("04:00 pm"))
fourPm.val(fourpm);

var fivepm = JSON.parse(localStorage.getItem("05:00 pm"))
fivePm.val(fivepm);

var sixpm = JSON.parse(localStorage.getItem("06:00 pm"))
sixPm.val(sixpm);

} 

function setTimeDiff () {
$(".form-control").each(function () {
var timeTest = parseInt($(this).attr("id"));
hour = parseInt(hour);
console.log(timeTest);
console.log(hour);

if (hour > timeTest) {
$(this).addClass("past");

} else if (hour < timeTest) {
    $(this).addClass("future");

} else {
    $(this).addClass("present");
        }
    });
}

$(document).ready(function(){
time()
setTimeDiff()


$(".saveBtn").on("click", function(){
    textWritten = $(this).siblings(".form-control").val().trim();
    console.log(textWritten);
    hourDiff = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourDiff);
    localStorage.setItem(hourDiff, JSON.stringify(textWritten));

})
})