
let servers = {
  iw: {
    1: {
      rounds: 4,
      gamesM: 1,
      win: 'green',
      dodgebolt: 'pink',
      lobby: 'public',
    },
    2: {
      rounds: 3,
      gamesM: 1,
      win: 'yellow',
      dodgebolt: 'pink',
      lobby: 'public',
    },
    'Chosen Teams 1': {
      rounds: 3,
      canon: false,
      gamesM: 1,
      win: 'purple',
      dodgebolt: 'cyan',
      lobby: 'public',
    },
    4: {
      rounds: 3,
      gamesM: 1,
      lobby: 'plobby'
    }
  },
  /*hitw: {
    1: {
      gamesM: 4,
      rounds: 4
    }
  },
  ib: {
    1: {
      rounds: 3,
      gamesM: 1,
    }
  },*/
  mccic: {
    'O.B Chosen 1': {
      rounds: 3,
      gamesM: 1,
      win: 'Mod Abuse',
      dodgebolt: 'Heyday',
      lobby: 'public',
    },
    'O.B Chosen 2': {
      rounds: 3,
      gamesM: 1,
      win: "Dodgebolt twice? That's really nice!",
      dodgebolt: 'Big Bingos',
      lobby: 'public',
    },
    'O.B Balanced 1': {
      rounds: 3,
      gamesM: 1,
      win: 'Crimson Clams',
      dodgebolt: 'Lime Lobsters',
      lobby: 'public',

    },
    'O.B Balanced 2': {
      rounds: 3,
      gamesM: 1,
      win: 'Aqua Algae',
      dodgebolt: 'Indigo Isopods',
      lobby: 'public',
    }
  }
}

