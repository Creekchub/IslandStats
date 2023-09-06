let playerSearch;
let playerQuery = 'default';

function storeSearchValue() {
  playerSearch = document.getElementById("myPlayer").value;
  sessionStorage.setItem('playerQuery', playerSearch);
}

function playerWindow() {
  let currentSelPlayer = sessionStorage.getItem('playerQuery');
  window.location.href = `player.html?player=${currentSelPlayer}`;
}
