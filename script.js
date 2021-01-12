// Add time and running clock
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

// color time blocks accordingly
for (let index = 0; index < inputBoxes.length; index++) {
    
    var thisHour = parseInt($(inputBoxes[index]).attr("id"));

    var currentHour = parseInt(moment().format('H'));

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