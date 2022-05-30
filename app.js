const gameBoard = (function () {
    game = [1, 2]
    return game;
})();

//gives each player their turn
const playRound = (function  ()  {

    let temp = game.length;
    console.log(temp);
    let turnNumber = parseInt(temp + 1);

    const whosTurn = (turnNumber) => {
        if (turnNumber % 2 == 0) {
            return false;
        } else {
            return true;
        }
    }
    console.log(whosTurn(turnNumber));

    const play = () => {
        //display player X or O's turn
        if (whosTurn(turnNumber) == true) {
            document.getElementById('player-x').textContent = `Player X's Turn`; //test
        } else if(whosTurn(turnNumber) == false){
            document.getElementById('player-o').textContent = `Player O's Turn`;
        }
    }

    return play;
})();

//if we’re writing any sort of game, we’re probably going to want objects to describe our players and encapsulate all of the things our players can do (functions!).
const player = (move) => {
    return () => {
        let playerX = [];
        let playerO = [];
    };
};

//controls the execution of functions when the player is interacting with the playable board
const gameDisplay = (function () {
    const gridBlock = document.getElementsByClassName('grid')
    Array.from(gridBlock).forEach(div => {

        div.addEventListener('click', function () {

            let blockId = div.id;

            if(playRound.play == false){
                div.textContent = 'X';
                playerX.push(blockId);
            }else {
                div.textContent = 'O';
                playerY.push(blockId);
            }
            playRound().play;

        });
    });
})();

playRound().play; //shows player turn immediatley upon page render
