const beats = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

let playerScore = 0;
let cpuScore = 0;

document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const playerChoice = btn.dataset.choice;
        const cpuChoice = getRandomChoice();
        updateChoices(playerChoice, cpuChoice);
        updateScore(playerChoice, cpuChoice);
    });
});

document.getElementById('reset-btn').addEventListener('click', () => {
    playerScore = 0;
    cpuScore = 0;
    document.getElementById('player-score').textContent = 0;
    document.getElementById('cpu-score').textContent = 0;
    document.getElementById('player-choice').textContent = '';
    document.getElementById('cpu-choice').textContent = '';
    const resultElement = document.getElementById('round-result');
    resultElement.textContent = '';
    resultElement.className = '';
});

function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateChoices(playerChoice, cpuChoice) {
    document.getElementById('player-choice').textContent = playerChoice;
    document.getElementById('cpu-choice').textContent = cpuChoice;
}

function updateScore(playerChoice, cpuChoice) {
    const resultElement = document.getElementById('round-result');

    if (playerChoice === cpuChoice) {
        resultElement.textContent = "It's a tie!";
        resultElement.className = 'tie';
    } else if (beats[playerChoice] === cpuChoice) {
        resultElement.textContent = "You win!";
        resultElement.className = 'win';
        document.getElementById('player-score').textContent = ++playerScore;
    } else {
        resultElement.textContent = "CPU wins!";
        resultElement.className = 'lose';
        document.getElementById('cpu-score').textContent = ++cpuScore;
    }
}