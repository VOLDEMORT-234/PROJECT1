function resetgamestatus() {
  activeplayer = 0;
  currentround = 1;
  gameisover = false;
  won.firstElementChild.innerHTML =
    '<h2>YOU WON ,<span id="winner-name">PLAYER NAME</span></h2>';
  won.style.display = "none";
  let gameboardinde = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gamedata[i][j] = 0;

      gameelement.children[gameboardinde].textContent = "";
      gameelement.children[gameboardinde].classList.remove("disabled");
      gameboardinde++;
    }
  }
}

function gamey() {
  if (players[0].name && players[1].name) {
    resetgamestatus();
    gamename.textContent = players[activeplayer].name;
    gameboard.style.display = "block";
  } else {
    alert("please set players name!");

    return;
  }
}

function stwich() {
  if (activeplayer === 0) {
    activeplayer = 1;
  } else {
    activeplayer = 0;
  }
  gamename.textContent = players[activeplayer].name;
}

function field(event) {
  if (event.target.tagName !== "LI" || gameisover) {
    //list item
    return;
  }

  const selectedfield = event.target;

  const selectedcolumn = selectedfield.dataset.col - 1; //detact 1 will convert string to number
  const selectedrow = selectedfield.dataset.row - 1;

  if (gamedata[selectedrow][selectedcolumn] > 0) {
    alert("plese select an empty field");
  }
  selectedfield.textContent = players[activeplayer].symbol;
  selectedfield.classList.add("disabled");

  gamedata[selectedrow][selectedcolumn] = activeplayer + 1;

  const winner = checkforgameover();

  if (winner !== 0) {
    endgame(winner);
  }

  currentround++;
  stwich();
} //evnt object

function checkforgameover() {
  //checkingg row in equality
  for (let i = 0; i < 3; i++) {
    if (
      gamedata[i][0] > 0 &&
      gamedata[i][0] == gamedata[i][1] &&
      gamedata[i][2] == gamedata[i][1]
    ) {
      return gamedata[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gamedata[0][i] > 0 &&
      gamedata[0][i] == gamedata[1][i] &&
      gamedata[0][i] == gamedata[2][i]
    ) {
      return gamedata[0][i];
    }
  }
  if (
    gamedata[0][0] > 0 &&
    gamedata[0][0] == gamedata[1][1] &&
    gamedata[1][1] == gamedata[2][2]
  ) {
    return gamedata[0][0];
  }

  if (
    gamedata[0][2] > 0 &&
    gamedata[0][2] == gamedata[1][1] &&
    gamedata[1][1] == gamedata[2][0]
  ) {
    return gamedata[0][2];
  }
  if (currentround === 9) {
    return -1;
  }
  return 0;
}

function endgame(winner) {
  won.style.display = "block";
  if (winner > 0) {
    const winnername = players[winner - 1].name;
    won.firstElementChild.firstElementChild.textContent = winnername;
  } else {
    won.firstElementChild.textContent = "It's a draw";
  }
  gameisover = true;
}
