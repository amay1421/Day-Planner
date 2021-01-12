// var date = moment().format("MMM Do YY h mm ss");
// $("#currentDay").append(date);

// let timesArr= ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]; 

moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");

$('#planner-form').dayScheduleSelector({

    // moment().format('LLL')  // January 11, 2021 4:26 PM
})


//When i open the page, the day planner is color coded to tell the user whether its past, present or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist