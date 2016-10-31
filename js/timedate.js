// Changing Date and Time
  // Setting month names
var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
  ];

// Week names
var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Getting the full date
var date = new Date();
// Getting the date
var dat = date.getDate();
// Getting the month
var monthIndex = date.getMonth();
// Getting the year
var year = date.getFullYear();
// Getting the day
var day  = week[date.getDay()];

// Getting the hour
var hours = date.getHours();
// Getting the minutes
var mins = date.getMinutes();

// Setting AM and PM
if(hours > 11 && hours < 24 ) {
  var timeletters = "PM";
} else { var timeletters = "AM"};
