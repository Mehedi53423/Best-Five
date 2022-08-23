const bestFive = [];
let j = 1;

// Select Any Five
function selectPlayer(playerName) {
  const list = document.getElementById("playerList");
  const li = document.createElement("li");
  li.innerHTML = `<span class="text-gray-300 pr-2">${j++}.</span> ${playerName}`;
  if (bestFive.length !== 5) {
    bestFive.push(li);
  }

  for (let i = 0; i < 5; i++) {
    list.appendChild(bestFive[i]);
  }
}

// Players
function cristianoRonaldo() {
  let btn = document.getElementById("cristianoRonaldo");
  if (bestFive.length >= 5) {
    alert("You Only Can Select Five Players");
  } else {
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
  }
  selectPlayer("Cristiano Ronaldo");
}

function lionelMessi() {
  let btn = document.getElementById("lionelMessi");
  if (bestFive.length >= 5) {
    alert("You Only Can Select Five Players");
  } else {
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
  }
  selectPlayer("Lionel Messi");
}

function mbappe() {
  let btn = document.getElementById("mbappe");
  if (bestFive.length >= 5) {
    alert("You Only Can Select Five Players");
  } else {
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
  }
  selectPlayer("Mbappe");
}

function neymar() {
  let btn = document.getElementById("neymar");
  if (bestFive.length >= 5) {
    alert("You Only Can Select Five Players");
  } else {
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
  }
  selectPlayer("Neymar");
}
function ronaldo() {
  let btn = document.getElementById("ronaldo");
  if (bestFive.length >= 5) {
    alert("You Only Can Select Five Players");
  } else {
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
  }
  selectPlayer("Ronaldo");
}
function ronaldinho() {
  let btn = document.getElementById("ronaldinho");
  if (bestFive.length >= 5) {
    alert("You Only Can Select Five Players");
  } else {
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
  }
  selectPlayer("Ronaldinho");
}

// Calculations
function calculate() {
  const perPlayer = document.getElementById("perPlayer").value;
  const playerExpenses = document.getElementById("playerExpenses");
  playerExpenses.innerText = bestFive.length * parseFloat(perPlayer);
}

function total() {
  const perPlayer = document.getElementById("perPlayer").value;
  const manager = document.getElementById("manager").value;
  const coach = document.getElementById("coach").value;
  const total = document.getElementById("total");
  total.innerText =
    bestFive.length * parseFloat(perPlayer) +
    parseFloat(manager) +
    parseFloat(coach);
}
