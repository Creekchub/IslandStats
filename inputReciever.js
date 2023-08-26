let playerSearch;
let playerQuery = 'default';

function storeSearchValue() {
  playerSearch = document.getElementById("myPlayer").value;
  console.log(playerSearch);
  sessionStorage.setItem('playerQuery', playerSearch);
}

function playerWindow() {
  let currentSelPlayer = sessionStorage.getItem('playerQuery');
  window.location.href = `players.html?player=${currentSelPlayer}`;
}
