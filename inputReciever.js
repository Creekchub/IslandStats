let playerSearch;
let playerQuery = 'default';

function storeSearchValue() {
  playerSearch = document.getElementById("myPlayer").value;
  console.log(playerSearch);
  sessionStorage.setItem('playerQuery', playerSearch);
}

function playerWindow() {
  window.location.href = "players.html";
}
