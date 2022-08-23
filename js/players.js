const bestFive = [];
let j = 1;

function selectPlayer(playerName) {
  const list = document.getElementById("playerList");
  const li = document.createElement("li");
  li.innerHTML = `${j++}. ${playerName}`;
  bestFive.push(li);

  for (let i = 0; i < 5; i++) {
    list.appendChild(bestFive[i]);
  }
}

function cristianoRonaldo() {
  let btn = document.getElementById("cristianoRonaldo");
  btn.disabled = true;
  btn.style.backgroundColor = "gray";
  selectPlayer("Cristiano Ronaldo");
}

function lionelMessi() {
  let btn = document.getElementById("lionelMessi");
  btn.disabled = true;
  btn.style.backgroundColor = "gray";
  selectPlayer("Lionel Messi");
}

function mbappe() {
  let btn = document.getElementById("mbappe");
  btn.disabled = true;
  btn.style.backgroundColor = "gray";
  selectPlayer("Mbappe");
}

function neymar() {
  let btn = document.getElementById("neymar");
  btn.disabled = true;
  btn.style.backgroundColor = "gray";
  selectPlayer("Neymar");
}
function ronaldo() {
  let btn = document.getElementById("ronaldo");
  btn.disabled = true;
  btn.style.backgroundColor = "gray";
  selectPlayer("Ronaldo");
}
function ronaldinho() {
  let btn = document.getElementById("ronaldinho");
  btn.disabled = true;
  btn.style.backgroundColor = "gray";
  selectPlayer("Ronaldinho");
}
