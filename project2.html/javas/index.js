let editplayer = 0;

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
