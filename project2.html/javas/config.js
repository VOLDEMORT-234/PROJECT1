function openplayerconfig(event) {
  const editplayer = +event.target.dataset.playerid; //data added to your attribute //+ is used to store a number
  playerconfigoverlay.style.display = "block";
  backdropelement.style.display = "block";
}
function canelitonce() {
  playerconfigoverlay.style.display = "none";
  backdropelement.style.display = "none";
  formelement.firstElementChild.classList.remove("error");
  error.textContent = "";
}
//important
function formsave(event) {
  event.preventDefault(); //javascript code relods again that can be prevented
  const formdata = new FormData(event.target); //from data is a fuction used to generate blue print
  const enterplayer = formdata.get("playername").trim(); //trim accesss white space and remove it front and after content

  if (!enterplayer) {
    event.target.firstElementChild.classList.add("error");
    error.textContent = "please enter valid name! ";
    error.style.color = "red";
    return;
  }

  const updatedplayerdata = document.getElementById(
    "player-" + editplayer + "-data"
  );

  if (editplayer == 1) {
    player[0].name = enterplayer;
  } else {
    player[1].name = enterplayer;
  }

  canelitonce();
}
//https://www.udemy.com/course/100-days-of-code-web-development-bootcamp/learn/lecture/27173188#overview
