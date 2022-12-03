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

// function exit() //If player decides to exit in the middle of the game
// {
//     score = 0; //This could also mean the user gave up, making their score automatically 0.
//     //Changes the html page to the "Game ended" page.
//     document.getElementById("end").href = "endPage.html";
// }

function exit() //If the user exits after they finish the game with a score
{
    document.getElementById("end").href = "endPage.html";
}

function showInfo() //Show information about the score, the user, etc
{
    document.getElementById("theScore").innerHTML="Game has ended!  Score:" + score;
}

function refresh() //Refeshes everything and goes back to main page
{
    document.getElementById("ending").href = "project.html";
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

var nameOfPerson = ""; //Making this a global variable so other functions can keep track of the name.
function enterName()
{
    nameOfPerson = prompt("What is your name?", "");
}
function selectBackground() //For user to type the background color they want
{
    var col = prompt("What color do you want?", "");
    col = col.toLowerCase();
    document.getElementById("bodyColor").style.backgroundColor = col;
}

function adjustFontSize(size) //Changes the font size based on what the user selects from the drop-down menu in html
{
    //Changes the text size of all the texts
    if(size == "xx-small")
    {
        document.getElementById("displayGuess") = "xx-small";
    }
    if(size == "x-small")
    {
        document.getElementById("textChange") = "x-small";
    }
    if(size == "small")
    {
        document.getElementById("textChange") = "small";
    }
    if(size == "medium")
    {
        document.getElementById("textChange") = "medium";
    }
    
    if(size == "large")
    {
        document.getElementById("textChange") = "large";
    }
   
    if(size == "x-large")
    {
        document.getElementById("textChange") = "x-large";
    }
    
    if(size == "xx-large")
    {
        document.getElementById("textChange") = "xx-large";
    }
}

var score = 0; //Score is 0 when the game starts.
function guess(num) //The parameter of the level will be from the html. Name will be from the function enterName()
{
    var correctNum = randNum(num); //The number that the user has to try to guess
    var guessAttempts = 1;
    var guessedRight = false;
    var scoreDeduction = 0;
    score = num;

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
        var guessNum = parseInt(prompt("User:" + correctNum + nameOfPerson + "    " + "GuessAttempts:" + guessAttempts + "    " + "Score:" + score + "    " + "Please guess a number: ", ""));
        guessAttempts = guessAttempts + 1;
        if(guessNum == correctNum)
        {
            guessedRight = true;
        }
        else
        {
            score = score - scoreDeduction;
           
        }
    }

    if(guessedRight)
    {
        document.getElementById("displayGuess").innerHTML="Guess is Correct!";
    }
    else
    {
        document.getElementById("displayGuess").innerHTML="Your guesses were wrong!";
    }

    // if(num == 10)
    // {
    //     document.getElementById("switchHTML").href = "guess.html";
    // }
    // else if(num == 25)
    // {
    //     document.getElementById("switchHTML").href = "guess2.html";
    // }
    // else
    // {
    //     document.getElementById("switchHTML").href = "guess3.html";
    // }
}

function randNum(upTo) //Returns a random number from [1, upto]
{
    return Math.floor(Math.random() * upTo) + 1;
}