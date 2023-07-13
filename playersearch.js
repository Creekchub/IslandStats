function switchPlayer() {
  let input = document.getElementById("myPlayer").value;
  
  switch(input) {
    case 'creekchub':
      
      window.location.href = "players.html";
      break;
    case 'ruderrr':
      console.log('rud');
      break;
    case 'nugdub':
      console.log('annoyer');
      break;
    default:
      console.log('IDK THIS GUY');
  }
}


let creekchub = {
  islandWarrior: {
    2: {
      sb: 850,
      tgttos: 1670,
      hitw: 2300,
      bb: 1985
    },

    1: {
      sb: 600,
      tgttos: 1850,
      hitw: 2100,
      bb: 1650
    },

    3: {
      sb: null,
    }
  }
}


if (typeof creekchub.islandWarrior[4] !== 'undefined') {
  console.log(creekchub.islandWarrior[4].sb);
}
console.log(creekchub.islandWarrior[2].sb);

/*document.getElementById('myNum1').innerHTML = creekchub.islandWarrior[1].sb;
document.getElementById('myNum2').innerHTML = creekchub.islandWarrior[3].sb;
document.getElementById('myNum3').innerHTML = creekchub.islandWarrior[2].sb;*/

/*
let ruderrr = {
  islandWarrior: {
    2: {
      sb: 850,
      tgttos: 1670,
      hitw: 2300,
      bb: 1985
    },

    1: {
      sb: 600,
      tgttos: 1850,
      hitw: 2100,
      bb: 1650
    }
  }
}

let search = "david"
let playerfound = null;
switch(search) {
  case "creekchub":
    playerfound = creekchub
    break;
  default:
    console.log("thingy");
}

function getStatsSB(player,server,round) {
  return (player[server][round].sb);
}
function getStatsBB(player,server,round) {
  return (player[server][round].bb);
}
function getStatsTGTTOS(player,server,round) {
  return (player[server][round].tgttos);
}
function getStatsHITW(player,server,round) {
  return (player[server][round].hitw);
}
function getStats(player,server,round) {
  let total = getStatsSB(player,server,round) + getStatsBB(player,server,round) + getStatsTGTTOS(player,server,round) + getStatsHITW(player,server,round);
  console.log(total);
}

function logIndi(game,player,server,round) {
  switch(game) {
    case "bb":
      let bbIndi = getStatsBB(player,server,round);
      console.log(bbIndi);
      break;
    case "sb":
      let sbIndi = getStatsSB(player,server,round);
       console.log(sbIndi);
       break;
   case "tgttos":
      let tgttosIndi = getStatsTGTTOS(player,server,round);
      console.log(tgttosIndi);
      break;
   case "hitw":
      let hitwIndi = getStatsHITW(player,server,round);
      console.log(hitwIndi);
      break;
    default:
      console.log("Invalid Game");
  }
}

getStats(playerfound,"islandWarrior","1");

//logIndi("tgttos",creekchub,"islandWarrior","1");*/