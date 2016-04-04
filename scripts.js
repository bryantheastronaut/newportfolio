$(document).ready(function(){

//Add draggability to all desktop files/folders
  $(".icon").draggable();

  function time() {
    var current = new Date();
    //to ensure each number is in double digit format
    var hour = ("0" + current.getHours()).slice(-2);
    var minute =("0" + current.getMinutes()).slice(-2);
    var pHour = parseInt(hour);
    var amPm;

//To determine if AM/PM
    if (pHour > 12) {
      amPm = "PM";
    } else {
      amPm = 'AM';
    }
//to break military time and show in 12 hour intervals
    if (pHour === 00) {
      hour = '12';
    } else if (hour > '12') {
      hour = hour - '12';
    }

return hour + ":" + minute + " " + amPm;
}
  $('#time').append(time());


});
