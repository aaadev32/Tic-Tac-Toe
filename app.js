let gameBoard = {
    game: [2]

};

const gameDisplay = (function () {
    const gridBlock = document.getElementsByClassName('grid')
    Array.from(gridBlock).forEach(div => {
        div.addEventListener('click', function () {
            let blockId = document.getElementById(event.target);
            console.log(blockId);
            blockId.style.backgroundColor = 'black'; //test  ////////////
        });
    });
})();

//gives each player their turn
const playGame = (function  ()  {

    let temp = gameBoard.game.length;
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

playGame().play;