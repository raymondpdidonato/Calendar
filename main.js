//
// Change Request Calendar
// by Ray DiDonato
//

// DOM Variables
monthLabel = document.getElementById('month');

// Date Variables
let date = new Date(),
    year = date.getFullYear(),
    dayOfMonth = date.getDate(),
    day = date.getDay(),
    days = '',
    week = 0,
    month = date.getMonth();

// Week Values
let weekOne = [1,2,3,4,5,6,7],
    weekTwo = [8,9,10,11,12,13,14],
    weekThree = [15,16,17,18,19,20,21],
    weekFour = [22,23,24,25,26,27,28],
    weekFive = [29,30,31];

monthName();
updateMonth();
dayName();
getWeekNumber();
updateCalendar();

// Convert Month Number to Name
function monthName() {
  if (month == 0) {
    month = 'January';
    days = 31;
  } else if (month == 1) {
    month = 'February';
    days = 28;
  } else if (month == 2) {
    month = 'March';
    days = 31;
  } else if (month == 3) {
    month = 'April';
    days = 30;
  } else if (month == 4) {
    month = 'May';
    days = 31;
  } else if (month == 5) {
    month = 'June';
    days = 30;
  } else if (month == 6) {
    month = 'July';
    days = 31;
  } else if (month == 7) {
    month = 'August';
    days = 31;
  } else if (month == 8) {
    month = 'September';
    days = 30;
  } else if (month == 9) {
    month = 'October';
    days = 31;
  } else if (month == 10) {
    month = 'November';
    days = 30;
  } else if (month == 11) {
    month = 'December';
    days = 31;
  }
}

// Update Month Label
function updateMonth() {
  monthLabel.innerText = month + ' ' + year;
}

// Get Day Name
function dayName() {
  if (day == 1) {
    day = 'Monday';
  } else if (day == 2) {
    day = 'Tuesday';
  } else if (day == 3) {
    day = 'Wednesday';
  } else if (day == 4) {
    day = 'Thursday';
  } else if (day == 5) {
    day = 'Friday';
  } else if (day == 6) {
    day = 'Saturday';
  } else if (day == 7) {
    day = 'Sunday';
  }
}

function getWeekNumber() {
  if (weekOne.indexOf(dayOfMonth) != -1) {
    week = 1;
  } else if (weekTwo.indexOf(dayOfMonth) != -1) {
    week = 2;
  } else if (weekThree.indexOf(dayOfMonth) != -1) {
    week = 3;
  } else if (weekFour.indexOf(dayOfMonth) != -1) {
    week = 4;
  } else if (weekFive.indexOf(dayOfMonth) != -1) {
    week = 5;
  }
}

function updateCalendar() {
  let dayDiv = document.getElementById(day + week);
  let numberDiv = dayDiv.childNodes[1].id;
  document.getElementById(numberDiv).innerText = dayOfMonth;
  let slice = numberDiv.slice(11);
  let numberSlice = parseInt(slice);
  let daysUp = days - dayOfMonth;
  let daysDown = dayOfMonth - 1;
  let downValue = dayOfMonth - 1;
  let upValue = dayOfMonth + 1;
  for (let i = 1; i <= daysUp; i++) {
    let upDiv = document.getElementById('divToUpdate' + (numberSlice + i));
    upDiv.innerText = upValue++;
  }
  for (let i = daysDown; i > 0; i--) {
    let downDiv = document.getElementById('divToUpdate' + (i + 1));
    downDiv.innerText = downValue--;
  }
}
