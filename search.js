
let servers = {
  iw: {
    1: {
      rounds: 4
    },
    2: {
      rounds: 3
    },
    ChosenTeams: {
      rounds: 3,
      canon: false
    }
  },
  it: {
    1: {
      rounds: 4
    },
    2: {
      rounds: 4
    }
  }
}

serverNames = {
  iw: {
    ac: 'IW',
    full: 'Island Warriors'
  },
  //ib: IB,
  it: {
    ac: 'IT',
    full: 'Island Tournaments'
  }
}

gameMods = {
  sb: {
    mod: 1.5
  },
  pkw: {
    mod: 1.5
  }
}

let modifiers = ['noncanon']


gameColors = {
  sb: '#FF0000',
  tgttos: '#FF8700',
  bb: '#1BC419',
  hitw: '#00E4FF',
  pkw: '#FF00E4',
}

let serversA = Object.keys(servers);

let games = ['sb', 'tgttos', 'hitw', 'bb', 'pkw'];

//console.log(`Ruderrr's score is: ${ruderrr.ib[1].tgttos}`); //normal call
let player = sessionStorage.getItem('playerQuery'); //user INPUTS FOR TEST

function getStats() {
  let countRound = 0;
  let totalCoins = 0;
  let coinsTourneyDisplay = '';
  let appendCount = 0;
  let appendCount1 = 0;
  document.getElementById('displayDivDis2').innerHTML = '';
  document.getElementById('displayDivDis1').innerHTML = '';

  let roundSelect = document.getElementById('selectBox').value

  for(a = 0; a < serversA.length; a++) {
    if(players[player][serversA[a]] !== undefined) {
      let roundArray = Object.keys(players[player][serversA[a]]);
      for(b = 0; b < roundArray.length; b++) {
        if(players[player][serversA[a]][roundArray[b]] !== undefined) {
          if(roundSelect == servers[serversA[a]][roundArray[b]].rounds) {
            if((document.getElementById('noncanonCheck').checked && servers[serversA[a]][roundArray[b]].canon === false) || servers[serversA[a]][roundArray[b]].canon === undefined) {
              if((players[player][serversA[a]][roundArray[b]].sub === true && document.getElementById('subCheck').checked) || players[player][serversA[a]][roundArray[b]].sub === undefined) {
                countRound++;
                let coinsTourney = 0;
                for(c = 0; c < games.length; c++) {
                  let gameCoins = 0;
                  if(players[player][serversA[a]][roundArray[b]][games[c]] !== undefined) {
                    gameCoins = players[player][serversA[a]][roundArray[b]][games[c]];
                    if(games[c] == 'sb' || games[c] == 'pkw') { // MAINTAINENCE FOR MORE MODDED GAMES
                      gameCoins = Math.round(gameCoins * 1.5);
                    }
                    totalCoins = totalCoins + gameCoins;
                    coinsTourney = coinsTourney + gameCoins;
                  }
                }coinsTourneyDisplay = coinsTourneyDisplay + `${coinsTourney} `;

                appendCount++;
                let oneRoundCoins = document.createElement('p');
                oneRoundCoins.setAttribute('class', 'displayDivText');
                oneRoundCoins.setAttribute('id', `coinTextAppend${appendCount}`);
                if(servers[serversA[a]][roundArray[b]].canon === false) {
                  oneRoundCoins.setAttribute('style', 'color:orange');
                }
                document.getElementById('displayDivDis2').append(oneRoundCoins);
                document.getElementById(`coinTextAppend${appendCount}`).innerHTML = `${coinsTourney}<img src="images/coin.webp" class="coinImage">`;
                if(players[player][serversA[a]][roundArray[b]].sub) {
                  console.log('TRIGER')
                  document.getElementById(`coinTextAppend${appendCount}`).innerHTML = document.getElementById(`coinTextAppend${appendCount}`).innerHTML + '<p class="subTag">Sub</p>'
                }

                appendCount1++;
                let oneRoundTag = document.createElement('p');
                oneRoundTag.setAttribute('id', `coinTag${appendCount1}`);
                oneRoundTag.setAttribute('class', 'displayDivText');
                document.getElementById('displayDivDis1').append(oneRoundTag);
                document.getElementById(`coinTag${appendCount1}`).innerHTML = `${serverNames[serversA[a]].full} - ${roundArray[b]}`
              }
            }
            /*countRound++;
            for(c = 0; c < games.length; c++) {
              let gameCoins = 0;
              if(players[player][serversA[a]][roundArray[b]][games[c]] !== undefined) {
                gameCoins = players[player][serversA[a]][roundArray[b]][games[c]];
                if(games[c] == 'sb' || games[c] == 'pkw') { // MAINTAINENCE FOR MORE MODDED GAMES
                  gameCoins = gameCoins * 1.5;
                }
                if(roundSelect == servers[serversA[a]][roundArray[b]].rounds) {
                  totalCoins = totalCoins + gameCoins;
                }
              }
            }*/
          }
        }
      }
    }
  }
  if(coinsTourneyDisplay !== '') {
    document.getElementById('coinCount').innerHTML = `${Math.round(totalCoins / countRound)}<img src=images/coin.webp class="coinImageBig">`;
  }else {
    document.getElementById('coinCount').innerHTML = ''
  }
}

