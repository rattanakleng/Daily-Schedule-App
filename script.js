// Use [Moment.js library](https://momentjs.com/) to work with date and time.
var currentMoment = moment();
$("#currentDay").text(currentMoment.format("dddd, MMMM Do YYYY"));


// Setup past present furture
// If the time already passed set to past
// If the time is equal current time set to present
// If the time is ahead of current time set future

// Select input Element and store in a variable
var inputEl = $("input");

//get current moment
var currentHour = currentMoment.hour();
// Another option to formart current moment var currentHour = parseInt(currentMoment.format("H"));

function setBackgroundColor() {

    // inputNumber9.setAttribute("class", "present")
    for (var i = 0; i < 9; i++) {

        // Get input data number and store in a variable
        var inputDataNum = parseInt(inputEl[i].getAttribute("data-number"));

        if (inputDataNum < currentHour) {

            inputEl[i].style.backgroundColor = "#d3d3d3";
            //inputEl[i].setAttribute("class", "present");

        } else if (inputDataNum === currentHour) {

            inputEl[i].style.backgroundColor = "#ff6961";

        } else {

            inputEl[i].style.backgroundColor = "#77dd77";

        }
    }
}

// Update background to present onClick

inputEl.click(function (event) {

    event.preventDefault();

    event.target.style.backgroundColor = "#ff6961";

});

// Select ssveIcon and store in a var saveIcon
var saveIcon = $(".save-icon");

// btnEl addEvenlistner click
saveIcon.click(function (event) {

    // event.preventDefault() -- Do I need it and why?

    // Get dataNumber of button
    var dataNumber = $(event.target).parent().data("number");

    //Event deligate selection
    var inputValue = $("#input-" + dataNumber).val();

    //Save to do to local storage
    localStorage.setItem("Hour-" + dataNumber, inputValue);

});

// function displaySchedule(event) when page load
function displaySchedule() {

    //Get to do list from local storage and save in array
    var scheduleCtner = [];

    for (var num = 9; num < 18; num++) {

        savedSchedule = localStorage.getItem("Hour-" + num);

        scheduleCtner.push(savedSchedule);
    }

    // Display to do list from local storage in input
    for (var i = 0; i < 9; i++) {

        inputEl[i].value = scheduleCtner[i];
    }

};

// Display local storage data in input
displaySchedule()

// Setup background base on time
setBackgroundColor();


