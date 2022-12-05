assert = chai.assert;

//function that checks whether the output is correct when the user correctly or incorrectly guesses for each mode of difficulty.
describe('Testing function guess() of project.js', function() {
  
 
 

  it('Test 1: Guess provides the appropriate output on easy mode (1 - 10) when the user correctly guesses the number 5 on their 6th attempt', () => {
    assert.equal(guessTester(10, 5, [1,2,3,4,6,5]),  '<br>Guess is Correct!<br><br>It took you 6 guess(es)!<br><br>Your score is:5<br><br>Click \"Enter Guess\" to retry this level or click \"Refresh\" to choose a new level in the main page <br>'
    );
  });

 

  it('Test 2: Guess provides the appropriate output on easy mode (1 - 10) when the user incorrectly guesses a number other than 5', () => {
    assert.equal(guessTester(10, 5, [1,1,2,3,4,6,7,8,9,10]),   "<br>Your guesses were wrong!<br>" + "<br>Click \"Enter Guess\" to retry this level or click \"Refresh\" to choose a new level in the main page<br>");
  });

 

  it('Test 3: Guess provides the appropriate output on medium mode (1 - 25) when the user correctly guesses the number 17 on their fourth attempt', () => {
    assert.equal(guessTester(25, 17, [1,5,25,17]),"<br>Guess is Correct!<br>"  + "<br>It took you " + 4 + " guess(es)!<br>" + "<br>Your score is:" + 17.5 + "<br>" + "<br>Click \"Enter Guess\" to retry this level or click \"Refresh\" to choose a new level in the main page <br>");
  });

 

  it('Test 4: Guess provides the appropriate output on medium mode (1 - 25) when the user incorrectly guesses a number other than 17', () =>{
     assert.equal(guessTester(25, 17, [1,5,25,18,19,20,21,22,23,24]),   "<br>Your guesses were wrong!<br>" + "<br>Click \"Enter Guess\" to retry this level or click \"Refresh\" to choose a new level in the main page<br>");
  });

 

  it('Test 5: Guess provides the appropriate output on hard mode (1 - 50) when the user correctly guesses the number 26 on their first attempt', () => {
    assert.equal(guessTester(50, 26, [26]),  "<br>Guess is Correct!<br>"  + "<br>It took you " + 1 + " guess(es)!<br>" + "<br>Your score is:" + 50 + "<br>" + "<br>Click \"Enter Guess\" to retry this level or click \"Refresh\" to choose a new level in the main page <br>");
  });
  
 

  it('Test 6: Guess provides the appropriate output on medium mode (1 - 50) when the user incorrectly guesses a number other than 26', () => {
    assert.equal(guessTester(50, 26,  [37,27,28,29,30,31,32,33,34,35,36]),   "<br>Your guesses were wrong!<br>" + "<br>Click \"Enter Guess\" to retry this level or click \"Refresh\" to choose a new level in the main page<br>");


  });
})