/*function getTotals() {
  totalCoinsDisplay = 0;
  totalCoinsDisplayTally = 0;
  stats = '<span style="font-size: 15px; color: lightgray;">Total coins ÷ rounds | Total</span><br>';
  for(a = 0; a < serversA.length; a++) {
    if(players[player][serversA[a]] !== undefined) {
      eval('let ' + serversA[a] + 'Check ' + '= ' + 'document.getElementById(' + serversA[a] + 'toggle' + ')');
      if(eval(serversA[a] + 'toggle').checked) {
        for(b = 0; b < 50; b++) {
          if(players[player][serversA[a]][b] !== undefined) {
            let gameTotal = 0;
            subOn = 0;
            for(c = 0; c < games.length; c++) {
              if(players[player][serversA[a]][b][games[c]] !== undefined) {
                if(players[player][serversA[a]][b].sub !== undefined) {
                  let subChecker = document.getElementById('subCheck'); //ADD MORE MODIFIERS (EG SUB NONCANON HERE)
                  if(subChecker.checked) {
                    if(games[c] === 'sb' || games[c] === 'pkw') { //SAME
                      gameTotal = gameTotal + (players[player][serversA[a]][b][games[c]] * 1.5);
                      subOn++;
                    }else {
                      gameTotal = gameTotal + players[player][serversA[a]][b][games[c]];
                      subOn++;
                    }
                  }
                }
                else {
                  if(games[c] === 'sb' || games[c] === 'pkw') { // MAINTAINENCE GAMES THAT NEED MODS
                    gameTotal = gameTotal + (players[player][serversA[a]][b][games[c]] * 1.5);
                  }else {
                    gameTotal = gameTotal + players[player][serversA[a]][b][games[c]];
                  }
                }
              }
            }if(gameTotal !== 0) {
              totalCoinsDisplay = totalCoinsDisplay + Math.round((gameTotal / returnServerRounds(`${serversA[a]}`, `${b}`)))
              totalCoinsDisplayTally++;
              stats = stats + `<span class="roundNumber">${eval('serverNames.' + serversA[a] + '.ac')}-${b}</span> ${Math.round(gameTotal / returnServerRounds(`${serversA[a]}`, `${b}`))} <span style="color:rgb(29, 32, 255)">|</span> ${gameTotal} <img class="coinImage" src="images/coin.webp">`
              if(subOn > 0) {
                stats = stats + `<span class="subTag">sub</span><br>`
              }else {
                stats = stats + `<br>`
              }
            }
          }
        }
      }
    }
  }
  if(stats !== '<span style="font-size: 15px; color: lightgray;">Total coins ÷ rounds | Total</span><br>') {
    document.getElementById('showStats').innerHTML = stats;
    document.getElementById('coinCount').innerHTML = `${Math.round(totalCoinsDisplay / totalCoinsDisplayTally)}<img class="coinImageBig" src="images/coin.webp">`;
    getChart();
  }else {
    document.getElementById('showStats').innerHTML = 'Event Checkboxes are empty.<br><br>Select some checkboxes to include this players events.<br><br>Sub = Substitutions<br><br>IW = Island Warriors';//MAINTAINENCE FOR NEW SERVER SUPPORT
    document.getElementById('coinCount').innerHTML = "Coins"
    getChart();
  }
}*/

