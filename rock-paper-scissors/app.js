const computerChoice = document.getElementById ( 'computer-choice' );
const playerChoice = document.getElementById ( 'player-choice' );
const result = document.getElementById ( 'result' );
const choices = document.querySelectorAll ( 'button' );

choices.forEach ( choice => {
    choice.addEventListener ( 'click', function ( event ) {
        const playerSelection = event.target.id;
        const computerSelection = computerPlay ();
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        result.textContent = playRound ( playerSelection, computerSelection );
    });
});

function computerPlay () {
    const choices = [ 'rock', 'paper', 'scissors' ];
    return choices [ Math.floor ( Math.random () * choices.length )];
}

function playRound ( playerSelection, computerSelection ) {
    if ( playerSelection === computerSelection ) {
        return 'It\'s a tie!';
    } else if (
        ( playerSelection === 'rock' && computerSelection === 'scissors' ) ||
        ( playerSelection === 'paper' && computerSelection === 'rock' ) ||
        ( playerSelection === 'scissors' && computerSelection === 'paper' )
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}



