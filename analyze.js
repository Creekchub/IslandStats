function getDataList() {
  let playerList = Object.keys(players);
  for(i = 0; i <= playerList.length - 1; i++) {
    let newData = document.createElement('option');

    newData.setAttribute('value', `${playerList[i]}`);
    document.getElementById(`datalistPlayers`).append(newData);
  }
}

function changeHead(playerChosen) {
  if(players[document.getElementById(`myPlayer${playerChosen}`).value] !== undefined) {
    document.getElementById(`head${playerChosen}`).src = `https://mc-heads.net/avatar/${document.getElementById(`myPlayer${playerChosen}`).value}/100`;
    document.getElementById(`name${playerChosen}`).innerHTML = document.getElementById(`myPlayer${playerChosen}`).value;
  }else {
    document.getElementById(`head${playerChosen}`).src = `https://mc-heads.net/avatar/Notch/100`;
    document.getElementById(`name${playerChosen}`).innerHTML = 'Notch'
  }
}
function setToBlanks(itt) {
  document.getElementById(`head${itt}`).src = `https://mc-heads.net/avatar/Notch/100`;
  document.getElementById(`name${itt}`).innerHTML = 'Notch'
  document.getElementById(`myPlayer${itt}`).value = ''
}

let dataRadar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
let radar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
let configRadar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
let pageContent = ``;
function generatePageContent() {
  let howManyDisplays =  document.getElementById('selectDis').value;
  howManyDisplays = parseInt(howManyDisplays);
  let number1 = 1;
  let number2 = 2;
  let number3 = 3;
  let number4 = 4;
  let graphNum = 1;
  for(a = 0; a < howManyDisplays; a++) {
    pageContent = pageContent + `
    <div class="panel">
      <div id="single-panel-target" class="single-panel">
        <div class="small-panel">
          <form class="search-form" id="thePlayer${number1}" onsubmit="return false">
            <input class="search-bar-player" id="myPlayer${number1}" type="text" placeholder="Add Player" list="datalistPlayers" autocomplete="off" onchange="changeHead('${number1}');" onclick="setToBlanks(${number1});">
            <datalist class="playerlister" id="datalistPlayers">
              <option>TheImpostor</option>
            </datalist>
          </form>
          <img class="head-image" src="https://mc-heads.net/avatar/cxost/100" id="head${number1}">
          <p class="text" id="name${number1}">cxost</p>
          <p class="text-coins" id="coinstext${number1}">8000<img class="text-coin-small" src="images/coin.webp"></p><br>
        </div>
        <div class="small-panel">
          <form class="search-form" id="thePlayer${number2}" onsubmit="return false">
            <input class="search-bar-player" id="myPlayer${number2}" type="text" placeholder="Add Player" list="datalistPlayers" autocomplete="off" onchange="changeHead('${number2}');" onclick="setToBlanks(${number2});">
          </form>
          <img class="head-image" src="https://mc-heads.net/avatar/cxost/100" id="head${number2}">
          <p class="text" id="name${number2}">cxost</p>
          <p class="text-coins" id="coinstext${number2}">8000<img class="text-coin-small" src="images/coin.webp"></p><br>
        </div>
        <div class="small-panel">
          <form class="search-form" id="thePlayer${number3}" onsubmit="return false">
            <input class="search-bar-player" id="myPlayer${number3}" type="text" placeholder="Add Player" list="datalistPlayers" autocomplete="off" onchange="changeHead('${number3}');" onclick="setToBlanks(${number3});">
          </form>
          <img class="head-image" src="https://mc-heads.net/avatar/cxost/100" id="head${number3}">
          <p class="text" id="name${number3}">cxost</p>
          <p class="text-coins" id="coinstext${number3}">8000<img class="text-coin-small" src="images/coin.webp"></p><br>
        </div>
        <div class="small-panel">
          <form class="search-form" id="thePlayer${number4}" onsubmit="return false">
            <input class="search-bar-player" id="myPlayer${number4}" type="text" placeholder="Add Player" list="datalistPlayers" autocomplete="off" onchange="changeHead('${number4}');" onclick="setToBlanks(${number4});">
          </form>
          <img class="head-image" src="https://mc-heads.net/avatar/cxost/100" id="head${number4}">
          <p class="text" id="name${number4}">cxost</p>
          <p class="text-coins" id="coinstext${number4}">8000<img class="text-coin-small" src="images/coin.webp"></p><br>
        </div>
        <div class="canvases">
          <canvas style="margin-left: 2%" id="radar${graphNum}" height="200" width="200"></canvas>
        </div>
        <div class="team-score">
          <p class="text">Team Score</p>
          <p id="teamScore${graphNum}" class="text-sub"><img style="opacity: 0;" class="text-coin-score" src="images/coin.webp">6000<img class="text-coin-score" src="images/coin.webp"></p>
        </div>
      </div>
    </div>
    `
    number1 = number1 + 4;
    number2 = number2 + 4;
    number3 = number3 + 4;
    number4 = number4 + 4;
    graphNum = graphNum + 1;
  }
  document.getElementById('bodyAnalyzer').innerHTML = document.getElementById('bodyAnalyzer').innerHTML + pageContent;
  for(a = 1; a < (howManyDisplays + 1); a++) {
    dataRadar[a] = {
      labels: ['SB', 'BB', 'TGTTOS', 'PKW', 'HITW'], //SKY BATTLE
      datasets: [{
        label: 'Low Coin Games x1.5',
        data: ['0', '0', '0', '0', '0'],
      },
    ],
    };
    configRadar[a] = {
      type: 'radar',
      data: dataRadar[a],
      options: {
        plugins: {
        },
        responsive: false,
        scales: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 600,
          }
        },
        legend: {
          labels: {
            fontColor: "blue",
          }
        }
      }
    };
    radar[a] = new Chart(
      document.getElementById(`radar${a}`),
       configRadar[a],
    );
  }
  //radar[1].data.datasets[0].data[0] = 500;
}