let currentPlayer = null;
let players = [];
let rounds = 0;
const maxRounds = 1000;
let timer = null;
let timeLeft = 30;
let lives=3;
let points=0;
async function loadPlayers() {
  const response = await fetch("./players.json");
  players = await response.json();
  startRound();
}
function displaylives(){
  document.getElementById("life").innerHTML=`lives left: ${lives}`;
}

function startRound() {

  clearInterval(timer);
  if (rounds >= maxRounds || lives===0) {
    document.getElementById("data").innerText = `Game Over, your result: ${points}`;
    document.getElementById("timer").innerText = "";
    document.getElementById("result").innerHTML=""
    lives=3;
    return;
  }

  const randomIndex = Math.floor(Math.random() * players.length);
  currentPlayer = players[randomIndex];

  document.getElementById("data").innerText =
    `Hints: ${currentPlayer.Position}, ${currentPlayer.Club}, ${currentPlayer.League}, ${currentPlayer.Nationality},${currentPlayer.Age}`;
  console.log(currentPlayer.Name)
  document.getElementById("guess").value = "";
  document.getElementById("result").innerText = "";

  displaylives();
  timeLeft = 30;
  document.getElementById("timer").innerText = `Time: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("result").innerText =
        `Time is up, ${currentPlayer.Name}`;
      rounds++;
      lives--;
      setTimeout(startRound, 2000); 
      displaylives();
    }
  }, 1000);
}

document.getElementById("submit").addEventListener("click", () => {
  const guess = document.getElementById("guess").value.trim().toLowerCase();
  if (!currentPlayer) return;

  clearInterval(timer); 

  if (guess === currentPlayer.Name.toLowerCase()) {
    document.getElementById("result").innerText = "✅";
    points++;
  } else {
    document.getElementById("result").innerText = `❌ this player was ${currentPlayer.Name}`;
    lives--;
    displaylives();
  }

  rounds++;
  setTimeout(startRound, 1500); 
});
loadPlayers();

