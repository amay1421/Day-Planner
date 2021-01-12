
let renderClock = function() {
    moment(Date);
    $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY | h:mm:ss A'));
}

renderClock();
setInterval(renderClock,1000);

// get data from localstorage
var currentData = JSON.parse(localStorage.getItem('DaySchedule')) || [];

// get all input boxes
var inputBoxes = $(".textarea")
console.log(inputBoxes)

// color them accordingly
for (let index = 0; index < inputBoxes.length; index++) {
    
    var thisHour = parseInt($(inputBoxes[index]).attr("id"));

    //var currentHour = parseInt(moment().format('H'));
    var currentHour = 14;

    console.log(thisHour + ' vs. ' + currentHour + ' || ' + (thisHour < currentHour))
    if(thisHour < currentHour) {
        $(inputBoxes[index]).addClass('past');

    } else if (thisHour > currentHour) {
        $(inputBoxes[index]).addClass('future');
    } else ($(inputBoxes[index]).addClass('present'))
 
}

// get all buttons
var saveButtons = $(".saveBtn");

// give all buttons an on click listener
for (let index = 0; index < saveButtons.length; index++) {
   
    $(saveButtons[index]).on('click', function() {
        var thisDataHour = $(this).attr('data-hour');

        var noteToBeSaved = $('#' + thisDataHour).val();

        var obj = {
            hour: thisDataHour,
            note: noteToBeSaved
        }

        currentData.push(obj);

        localStorage.setItem('DaySchedule', JSON.stringify(currentData))


    })
}

$('#planner-form').dayScheduleSelector({

})


//When i open the page, the day planner is color coded to tell the user whether its past, present or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist