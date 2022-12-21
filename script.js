// a total win variable to store user wins ties and losses
var wins = 0;
var ties = 0;
var losses = 0;
// var winner = '';

// function to start and loop the game
function loop () {
    if (game === true) {
        var playerChoice = prompt('Enter R, P, S');
        gameLogic(playerChoice);
    }
}

function gameLogic (playerChoice) {
    // generate a choice for the computer
    var possibleChoices = ['r', 'p', 's'];
    var computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
    // comparing player with computer 
    // win conditions
    console.log('player\'s chose ' + playerChoice, 'computer has ' + computerChoice);

    if (playerChoice === 'r' && computerChoice === 's' ||
        playerChoice === 's' && computerChoice === 'p' ||
        playerChoice === 'p' && computerChoice === 'r' ) {
        alert("you win!");
        wins += 1;
    }
    // tie conditions
    if (playerChoice === 'r' && computerChoice === 'r' ||
        playerChoice === 's' && computerChoice === 's' ||
        playerChoice === 'p' && computerChoice === 'p' ) {
        alert('it is a tie!');
        ties += 1;
    }
    // lose conditions
    if (playerChoice === 's' && computerChoice === 'r' ||
        playerChoice === 'p' && computerChoice === 's' ||
        playerChoice === 'r' && computerChoice === 'p' ) {
        alert('you lose!');
        losses += 1;
    }
    alert('you have ' + wins + ' wins, ' + ties + ' ties, and ' + losses + ' losses.');
    if (confirm("do you want to play again?")) {
        loop();
    }
}

// ask user do you want to play a game
var game = confirm("do you want to play a game?");
loop();

