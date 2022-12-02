// Navigating Between html files:
function instructions() //The instructions will show
{
    document.getElementById("instructions").href = "instructions.html";
}

function exitInstructions() //Go back to main page instructions
{
    document.getElementById("instructions").href ="project.html";
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

function exit()
{
    //Changes the html page to the "Game ended" page.

    document.getElementById("ending").href = "endPage.html";
}

function refresh()
{
    document.getElementById("ending").href = "project.html";
}
//End of navigation codes

function enterName()
{
    //Maybe something like an array for names to be kept track of in the scoreboard.
}

function selectBackground() //For user to type the background color they want
{
    var col = prompt("What color do you want?", "");
    col = col.toLowerCase();
    changeBackground(col);
}

function changeBackground(col) //Changes the background color *Maybe incorrect
{
    document.getElementById("background").style.backgroundColor = col;

    //*If this doesn't work then we can list a few options for what background color the user can change to, and the function uses an if-statement to change accordingly
}

function adjustFontSize(size) //Changes the font size based on what the user selects from the drop-down menu in html
{
    //Changes the text size of all the texts
    if(size == "xx-small")
    {
        document.getElementById("textChange") = "xx-small";
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

theScore = getElementById("score").innerHTML = ""; //Keep the score as a global variable. Will move this at the top soon.

function guess(num) //The parameter of the level will be from the html. Name will be from the function enterName()
{

    /* May also add something that switches to new html pages after the level is selected*/
    document.getElementById("heading").innerHTML = "The level you choose requires you to guess a number between 0 and " + num;

    var correctNum = randNum(num); //The number that the user has to try to guess
    var guessAttempts = 0;

    while (guessAttempts <= num && guessedRight == false)
    {
        var guess = parseInt(prompt("Please guess a number: ", ""));

        guessAttempts = guessAttempts + 1;

        if(guess == correctNum)
        {
            alert("guess is correct!");

            guessedRight == true;
        }
        else
        {
            alert("wrong");
        }
    }

    // if(guessedRight == false)
    
    // {
    //     theScore = theScore + name + ": " + (num - guessAttempts); //May change the scoring system 
    // }
}

function randNum(num)
{
    return Math.floor(Math.random() * num) + 1;
}


