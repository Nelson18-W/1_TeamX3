// Navigating Between html files:
function instructions() //The instructions will show
{
    document.getElementById("instructions").innerHTML = "Welcome, this game will generate a random number between parameters, which you will have to guess. <br> Please choose the difficulty level (easy:1-10, medium:1-25, hard:1-50), and enter your name.  <br> At the end of your guess, you may retry, update the score, or exit.";
}

function easy()
{
    document.getElementById("easyLvl").href = "easy.html";
}

function medium()
{
    document.getElementById("mediumLvl").href = "medium.html";
}

function hard()
{
    document.getElementById("hardLvl").href = "hard.html";
}

function exit() //If the user exits after they finish the game
{
    document.getElementById("end").href = "endPage.html";
}

function refresh() //Refeshes everything and goes back to main page
{
    document.getElementById("refreshButton").href = "project.html";
}

function retry(level) //Level is passed from the html page
{
    if(level == 1)
    {
        document.getElementById("easyRetry").href = "easy.html";
    }
    else if(level == 2)
    {
        document.getElementById("mediumRetry").href = "medium.html";
    }
    else if(level == 3)
    {
        document.getElementById("hardRetry").href = "hard.html";
    }
}
//End of navigation codes

function enterName()
{
    var nameOfPerson = prompt("What is your name?", "");

    document.getElementById("username").innerHTML = "Hi " + nameOfPerson + "!"; //For the main page
}

function selectBackground() //For user to type the background color they want
{
    var col = prompt("What color do you want?", "");
    col = col.toLowerCase();
    document.getElementById("bodyColorAndText").style.backgroundColor = col;
}

function adjustFontSize() //Changes the font size based on what the user selects from the drop-down menu in html
{
    var textSize = prompt("What fontsize do you want?" + "\n" + "\n" + "xx-small \n" + "x-small \n" + "small \n" + "medium \n" + "large \n" + "x-large \n" + "xx-large", "");
    textSize = textSize.toLowerCase();
    //Changes the text size of all the texts
    if(textSize == "xx-small")
    {
        document.getElementById("bodyColorAndText").style.fontSize = "xx-small";
        document.getElementById("boxDisplay").style.width = "45vw";
        document.getElementById("boxDisplay").style.height = "25vh";
    }
    if(textSize == "x-small")
    {
        document.getElementById("bodyColorAndText").style.fontSize = "x-small";
        document.getElementById("boxDisplay").style.width = "50vw";
        document.getElementById("boxDisplay").style.height = "30vh";
    }
    if(textSize == "small")
    {
        document.getElementById("bodyColorAndText").style.fontSize = "small";
        document.getElementById("boxDisplay").style.width = "55vw";
        document.getElementById("boxDisplay").style.height = "35vh";
    }
    if(textSize == "medium")
    {
        document.getElementById("bodyColorAndText").style.fontSize = "medium";
        document.getElementById("boxDisplay").style.width = "60vw";
        document.getElementById("boxDisplay").style.height = "40vh";
    }
    
    if(textSize == "large")
    {
        document.getElementById("bodyColorAndText").style.fontSize = "large";
        document.getElementById("boxDisplay").style.width = "65vw";
        document.getElementById("boxDisplay").style.height = "45vh";
    }
   
    if(textSize == "x-large")
    {
        document.getElementById("bodyColorAndText").style.fontSize = "x-large";
        document.getElementById("boxDisplay").style.width = "85vw";
        document.getElementById("boxDisplay").style.height = "65vh";
    }
    
    if(textSize == "xx-large")
    {
        document.getElementById("bodyColorAndText").style.fontSize = "xx-large";
        document.getElementById("boxDisplay").style.width = "105vw";
        document.getElementById("boxDisplay").style.height = "85vh";
    }
}

function guess(num) //The parameter of the level will be from the html. Name will be from the function enterName()
{
    var correctNum = randNum(num); //The number that the user has to try to guess
    var guessAttempts = 1;
    var guessedRight = false;
    var scoreDeduction = 0;
    var score = num;

    //Decides how much score points to deduct based on the difficulty of the level.
    if(num == 10)
    {
        scoreDeduction = 1;
    }
    else if(num == 25)
    {
        scoreDeduction = 2.5;
    }
    else
    {
        scoreDeduction = 5;
    }

    while (score > 0 && guessedRight == false)
    {
        var guessNum = parseInt(prompt("GuessAttempts:" + guessAttempts + "    " + "Score:" + score + "    " + "Please guess a number: ", ""));

        if(guessNum == correctNum)
        {
            guessedRight = true;
        }
        else
        {
            guessAttempts = guessAttempts + 1;
            score = score - scoreDeduction;
           
        }
    }

    if(guessedRight)
    {
        document.getElementById("displayGuess").innerHTML="<br>Guess is Correct!<br>"  + "<br>It took you " + guessAttempts + " guess(es)!<br>" + "<br>Your score is:" + score + "<br>" + "<br>Click \"Enter Guess\" to retry this level or click \"Refresh\" to choose a new level in the main page <br>";
    }
    else
    {
        document.getElementById("displayGuess").innerHTML="<br>Your guesses were wrong!<br>" + "<br>Click \"Enter Guess\" to retry this level or click \"Refresh\" to choose a new level in the main page<br>";
    }

}

function randNum(upTo) //Returns a random number from [1, upto]
{
    return Math.floor(Math.random() * upTo) + 1;
}
