
const gameBoard = (() => {
    game = []
    playerX = [];
    playerO = [];
    //make a loop that takes the game array and displays the choices to the board through the grid ids
    for (i = 0; i < game.length; i++) {
        document.getElementById(`grid-${i}`).textContent = gameBoard.game.push(i);
    }

    const clear = () => {
        let gridDivs = document.getElementsByClassName('grid');
        game = [];
        playerX = [];
        playerO = [];
        Array.from(gridDivs).forEach(div => {
            div.textContent = '';
        });
    }

    return { game, playerX, playerO, clear };
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

    //arrays must be turned into strings using .toString to compare them


    const winCondition = () => {

        const conditions = (int) => {

            if (int == 0) {
                winInstance0 = ['grid-0', 'grid-1', 'grid-2'];
                let result = [...winInstance0];
                return result;
            } else if (int == 1) {
                winInstance1 = ['grid-2', 'grid-5', 'grid-8']
                let result = [...winInstance1];
                return result;
            } else if (int == 2) {
                winInstance2 = ['grid-8', 'grid-7', 'grid-6'];
                let result = [...winInstance2];
                return result;
            } else if (int == 3) {
                winInstance3 = ['grid-6', 'grid-3', 'grid-0'];
                let result = [...winInstance3];
                return result;
            } else if (int == 4) {
                winInstance4 = ['grid-0', 'grid-4', 'grid-8'];
                let result = [...winInstance4];
                return result;
            } else if (int == 5) {
                winInstance5 = ['grid-2', 'grid-4', 'grid-6'];
                let result = [...winInstance5];
                return result;
            } else if (int == 6) {
                winInstance6 = ['grid-1', 'grid-4', 'grid-7'];
                let result = [...winInstance6];
                return result;
            } else if (int == 7) {
                winInstance7 = ['grid-3', 'grid-4', 'grid-5'];
                let result = [...winInstance7];
                return result;
            }
        }

        let playerXResult = false;
        let playerOResult = false;
        let streak = 0;
        let instance = 0; // undefined??
        let instanceIndex = null;
        for (i = 0; i < 8; i++) {

            for (j = 0; j < playerX.length; j++) {

                instance = conditions(i);

                for (k = 0; k < instance.length; k++) {

                    instanceIndex = instance[k];

                    if (playerX[j].includes(instanceIndex) == true) {
                        streak++
                        console.log(`playerX streak ${streak}`)
                        if (streak == 3) {

                            return alert('player X wins!'), gameBoard.clear();
                        }
                    }

                }
            }
            streak = 0;

        }

        for (i = 0; i < 8; i++) {

            for (j = 0; j < playerO.length; j++) {

                instance = conditions(i);
                console.log(`playerO ${playerO[i]}`, `instance ${instance}`);

                for (k = 0; k < instance.length; k++) {

                    instanceIndex = instance[k];

                    if (playerO[j].includes(instanceIndex) == true) {
                        streak++
                        console.log(`playerO streak ${streak}`)

                        if (streak == 3) {
                            return alert('player O wins!'), gameBoard.clear();;
                        }
                    }
                }
            }
            streak = 0;

        }

        if (game.length >= 9) {
            if (playerOResult == false && playerXResult == false) {
                return alert('Its A Draw'), gameBoard.clear();;
            }

        }

    };
    return { play, playerPrompt, winCondition };
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
