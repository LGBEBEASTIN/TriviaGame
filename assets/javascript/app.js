$(document).ready(function() {

    //VARIABLES
    let count = 30;
    let intervalId;
    let correctAns = 0;
    let wrongAns = 0;
    let unanswered = 0;

    // FUNCTIONS
    // Timer
    function countdownTimer() {
        intervalId = setInterval(decrement(), 1000);
    }
    // Count Down
    function decrement() {
        count--;
        $("#timer").text(count);
        if (count === 0) {
            stop();
            displaySummary();
        }
    }
    // Clear Timer
    function stop() {
        clearInterval(intervalId);
    }
    // Summary
    function displaySummary() {
        unanswered = (4 - (correctAns + wrongAns));
        $("#correctScore").text("Correct Answers: " + correctAns);
        $("#wrongScore").text("Wrong Answers: " + wrongAns);
        $("#unanswered").text("Unanswered: " + unanswered);
    }

    // CLICKEVENTS
    // Start
    $("#game-start").on("click", function() {
        countdownTimer(decrement(), 1000);
    });
    // Done
    $("#game-done").on("click", function() {
        displaySummary();
        stop();
    });
    // Radio Form Buttons
    $("input[type=radio]").on("click", function() {
        countdownTimer();
    })
    $("input[type=radio]").on("change", function() {

        if ($(".firstQuestion")) {
            correctAns = $("input[value=true]:checked").length;
            wrongAns = $("input[value=false]:checked").length;;
        }
        if ($(".secondQuestion")) {
            correctAns = $("input[value=false]:checked").length;
            wrongAns = $("input[value=true]:checked").length;
        }
        if ($(".thirdQuestion")) {
            correctAns = $("input[value=true]:checked").length;
            wrongAns = $("input[value=false]:checked").length;
        }
        if ($(".fourthQuestion")) {
            correctAns = $("input[value=false]:checked").length;
            wrongAns = $("input[value=true]:checked").length;
        }
    });

});