let teamColor = {
  'Maroon Marlins': '#8E1515',
  'Crimson Clams': '#EF5050',
  'Red River-Rats': '#FA0909',
  'Coral Reefs': '#FFD890',
  'Orange Octopi': '#FF9E00',
  'Saffron Starfish': '#D3B142',
  'Lime Lobsters': '#7CFF07',
  'Emerald Eels': '#9EC878',
  'Cyan Crabs': '#19CD99',
  'Turquoise Tarpoons': '#38D4C3',
  'Aqua Algae': '#00F7FF',
  'Blue Blowfish': '#6480FF',
  'Indigo Isopods': '#6200D1',
  'Purple Pearls': '#9A27E4',
  'Pink Pufferfish': '#FA0BFA',
  'Brown Blobfish': '#744F0A'
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
  },
  hitw: {
    ac: 'HITW',
    full: 'HITW Dojo'
  },
  ib: {
    ac: 'IB',
    full: 'Island Battles'
  },
  mccic: {
    ac: 'MCCIC',
    full: 'MCCI Community'
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

gameNames = {
  hitw: 'HITW',
  bb: 'BB',
  tgttos: 'TGTTOS',
  sb: 'SB',
  pkw: 'PKW',
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

let gameOrderRadar = { // MAINTAINENCE IF NEW GAME ADDED
  sb: 0,
  bb: 1,
  tgttos: 2,
  pkw: 3,
  hitw: 4,
}

let gameOrderName = {
  0: 'sb',
  1: 'bb',
  2: 'tgttos',
  3: 'pkw',
  4: 'hitw',
}

teams = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'aqua', 'blue', 'purple', 'pink'] // MAINTAINENCE IF NEW TEAMS ADDED

//console.log(`Ruderrr's score is: ${ruderrr.ib[1].tgttos}`); //normal call
//let player = sessionStorage.getItem('playerQuery'); //user INPUTS FOR TEST ( OLD METHOD )
const urlParams = new URLSearchParams(window.location.search);
let player = urlParams.get('player');

function getTourney(tourneyServer, tourneyRound, dest) {
  //let amogafinder = Object.keys(players[player][tourneyServer][tourneyRound]);
  let popupContent = '<p class="popupInner" style="text-align: center; margin-bottom: 2px;">Overview</p>';
  for(aItt = 0; aItt < games.length; aItt++) {
    if(players[player][tourneyServer][tourneyRound][games[aItt]] !== undefined) {
      let deemoaganumba = players[player][tourneyServer][tourneyRound][games[aItt]];
      if(games[aItt] === 'sb' || games[aItt] === 'pkw') {//maintainence for new games
        deemoaganumba = Math.round(deemoaganumba * 1.5)
      }
      popupContent = popupContent + `<p class="popupInner">${gameNames[games[aItt]]} - <span style="position: absolute; right: 0px;">${deemoaganumba} | ${Math.round(deemoaganumba / servers[tourneyServer][tourneyRound].rounds)}<img style="width: 12px;" src="images/coin.webp"></span></p>`
    }
  }
  //popupContent = popupContent + '</span>'
  document.getElementById(dest).innerHTML = popupContent;
}

function getStats() {
  let lobbyCheck;
  if(document.getElementById('publiclobby').checked) {
    lobbyCheck = 'public';
  }else {
    lobbyCheck = 'plobby';
  }
  let idFor = 0;
  let countRound = 0;
  let totalCoins = 0;
  let coinsTourneyDisplay = '';
  let appendCount = 0;
  let appendCount1 = 0;
  let winCount = 0;
  let dodgeboltCount = 0;
  document.getElementById('statTourneyDiv').innerHTML = `
  <div style="display: grid; grid-template-columns: calc(50% - 15px) 30px 30% calc(20% - 45px) 30px; margin-bottom: 8px; border-bottom-style: solid; border-color: rgba(51, 71, 255, 0.504); border-width: 1px;">
    <span class="preText">Tournament and Event</span><span class="preText">Team</span><span></span><span class="preText" style="text-align: right">Coins | Coins ÷ Rounds</span><span></span>
  </div>
  `;

  let roundSelect = document.getElementById('tourneySelect').value
  if(players[player] !== undefined) {
    for(a = 0; a < serversA.length; a++) {
      if(players[player][serversA[a]] !== undefined) {
        let roundArray = Object.keys(players[player][serversA[a]]);
        for(b = 0; b < roundArray.length; b++) {
          if(players[player][serversA[a]][roundArray[b]] !== undefined) {
            if(roundSelect == serversA[a] || roundSelect == 'all') {
              if(lobbyCheck === servers[serversA[a]][roundArray[b]].lobby) {
                if((document.getElementById('noncanonCheck').checked && servers[serversA[a]][roundArray[b]].canon === false) || servers[serversA[a]][roundArray[b]].canon === undefined) {
                  if((players[player][serversA[a]][roundArray[b]].sub === true && document.getElementById('subCheck').checked) || players[player][serversA[a]][roundArray[b]].sub === undefined) {
                    let coinsTourney = 0;
                    if(players[player][serversA[a]][roundArray[b]].team !== undefined) { //dodgebolt and wins calculator
                      if(servers[serversA[a]][roundArray[b]].win === players[player][serversA[a]][roundArray[b]].team) {
                        winCount++;
                      }
                      if(servers[serversA[a]][roundArray[b]].dodgebolt === players[player][serversA[a]][roundArray[b]].team) {
                        dodgeboltCount++;
                      }
                    }
                    for(c = 0; c < games.length; c++) {
                      let gameCoins = 0;
                      if(players[player][serversA[a]][roundArray[b]][games[c]] !== undefined) {
                        let gamesSelected = document.getElementById('gameSelect').value;
                        if(games[c] === gamesSelected || gamesSelected === 'all') {
                          countRound++;
                          gameCoins = players[player][serversA[a]][roundArray[b]][games[c]];
                        if(games[c] == 'sb' || games[c] == 'pkw') { // MAINTAINENCE FOR MORE MODDED GAMES
                          gameCoins = Math.round(gameCoins * 1.5);
                        }
                        if(servers[serversA[a]][roundArray[b]].gamesM !== 1) {
                          totalCoins = totalCoins + Math.round((gameCoins / servers[serversA[a]][roundArray[b]].rounds) * servers[serversA[a]][roundArray[b]].gamesM);
                        }else {
                          totalCoins = totalCoins + Math.round(gameCoins / servers[serversA[a]][roundArray[b]].rounds);
                        }
                        coinsTourney = coinsTourney + gameCoins;
                        }
                      }
                    }coinsTourneyDisplay = coinsTourneyDisplay + `${coinsTourney} `;
    
                    //appendCount++;
                    /*let oneRoundCoins = document.createElement('div');
                    oneRoundCoins.setAttribute('class', 'displayDivText');
                    oneRoundCoins.setAttribute('id', `coinTextAppend${appendCount}`);
                    if(servers[serversA[a]][roundArray[b]].canon === false) {
                      oneRoundCoins.setAttribute('style', 'color:orange');
                    }
                    document.getElementById('displayDivDis2').append(oneRoundCoins);
                    document.getElementById(`coinTextAppend${appendCount}`).innerHTML = `${coinsTourney}<img src="images/coin.webp" class="coinImage">`;
                    if(players[player][serversA[a]][roundArray[b]].sub) {
                      document.getElementById(`coinTextAppend${appendCount}`).innerHTML = document.getElementById(`coinTextAppend${appendCount}`).innerHTML + '<p class="subTag">Sub</p>'
                    }
    
                    appendCount1++;
                    let oneRoundTag = document.createElement('p');
                    oneRoundTag.setAttribute('id', `coinTag${appendCount1}`);
                    oneRoundTag.setAttribute('class', 'displayDivText');
                    document.getElementById('displayDivDis1').append(oneRoundTag);
                    document.getElementById(`coinTag${appendCount1}`).innerHTML = `${serverNames[serversA[a]].full} - ${roundArray[b]}`*/
                    //document.getElementById('statTourneyDiv').innerHTML = ''
                    if(coinsTourney !== 0) {
                      idFor++;
                      document.getElementById('statTourneyDiv').innerHTML = document.getElementById('statTourneyDiv').innerHTML + `
                  <div style="display: grid; grid-template-columns: calc(30% - 15px) 20% 30px 28% calc(20% - 25px) 30px; margin-bottom: 8px;">
                    <div style="display: flex;">
                      <img src="images/logo/${serversA[a]}.webp" style="width: 30px; grid-column-start: 1; border-radius: 6px;">
                      <span style="grid-column-start: 1; align-self: center; color: white; font-family: Kanit; padding-left: 10px;">${roundArray[b]}</span>
                    </div>
                    <div id="divS${idFor}">
                    </div>
                    <img id="imageTeam${idFor}" src="images/team/generic.webp" style="width: 30px;">
                    <div id="wins${idFor}" style="padding-left: 30%;"></div>
                    <div style="display: flex">
                      <span onclick="document.getElementById('popup${idFor}').style.opacity = 1" onmouseleave="document.getElementById('popup${idFor}').style.opacity = 0" id="tourneytag${idFor}" style="position: relative; cursor: pointer; color: white; font-family: Kanit; width: 100%; text-align:end; align-self: center">${coinsTourney} <span style="color: gray;">|</span> ${Math.round(coinsTourney / servers[serversA[a]][roundArray[b]].rounds)}<div id="popup${idFor}" class="popup">The Impostor is Sus</div></span>
                      <!--<img src="images/coin.webp" style="width: 20px; align-self: center; padding-left: 4px;">-->
                    </div>
                    <img src="images/coin.webp" style="width: 20px; padding-top: 5px;">
                  </div>
                    `//ADD IMAGES AND DODGEBOLT LATER HERE HERE HERE
                      if(servers[serversA[a]][roundArray[b]].win === players[player][serversA[a]][roundArray[b]].team) {
                        document.getElementById(`wins${idFor}`).innerHTML = '<img style="width: 26px; height: 26px; margin-left: 28px;" src="images/crown.webp">'
                      }
                      if(servers[serversA[a]][roundArray[b]].dodgebolt === players[player][serversA[a]][roundArray[b]].team) {
                        document.getElementById(`wins${idFor}`).innerHTML = document.getElementById(`wins${idFor}`).innerHTML + '<img style="width: 26px; height: 26px; margin-left: 28px;" src="images/dodgebolt.webp">'
                      }
                      if(servers[serversA[a]][roundArray[b]].canon === false) {
                        document.getElementById(`divS${idFor}`).innerHTML = document.getElementById(`divS${idFor}`).innerHTML + `<span class="noncanontag" id="noncanontag${idFor}">Noncanon</span>`;
                      }
                      if(players[player][serversA[a]][roundArray[b]].sub !== undefined) {
                        document.getElementById(`divS${idFor}`).innerHTML = document.getElementById(`divS${idFor}`).innerHTML + `<span class="subtag" id="subtag${idFor}">Sub</span>`;
                      }
                      if(players[player][serversA[a]][roundArray[b]].team !== undefined) {
                        document.getElementById(`imageTeam${idFor}`).title = `${players[player][serversA[a]][roundArray[b]].team}`;
                        //document.getElementById(`imageTeam${idFor}`).src = `images/team/${players[player][serversA[a]][roundArray[b]].team}.webp`;
                        //checkImage(`images/team/${players[player][serversA[a]][roundArray[b]].team}.webp`, idFor);
                        for(imageItt = 0; imageItt < teams.length; imageItt++) {
                          if(players[player][serversA[a]][roundArray[b]].team === teams[imageItt]) {
                            document.getElementById(`imageTeam${idFor}`).src = `images/team/${players[player][serversA[a]][roundArray[b]].team}.webp`;
                          }
                        }
                      }
                      getTourney(`${serversA[a]}`, `${roundArray[b]}`, `popup${idFor}`);
                      if(players[player][serversA[a]][roundArray[b]].team !== undefined) {
                        if(teamColor[players[player][serversA[a]][roundArray[b]].team] !== undefined) {
                          document.getElementById(`imageTeam${idFor}`).style.backgroundColor = teamColor[players[player][serversA[a]][roundArray[b]].team];
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    getChartStats();
    if(lobbyCheck === 'public') {
      sessionStorage.setItem('lobbyType', 'public');
    }else {
      sessionStorage.setItem('lobbyType', 'private');
    }
    if(totalCoins === 0) {
      document.getElementById('coinAverageStat').innerHTML = '0';
    }
    if(coinsTourneyDisplay !== '') {
      if(totalCoins !== 0) {
        if(document.getElementById('gameSelect').value === 'all') {
          document.getElementById('coinAverageStat').innerHTML = `${Math.round((totalCoins / countRound) * 4)}`;
        }else {
          document.getElementById('coinAverageStat').innerHTML = `${Math.round(totalCoins / countRound)}`;
        }
      }else {
        document.getElementById('coinAverageStat').innerHTML = '0'
      }
      }
    sessionStorage.setItem('selectRecall', roundSelect);
  
    let subCheckRecallVar1 = document.getElementById('subCheck').checked;
    sessionStorage.setItem('subCheckRecall', subCheckRecallVar1);
  
    let ncCheckRecallVar1 = document.getElementById('noncanonCheck').checked;
    sessionStorage.setItem('ncCheckRecall', ncCheckRecallVar1);
  }
  document.getElementById('wins').innerHTML = winCount;
  document.getElementById('dodgebolts').innerHTML = (dodgeboltCount + winCount);
}

function recordChecks() {
    sessionStorage.setItem('selectRecall', roundSelect);
  
    let subCheckRecallVar1 = document.getElementById('subCheck').checked;
    sessionStorage.setItem('subCheckRecall', subCheckRecallVar1);
  
    let ncCheckRecallVar1 = document.getElementById('noncanonCheck').checked;
    sessionStorage.setItem('ncCheckRecall', ncCheckRecallVar1);
}

//OLD OUTDATED CODE ( LIKE RUDERRR )
function getStatsOLD() {
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
          if(roundSelect == serversA[a] || roundSelect == 'all') {
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
                    if(servers[serversA[a]][roundArray[b]].gamesM !== 1) {
                      totalCoins = totalCoins + Math.round((gameCoins / servers[serversA[a]][roundArray[b]].rounds) * servers[serversA[a]][roundArray[b]].gamesM);
                    }else {
                      totalCoins = totalCoins + Math.round(gameCoins / servers[serversA[a]][roundArray[b]].rounds);
                    }
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
          }
        }
      }
    }
  }
  getChartStats();
  if(coinsTourneyDisplay !== '') {
    document.getElementById('coinCount').innerHTML = `${Math.round(totalCoins / countRound)}<img src=images/coin.webp class="coinImageBig">`;
  }else {
    document.getElementById('coinCount').innerHTML = '0 <img src=images/coin.webp class="coinImageBig">'
  }
  sessionStorage.setItem('selectRecall', roundSelect);

  let subCheckRecallVar1 = document.getElementById('subCheck').checked;
  sessionStorage.setItem('subCheckRecall', subCheckRecallVar1);

  let ncCheckRecallVar1 = document.getElementById('noncanonCheck').checked;
  sessionStorage.setItem('ncCheckRecall', ncCheckRecallVar1);
}



function getChartStats() {
  let lobbyCheck;
  if(document.getElementById('publiclobby').checked) {
    lobbyCheck = 'public';
  }else {
    lobbyCheck = 'plobby';
  }
  for(ab = 0; ab < games.length; ab++) { //makes variables for use
    eval('var coins' + games[ab] + ' = 0');
    eval('var count' + games[ab] + ' = 0');
  };
  let roundSelect = document.getElementById('tourneySelect').value;

  for(a = 0; a < serversA.length; a++) {
    if(players[player][serversA[a]] !== undefined) {
      let roundArray = Object.keys(players[player][serversA[a]]);
      for(b = 0; b < roundArray.length; b++) {
        if(players[player][serversA[a]][roundArray[b]] !== undefined) {
          if(roundSelect == serversA[a] || roundSelect == 'all') {
            if(lobbyCheck === servers[serversA[a]][roundArray[b]].lobby) {
            if((document.getElementById('noncanonCheck').checked && servers[serversA[a]][roundArray[b]].canon === false) || servers[serversA[a]][roundArray[b]].canon === undefined) {
              if((players[player][serversA[a]][roundArray[b]].sub === true && document.getElementById('subCheck').checked) || players[player][serversA[a]][roundArray[b]].sub === undefined) {
                for(c = 0; c < games.length; c++) {
                  if(players[player][serversA[a]][roundArray[b]][games[c]] !== undefined) {
                    let coinsTemp = 0;
                    coinsTemp = Math.round(players[player][serversA[a]][roundArray[b]][games[c]] / servers[serversA[a]][roundArray[b]].rounds);
                    if(games[c] === 'sb' || games[c] === 'pkw') {  //MAINTAINENCE IF NEW GAME IS ADDED
                      coinsTemp = coinsTemp * 1.5
                    }
                    eval('count' + games[c] + '++;');
                   // eval('coins' + games[c] + ' = ' + 'coins' + games[c] + ' + ' + coinsTemp);
                   eval('coins' + games[c] + ' += coinsTemp');
                  }
                }
              }
            }
          }
          }
        }
      }
    }
  }
  /*Bar.data.datasets[0].data = [];
  Bar.data.labels = [];
  Bar.data.labels[0] = 'No Games';
  Bar.update();*/
  radar.data.labels = [];
  radar.data.labels[0] = 'No Games';
  radar.data.labels[1] = 'No Games';
  radar.data.labels[2] = 'No Games';
  radar.data.labels[3] = 'No Games';
  radar.data.datasets[0].data = [];
  radar.update();
  let e = 0;
  for(d = 0; d < games.length; d++) {
    if(eval('coins' + gameOrderName[d]) !== 0) {
     // Bar.data.labels[gameOrderRadar[gameOrderName[e]]] = `${gameNames[gameOrderName[d]]}`;
     // eval('Bar.data.datasets[0].data[' + gameOrderRadar[gameOrderName[e]] + '] = coins' + gameOrderName[d] + ' / count' + gameOrderName[d]);
      radar.data.labels[gameOrderRadar[gameOrderName[e]]] = `${gameNames[gameOrderName[d]]}`;
      eval('radar.data.datasets[0].data[' + gameOrderRadar[gameOrderName[e]] + '] = coins' + gameOrderName[d] + ' / count' + gameOrderName[d]);
      //Bar.update();
      radar.update();
      e++;
    }
  }
  document.getElementById('labelpublic').style.borderBottomStyle = 'none' //puts underlines on labels if there are valid tournaments for plobby/public
  document.getElementById('labelplobby').style.borderBottomStyle = 'none'
  for(a = 0; a < serversA.length; a++) {
    if(players[player][serversA[a]] !== undefined) {
      let roundArray = Object.keys(players[player][serversA[a]]);
      for(b = 0; b < roundArray.length; b++) {
        if(players[player][serversA[a]][roundArray[b]] !== undefined) {
          if(roundSelect == serversA[a] || roundSelect == 'all') {
            if((document.getElementById('noncanonCheck').checked && servers[serversA[a]][roundArray[b]].canon === false) || servers[serversA[a]][roundArray[b]].canon === undefined) {
              if((players[player][serversA[a]][roundArray[b]].sub === true && document.getElementById('subCheck').checked) || players[player][serversA[a]][roundArray[b]].sub === undefined) {
                if('public' === servers[serversA[a]][roundArray[b]].lobby) {
                  document.getElementById('labelpublic').style.borderBottomStyle = 'solid'
                }
                if('plobby' === servers[serversA[a]][roundArray[b]].lobby) {
                  document.getElementById('labelplobby').style.borderBottomStyle = 'solid'
                }
              }
            }
          }
        }
      }
    }
  }
}

//OLD GRANPA CODE BEWARE

function getChartStatsOLD() {
  for(ab = 0; ab < games.length; ab++) { //makes variables for use
    eval('var coins' + games[ab] + ' = 0');
    eval('var count' + games[ab] + ' = 0');
  };
  let roundSelect = document.getElementById('selectBox').value;

  for(a = 0; a < serversA.length; a++) {
    if(players[player][serversA[a]] !== undefined) {
      let roundArray = Object.keys(players[player][serversA[a]]);
      for(b = 0; b < roundArray.length; b++) {
        if(players[player][serversA[a]][roundArray[b]] !== undefined) {
          if(roundSelect == serversA[a] || roundSelect == 'all') {
            if((document.getElementById('noncanonCheck').checked && servers[serversA[a]][roundArray[b]].canon === false) || servers[serversA[a]][roundArray[b]].canon === undefined) {
              if((players[player][serversA[a]][roundArray[b]].sub === true && document.getElementById('subCheck').checked) || players[player][serversA[a]][roundArray[b]].sub === undefined) {
                for(c = 0; c < games.length; c++) {
                  if(players[player][serversA[a]][roundArray[b]][games[c]] !== undefined) {
                    let coinsTemp = 0;
                    coinsTemp = Math.round(players[player][serversA[a]][roundArray[b]][games[c]] / servers[serversA[a]][roundArray[b]].rounds);
                    if(games[c] === 'sb' || games[c] === 'pkw') {  //MAINTAINENCE IF NEW GAME IS ADDED
                      coinsTemp = coinsTemp * 1.5
                    }
                    eval('count' + games[c] + '++;');
                   // eval('coins' + games[c] + ' = ' + 'coins' + games[c] + ' + ' + coinsTemp);
                   eval('coins' + games[c] + ' += coinsTemp');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  for(d = 0; d < games.length; d++) {
    eval(games[d] + 'Bar.data.datasets[0].data[0] = Math.round(' + 'coins' + games[d] + ' / ' + 'count' + games[d] + ')');
    eval(games[d] + 'Bar.update();');

    eval('radar.data.datasets[0].data[' + gameOrderRadar[games[d]] + '] = ' + 'Math.round(coins' + games[d] + ' / ' + 'count' + games[d] + ')');
    radar.update();
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

/*function getChart() {
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
}*/

function setChartColors() {
  for(deemoager = 0; deemoager < games.length; deemoager++) {
    eval(games[deemoager] + 'Bar.data.datasets[0].backgroundColor = ' + '`${gameColors[games[deemoager]]}`');
    eval(games[deemoager] + 'Bar.data.datasets[0].borderColor = ' + '`${gameColors[games[deemoager]]}`');
    eval(games[deemoager] + 'Bar.update();')
  }
}

function getList() { //gets list of players that participated in specific tournament
  let playerListArray = Object.keys(players);
  for(a = 0; a < playerListArray.length; a++) {
    if(players[playerListArray[a]]['iw'] !== undefined) {
      if(players[playerListArray[a]]['iw']['Chosen Teams 1']) {
        console.log(playerListArray[a])
      }
    }
  }
}