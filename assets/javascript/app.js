$(document).ready(function() {

    // Hide Content
    $(".trivia-questions").hide();
    $(".results").hide();

    //Variables
    let count = 60; //Seconds
    let intervalId;
    let correctAns = 0;
    let wrongAns = 0;
    let unanswered = 0;

    // Functions

    // Show Questions
    function showQuestions() {
        $(".trivia-questions").show();
        $("#game-done").show();
    }

    // Timer
    function countdownTimer() {
        intervalId = setInterval(decrement, 1000);
    }

    // Count Down
    function decrement() {
        count--;
        $("#timer").text(" " + count + " " + "seconds");
        if (count === 0) {
            stop();
            hide();
            displaySummary();
        }
    }

    // Clear Timer
    function stop() {
        clearInterval(intervalId);
    }

    // Hide Questions
    function hide() {
        $(".trivia-questions").hide();
        $("#game-done").hide();
    }

    // Summary
    function displaySummary() {
        $(".results").show();
        unanswered = (4 - (correctAns + wrongAns));
        $("#correctScore").text("Correct Answers: " + correctAns);
        $("#wrongScore").text("Wrong Answers: " + wrongAns);
        $("#unanswered").text("Unanswered: " + unanswered);
    }

    // CLICK EVENTS

    // Start
    $("#game-start").on("click", function() {
        $("#game-start").hide();
        showQuestions();
        countdownTimer();
    });

    // Done
    $("#game-done").on("click", function() {
        $('#game-start').hide();
        hide();
        displaySummary();
        stop(count);
    });

    // Radio Form Buttons
    $("input[type=radio]").on("change", function() {
        correctAns = $("input[value=correct]:checked").length;
        wrongAns = $("input[value=wrong]:checked").length;
        unanswered = (4 - (correctAns + wrongAns));
    });

});