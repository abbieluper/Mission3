//Abbie Luper
//JavaScript program to calculate and display a final percentage and a letter grade

// create function & get values from form on index page
$("#submitButton").click(function () {
    //initialize letter grade variable as a string
    let letterGrade = "";
    let finalPercentage = 0;


    if (($("#assignments").val() > 100) || ($("#groupProject").val() > 100) || ($("#quizzes").val() > 100) || ($("#exams").val() > 100) || ($("#intex").val() > 100) || ($("#assignments").val() < 0) || ($("#groupProject").val() < 0) || ($("#quizzes").val() < 0) || ($("#exams").val() < 0) || ($("#intex").val() < 0)) {
        alert("Grades must be between 0 and 100");
    }


    else {

        //calculate final grade percentage using jQuery
        finalPercentage = (
            $("#assignments").val() * 0.55 +
            $("#groupProject").val() * 0.05 +
            $("#quizzes").val() * 0.10 +
            $("#exams").val() * 0.20 +
            $("#intex").val() * 0.10
        );

        //calculate letter grade
        if (finalPercentage >= 94) {
            letterGrade = 'A';
        }
        else if (finalPercentage >= 90) {
            letterGrade = 'A-';
        }
        else if (finalPercentage >= 87) {
            letterGrade = 'B+';
        }
        else if (finalPercentage >= 84) {
            letterGrade = 'B';
        }
        else if (finalPercentage >= 80) {
            letterGrade = 'B-';
        }
        else if (finalPercentage >= 77) {
            letterGrade = 'C+';
        }
        else if (finalPercentage >= 74) {
            letterGrade = 'C';
        }
        else if (finalPercentage >= 70) {
            letterGrade = 'C-';
        }
        else if (finalPercentage >= 67) {
            letterGrade = 'D+';
        }
        else if (finalPercentage >= 64) {
            letterGrade = 'D';
        }
        else if (finalPercentage >= 60) {
            letterGrade = 'D-';
        }
        else {
            letterGrade = 'E';
        }

        //display percentage and letter grade on page below calculator
        let sOutput = ("Results:\nFinal Percentage of " + finalPercentage + "% with a Letter Grade of " + letterGrade);
        document.getElementById("myOutput").innerHTML = sOutput;

        //display final percentage and letter grade in an alert box

        alert("Final Percentage: " + finalPercentage + "%" + "\nLetter Grade: " + letterGrade);

    }
})


