const btn = document.getElementById("btn");

function diceRoll() {
  // generate random number
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);

  //select dice img 1 and 2 and change src according to random value
  document
    .querySelectorAll("img")[0]
    .setAttribute("src", "images/dice_" + randomNumber1 + ".svg");

  document
    .querySelectorAll("img")[1]
    .setAttribute("src", "images/dice_" + randomNumber2 + ".svg");

  // if else statement for dice roll result
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}

btn.onclick = diceRoll;
