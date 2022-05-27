let gameBoard = {
    game: []

};

const gameDisplay = (function () {
    const gridBlock = document.getElementsByClassName('grid')
    Array.from(gridBlock).forEach(div => {
        div.addEventListener('click', function () {
            let blockId = document.getElementById(event.target);
            console.log(blockId);
            blockId.style.backgroundColor = 'black'; //test
        });
    });
})();

//gives each player their turn
const playGame = (function  ()  {

    let temp = gameBoard.game.length;
    let turnNumber = parseInt(temp);

    const whosTurn = (turnNumber) => {
        if (turnNumber + 1 % 2 == 0) {
            return false;
        } else {
            return true;
        }
    }

    const play = () => {
        //display player X or O's turn
        let turnNumber = gameBoard.game.length;
        if (whosTurn(turnNumber) == true) {
            document.getElementById('player-x').style.backgroundColor = 'black'; //test
        }
    }

    return play;
})();

playGame().play;