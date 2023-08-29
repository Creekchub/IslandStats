function getDataList() {
  let playerList = Object.keys(players);
  for(i = 0; i <= playerList.length - 1; i++) {
    let newData = document.createElement('option');

    newData.setAttribute('value', `${playerList[i]}`);
    document.getElementById(`datalistPlayers`).append(newData);
  }
}

function getStatsA(currentP, currentS) {
  let playerRN = document.getElementById(`nameD${currentP}S${currentS}`).innerHTML;
  let countRound = 0;
  let totalCoins = 0;
  let coinsTourneyDisplay = '';
  let appendCount = 0;
  let appendCount1 = 0;

  let teamCoins = 0;

  if(players[playerRN] !== undefined) {
  for(a = 0; a < serversA.length; a++) {
    if(players[playerRN][serversA[a]] !== undefined) {
      let roundArray = Object.keys(players[playerRN][serversA[a]]);
      for(b = 0; b < roundArray.length; b++) {
        if(players[playerRN][serversA[a]][roundArray[b]] !== undefined) {
            if((document.getElementById('noncanonCheckbox').checked && servers[serversA[a]][roundArray[b]].canon === false) || servers[serversA[a]][roundArray[b]].canon === undefined) {
              if((players[playerRN][serversA[a]][roundArray[b]].sub === true && document.getElementById('subCheckbox').checked) || players[playerRN][serversA[a]][roundArray[b]].sub === undefined) {
                countRound++;
                let coinsTourney = 0;
                for(c = 0; c < games.length; c++) {
                  let gameCoins = 0;
                  if(players[playerRN][serversA[a]][roundArray[b]][games[c]] !== undefined) {
                    gameCoins = players[playerRN][serversA[a]][roundArray[b]][games[c]];
                    if(games[c] == 'sb' || games[c] == 'pkw') { // MAINTAINENCE FOR MORE MODDED GAMES
                      gameCoins = Math.round(gameCoins * 1.5);
                    }
                    totalCoins = totalCoins + Math.round(gameCoins / servers[serversA[a]][roundArray[b]].rounds);
                    coinsTourney = coinsTourney + gameCoins;
                  }
                }coinsTourneyDisplay = coinsTourneyDisplay + `${coinsTourney} `;
                appendCount++;
                appendCount1++;
              }
            }
        }
      }
    }
  }
  if(coinsTourneyDisplay !== '') {
    document.getElementById(`coinstextD${currentP}S${currentS}`).innerHTML = `${Math.round(totalCoins / countRound)}<img class="text-coin-small" src="images/coin.webp">`;
  }else {
    document.getElementById(`coinstextD${currentP}S${currentS}`).innerHTML = '0<img class="text-coin-small" src="images/coin.webp">'
  }
}
}

function changeHead(currentPanel, currentSmall) {
  if(players[document.getElementById(`myPlayerD${currentPanel}S${currentSmall}`).value] !== undefined) {
    document.getElementById(`headD${currentPanel}S${currentSmall}`).src = `https://mc-heads.net/avatar/${document.getElementById(`myPlayerD${currentPanel}S${currentSmall}`).value}/100`;
    document.getElementById(`nameD${currentPanel}S${currentSmall}`).innerHTML = document.getElementById(`myPlayerD${currentPanel}S${currentSmall}`).value;

    //let playerNameCurrent = document.getElementById(`myPlayerD${currentPanel}S${currentSmall}`).value;
    //console.log(playerNameCurrent);
    //console.log(parseInt(document.getElementById('teamNumberCount').value));

    getStatsA(currentPanel, currentSmall);
  }else {
    document.getElementById(`headD${currentPanel}S${currentSmall}`).src = `https://mc-heads.net/avatar/Notch/100`;
    document.getElementById(`nameD${currentPanel}S${currentSmall}`).innerHTML = 'Notch'
  }
}

function setToBlanks(currentPanel, currentSmall) {
  document.getElementById(`headD${currentPanel}S${currentSmall}`).src = `https://mc-heads.net/avatar/Notch/100`;
  document.getElementById(`nameD${currentPanel}S${currentSmall}`).innerHTML = 'Notch'
  document.getElementById(`myPlayerD${currentPanel}S${currentSmall}`).value = ''
}

function changeHeadAll() {
   for(aDee = 0; aDee < document.getElementById('selectDis').value; aDee++) {
    let teamTotalScore = 0;
     for(bDee = 0; bDee < document.getElementById('teamNumberCount').value; bDee++) {
       getStatsA(aDee, bDee);
     }
   }
 }

let dataRadar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
let radar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
let configRadar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
function generatePageContent() {
  let pageContent = ``;
  let howManyDisplays =  document.getElementById('selectDis').value;
  howManyDisplays = parseInt(howManyDisplays);
  let number1 = 1;
  let number2 = 2;
  let number3 = 3;
  let number4 = 4;
  let graphNum = 1;
  for(a = 0; a < howManyDisplays; a++) {
    pageContent = pageContent + `<div class="panel">
    <div id="single-panel-target" class="single-panel">`
    for(b = 0; b < parseInt(document.getElementById('teamNumberCount').value); b++) {
      pageContent = pageContent + `
      <div class="small-panel">
      <form class="search-form" id="thePlayerD${a}S${b}" onsubmit="return false">
        <input class="search-bar-player" id="myPlayerD${a}S${b}" type="text" placeholder="Add Player" list="datalistPlayers" autocomplete="off" onchange="changeHead(${a}, ${b});" onclick="setToBlanks(${a}, ${b}); changeHeadAll();">
        <datalist class="playerlister" id="datalistPlayers">
          <option>TheImpostor</option>
        </datalist>
      </form>
      <img class="head-image" src="https://mc-heads.net/avatar/Notch/100" id="headD${a}S${b}">
      <p class="text" id="nameD${a}S${b}">Notch</p>
      <p class="text-coins" id="coinstextD${a}S${b}">0<img class="text-coin-small" src="images/coin.webp"></p><br>
    </div>
    `
    }pageContent = pageContent + `
    <div class="canvases">
          <canvas style="margin-left: 2%" id="radar${a}" height="200" width="200"></canvas>
        </div>
        <div class="team-score">
          <p class="text-sub">Team Score</p>
          <p id="teamScore${a}" class="text-sub"><img style="opacity: 0;" class="text-coin-score" src="images/coin.webp">0<img class="text-coin-score" src="images/coin.webp"></p>
        </div>
    `
    
    pageContent = pageContent + `</div>
    </div><br>`
  }
  document.getElementById('bigDiv').innerHTML = '';
  document.getElementById('bigDiv').innerHTML = pageContent;
  for(a = 0; a < howManyDisplays; a++) {
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
  radar[0].data.datasets[0].data[0] = 500;
  radar[0].update();
}