function returnServerRounds(currentServer, currentRound) {
  if(eval('servers.' + currentServer + '.round' + currentRound) !== undefined) {
    return eval('servers.' + currentServer + '.round' + currentRound);
  }else {
    return eval('servers.' + currentServer + '.defaultRounds')
  }
}

function setChecks() {
  for(currentCheckbox = 0; currentCheckbox < serversA.length; currentCheckbox++) {
    eval('var checkboxLoop' + serversA[currentCheckbox] + ' = ' + "document.getElementById('" + serversA[currentCheckbox] + "toggle').checked;");
    sessionStorage.setItem(`checkRecall${serversA[currentCheckbox]}`, eval('checkboxLoop' + serversA[currentCheckbox]));
  }
  let statusCheckSub = document.getElementById('subCheck').checked;
  sessionStorage.setItem('subRecall', statusCheckSub);
}

function updateChecks() {
  for(updateChecksLoopNum = 0; updateChecksLoopNum < serversA.length; updateChecksLoopNum++) {
    eval('var ' + 'amongsters' + serversA[updateChecksLoopNum] + ' = ' + "sessionStorage.getItem('checkRecall" + serversA[updateChecksLoopNum] +  "')")
  if(eval('amongsters' + serversA[updateChecksLoopNum]) === 'true') {
    document.getElementById(`${serversA[updateChecksLoopNum]}toggle`).checked = true;
  }
  if(serversA[updateChecksLoopNum] === 'false') {
    document.getElementById(`${serversA[updateChecksLoopNum]}toggle`).checked = false;
  }
  }
  let subRecalled = sessionStorage.getItem('subRecall');
  if(subRecalled === null) {
    document.getElementById('subCheck').checked = true;//MAINTAINENCE ( IF OTHER THAN SUBS LIKE NONCANON)
  }
  if(subRecalled === 'true') {
    document.getElementById('subCheck').checked = true;
  }
  if(subRecalled === 'false') {
    document.getElementById('subCheck').checked = false;
  }
}
function setPlayerName() {
  document.getElementById('playerName').innerHTML = player;
}

function getDataList() {//sets the searchbar list from object data
  let playerList = Object.keys(players);
  for(i = 0; i <= playerList.length - 1; i++) {
    let newData = document.createElement('option');

    newData.setAttribute('value', `${playerList[i]}`);
    document.getElementById('datalistPlayers').append(newData);
  }
}

function makeChecks() { //example
  for(i = 0; i < serversA.length; i++) {
    let deezer2 = document.createElement('label');
    deezer2.setAttribute('for', `${serversA[i]}toggle`);
    deezer2.setAttribute('id', `${serversA[i]}label`);
    document.getElementById('checkboxDiv').append(deezer2);
    document.getElementById(`${serversA[i]}label`).innerHTML = serverNames[serversA[i]].full;

    let deezer = document.createElement('input');
    deezer.setAttribute('type', 'checkbox');
    let amonga = sessionStorage.getItem('checkRecalliw');
    if(amonga === null) {
      deezer.setAttribute('checked', 'true');
    }
    deezer.setAttribute('id', `${serversA[i]}toggle`);
    deezer.setAttribute('class', 'checkbox');
    deezer.setAttribute('onchange', 'getTotals(); setChecks(); getStats();');
    document.getElementById('checkboxDiv').append(deezer);

    let makeBreak = document.createElement('br');
    document.getElementById('checkboxDiv').append(makeBreak);
  }
}

