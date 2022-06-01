
const gameBoard = (function () {
    game = []
    playerX = [];
    playerO = [];
    //make a loop that takes the game array and displays the choices to the board through the grid ids
    for (i = 0; i < game.length; i++) {
        document.getElementById(`grid-${i}`).textContent = gameBoard.game.push(i);
    }


    return game, playerX, playerO;
})();

//gives each player their turn
const play = () => {

    let temp = game.length;
    let turnNumber = parseInt(temp + 1);

    const whosTurn = () => {
        if (turnNumber % 2 == 0) {
            return false;
        } else {
            return true;
        }
    }

    const playerPrompt = () => {
        //display player X or O's turn
        if (whosTurn(turnNumber) == true) {

            document.getElementById('prompt').textContent = '';
            document.getElementById('prompt').textContent = `Player X's Turn`;
            console.log(`player-x turn`);

            return true;
        } else if (whosTurn(turnNumber) == false) {

            document.getElementById('prompt').textContent = '';
            document.getElementById('prompt').textContent = `Player O's Turn`;
            console.log(`player-o turn`);

            return false;
        }

    };

    const arrayComparison = (playerArr, winInstance) => {
        let streak = 0;

        for (let i = 0; i < winInstance.length; i++) {
            for (let j = 0; j < playerArr.length; i++) {

                console.log(playerArr[j], winInstance[i]);
                console.log(playerArr[j] === winInstance[i]);

                if (playerArr[j] === winInstance[i]) { //always true fix plz
                    streak++;
                    console.log('streak')
                }

                if (streak === 3) {
                    return true;
                }else return 1;
            }
        }
        streak = 0;
        return false;
    };


    const winCondition = () => {

        const winInstance0 = ['grid-0', 'grid-1', 'grid-2'];
        const winInstance1 = ['grid-2', 'grid-5', 'grid-8']
        const winInstance2 = ['grid-8', 'grid-7', 'grid-6'];
        const winInstance3 = ['grid-6', 'grid-3', 'grid-0'];
        const winInstance4 = ['grid-0', 'grid-4', 'grid-8'];
        const winInstance5 = ['grid-2', 'grid-4', 'grid-6'];
        const winInstance6 = ['grid-1', 'grid-4', 'grid-7'];
        const winInstance7 = ['grid-3', 'grid-4', 'grid-5'];
        const instanceArr = [winInstance0, winInstance1, winInstance2, winInstance3, winInstance4, winInstance5, winInstance6, winInstance7,]
        let playerXResult = false;
        let playerOResult = false;

        for (let i = 0; i < 8; i++) {
            console.log(playerX, instanceArr[i]);
            if (arrayComparison(playerX, instanceArr[i]) == true) {
                playerXResult = true;
                console.log('arraycomparison is working!')
                return alert('Player X Wins!')
            }
        }

        for (let i = 0; i < 8; i++) {
            if (arrayComparison(playerO, instanceArr[i]) == true) {
                console.log('arraycomparison is working!')
                playerOResult = true;
                return alert('Player O Wins!')
            }
        }

        if (game.length >= 9) {
            if (playerOResult == false && playerXResult == false) {
                return alert('Its A Draw');
            }

        }

    };

    return { playerPrompt, winCondition, arrayComparison };
};

const playerFactory = (move) => {

    const playerXMove = (move) => { playerX.push(move), game.push(move); }
    const playerOMove = (move) => { playerO.push(move), game.push(move); }

    return { playerXMove, playerOMove }
};


const gameDisplay = (function () {
    const gridBlock = document.getElementsByClassName('grid')
    Array.from(gridBlock).forEach(div => {

        div.addEventListener('click', function () {

            let blockId = div.id;
            console.log(blockId)
            if (div.firstChild != null) {
                alert('please select an empty box')
                return 1;
            } else if (play().playerPrompt() == true) {

                div.textContent = 'X';
                playerFactory().playerXMove(blockId);

            } else if (play().playerPrompt() == false) {

                div.textContent = 'O';
                playerFactory().playerOMove(blockId);

            }
            console.log(game, playerX, playerO);
            play().winCondition();

        });
    });
})();

//line 54