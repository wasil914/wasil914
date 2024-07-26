// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const board = document.getElementById('board');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restart');

    let currentPlayer = 'X';
    let gameState = Array(9).fill(null);
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    restartButton.addEventListener('click', restartGame);

    function handleCellClick(event) {
        const cell = event.target;
        const cellIndex = cell.getAttribute('data-index');

        if (gameState[cellIndex] !== null || checkWin() || checkDraw()) {
            return;
        }

        cell.innerText = currentPlayer;
        gameState[cellIndex] = currentPlayer;

        if (checkWin()) {
            message.innerText = `${currentPlayer} wins!`;
        } else if (checkDraw()) {
            message.innerText = `It's a draw!`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.innerText = `It's ${currentPlayer}'s turn`;
        }
    }

    function checkWin() {
        return winningConditions.some(condition => {
            const [a, b, c] = condition;
            return gameState[a] !== null && gameState[a] === gameState[b] && gameState[a] === gameState[c];
        });
    }

    function checkDraw() {
        return gameState.every(cell => cell !== null);
    }

    function restartGame() {
        gameState = Array(9).fill(null);
        currentPlayer = 'X';
        message.innerText = `It's ${currentPlayer}'s turn`;
        cells.forEach(cell => {
            cell.innerText = '';
        });
    }
});
