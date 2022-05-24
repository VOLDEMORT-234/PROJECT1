const gamedata = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editplayer = 0;
let activeplayer = 0;
let currentround = 1;
let gameisover = false;
const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerconfigoverlay = document.getElementById("config1");

const backdropelement = document.getElementById("backdrop");

const editplayer1 = document.getElementById("edit-player1");

const editplayer2 = document.getElementById("edit-player2");

const cancelit = document.getElementById("cancelconfig");

const cancelit2 = document.getElementById("backdrop");

const formelement = document.querySelector("form");

const error = document.getElementById("config3");

editplayer1.addEventListener("click", openplayerconfig);
//very important event listner syntax
editplayer2.addEventListener("click", openplayerconfig);
//very important event listner syntax
cancelit.addEventListener("click", canelitonce);

cancelit2.addEventListener("click", canelitonce);

formelement.addEventListener("submit", formsave);

//submit is a built_in event listner
const startgame = document.getElementById("startgame");

startgame.addEventListener("click", gamey);

const gameboard = document.getElementById("game__");
const gamename = document.getElementById("active-player-name");

const won = document.getElementById("won");

// const gamefield = document.querySelectorAll("#game_board li");
//select all fiting element
//alterntive
const gameelement = document.getElementById("game_board");

// for (const gamefiel of gamefield) {
//   //every singal items
//   gamefiel.addEventListener("click", field);
// }

//alernative

gameelement.addEventListener("click", field);