function getChart() {
  for(gameCounter = 0; gameCounter < games.length; gameCounter++) {
    eval('var ' + games[gameCounter] + 'Counter' + ' = 0' + ';');
  }

  for(gameItt = 0; gameItt < games.length; gameItt++) {
    eval('var ' + 'value' + games[gameItt] + ' = 0' + ';');
    for(serverItt = 0; serverItt < serversA.length; serverItt++) {
      let toggleChecker = document.getElementById(`${serversA[serverItt]}toggle`);
      if(toggleChecker.checked) {
        if(players[player][serversA[serverItt]] !== undefined) {
          for(roundItt = 0; roundItt < 50; roundItt++) {
            if(players[player][serversA[serverItt]][roundItt] !== undefined) {
              if(players[player][serversA[serverItt]][roundItt].sub !== undefined) {
                let subChartChecker = document.getElementById('subCheck');
                if(subChartChecker.checked) {
                  if(players[player][serversA[serverItt]][roundItt][games[gameItt]] !== undefined) {
                    eval('value' + games[gameItt] + ' = ' + 'value' + games[gameItt] + ' + (players[player][serversA[serverItt]][roundItt][games[gameItt]] / ' + returnServerRounds(`${serversA[serverItt]}`, `${roundItt}`) + ')');
                    eval(games[gameItt] + 'Counter++')
                  }
                }
              }else {
                if(players[player][serversA[serverItt]][roundItt][games[gameItt]] !== undefined) {
                  eval('value' + games[gameItt] + ' = ' + 'value' + games[gameItt] + ' + (players[player][serversA[serverItt]][roundItt][games[gameItt]] / ' + returnServerRounds(`${serversA[serverItt]}`, `${roundItt}`) + ')');
                  eval(games[gameItt] + 'Counter++')
                }
              }
            }
          }
        }
      }
    }
  }
  eval('valuesb = Math.round(valuesb * 1.5)'); // multi CERTAIN GAMES
  eval('valuepkw = Math.round(valuepkw * 1.5)');
  for(gameCaller = 0; gameCaller < games.length; gameCaller++) {
    if(eval('value' + games[gameCaller]) !== undefined && eval('value' + games[gameCaller]) !== 0) {
      eval(games[gameCaller] + 'Bar.data.datasets[0].data[0] = ' + 'Math.round(value' + games[gameCaller] + ' / ' + games[gameCaller] + 'Counter)');
      eval(games[gameCaller] + 'Bar.update();');
      //pie.data.datasets[0].data[4] = coinsPKW / countPKW;
      eval('pie.data.datasets[0].data[' + gameCaller + '] = ' + 'Math.round(value' + games[gameCaller] + ' / ' + games[gameCaller] + 'Counter)')
      pie.update();
    }else {
      eval(games[gameCaller] + 'Bar.data.datasets[0].data[0] = 0');
      eval(games[gameCaller] + 'Bar.update();');
      pie.data.datasets[0].data[gameCaller] = 0;
      pie.update();
    }
  }
}

function setChartColors() {
  for(deemoager = 0; deemoager < games.length; deemoager++) {
    eval(games[deemoager] + 'Bar.data.datasets[0].backgroundColor = ' + '`${gameColors[games[deemoager]]}`');
    eval(games[deemoager] + 'Bar.data.datasets[0].borderColor = ' + '`${gameColors[games[deemoager]]}`');
    pie.data.datasets[0].backgroundColor[deemoager] = `${gameColors[games[deemoager]]}`;
    pie.update();
    eval(games[deemoager] + 'Bar.update();')
  }
}