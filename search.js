let players = {
  creekchub: {
    iw: {
      1: {
        sb: 710,
        tgttos: 1560,
        hitw: 2100,
        bb: 1980
      },
  
      2: {
        sb: 1100,
        tgttos: 1610,
        hitw: 1900,
        bb: 1710
      }
    },
    ib: {
      1: {
        sb: 730,
        tgttos: 1540,
        hitw: 2700,
        bb: 1870
      },
  
      2: {
        sb: 400,
        tgttos: 2100,
        hitw: 2050,
        bb: 1760
      }
    }
  },
  
  ruderrr: {
    iw: {
      1: {
        sb: 710,
        tgttos: 1560,
        hitw: 2100,
        bb: 1980
      }
    },
    ib: {
      1: {
        sb: 730,
        tgttos: 1540,
        hitw: 2700,
        bb: 1870
      },
  
      2: {
        sb: 400,
        tgttos: 2100,
        hitw: 2050,
        bb: 1760
      }
    },
    it: {
      1: {
        sb: 300,
        tgttos: 1800,
        hitw: 1940,
        bb: 1870
      }
    }
  }
}

let servers = {
  iw: 4,
  ib: 3,
  it: 4
}

//console.log(`Ruderrr's score is: ${ruderrr.ib[1].tgttos}`); //normal call
let player = sessionStorage.getItem('playerQuery'); //user INPUTS FOR TEST
let server = "ib";
let game = "sb";
let round = "1"

//console.log(players[player][server][round][game]); //variable call

/*function callStats(pl,srvr,rnd,gme) {
  console.log(pl[srvr][rnd][gme]);
}

callStats(player,server,round,game);*/
let avrgCounter = 0;
let totalAvrg = 0;
let totalAvrgCalculated = 0;

/*function dynamicStats(playerQ, serverQ) {
  avrgCounter = 0;
  totalAvrg = 0;
  totalAvrgCalculated = 0;

  for(let i = 1; i <= 20; i++) {
    if(players[playerQ][serverQ][i] !== undefined) {
      console.log(`Sky Battle Scores for ${serverQ}${i}: ${players[playerQ][serverQ][i].sb}`);
      console.log(`TGTTOS Scores for ${serverQ}${i}: ${players[playerQ][serverQ][i].tgttos}`);
      console.log(`HITW Scores for ${serverQ}${i}: ${players[playerQ][serverQ][i].hitw}`);
      console.log(`Battle Box Scores for ${serverQ}${i}: ${players[playerQ][serverQ][i].bb}`);
      console.log(`Total for ${serverQ}${i}: ${players[playerQ][serverQ][i].bb + players[playerQ][serverQ][i].sb + players[playerQ][serverQ][i].hitw + players[playerQ][serverQ][i].tgttos}\n`)
      totalAvrg = totalAvrg + players[playerQ][serverQ][i].sb + players[playerQ][serverQ][i].bb + players[playerQ][serverQ][i].tgttos + players[playerQ][serverQ][i].hitw;
      avrgCounter ++;
      totalAvrgCalculated = totalAvrg / avrgCounter;
      totalAvrgCalculated = totalAvrgCalculated / servers[server];
      totalAvrgCalculated = Math.round(totalAvrgCalculated);
      }else {
      }
    }
}*/

let print = "";
function dynamicReturn() {
  avrgCounter = 0;
  totalAvrg = 0;
  totalAvrgCalculated = 0;
  print = "";

  for(let i = 1; i <= 20; i++) {
    if(players[player] !== undefined) {
      if(players[player][server][i] !== undefined) {
        avrgCounter ++;
        print = print + `<br>SB ${server}${i}: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ${players[player][server][i].sb}`;
        print = print + `<br>TGTTOS ${server}${i}: \xa0 ${players[player][server][i].tgttos}`;
        print = print + `<br>HITW ${server}${i}:\xa0\xa0\xa0\xa0\xa0\xa0 ${players[player][server][i].hitw}`;
        print = print + `<br>BB ${server}${i}: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ${players[player][server][i].bb}`;
        totalAvrg = (players[player][server][i].sb + players[player][server][i].tgttos + players[player][server][i].hitw + players[player][server][i].bb) / servers[server]
        totalAvrg = Math.round(totalAvrg);
        totalAvrgCalculated = totalAvrgCalculated + totalAvrg;
        print = print + `<br>Total:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ${totalAvrg}<br>`;
        } else {
        console.log("Unknown");
      }
      }else {
        console.log('Unknown');
      }
    }
    totalAvrgCalculated = totalAvrgCalculated / avrgCounter;
    totalAvrgCalculated = Math.round(totalAvrgCalculated);
    totalAvrgCalculated = `<br>Total Average: ${totalAvrgCalculated}`;
    print = print + totalAvrgCalculated;
    console.log(print);
    document.getElementById('showStats').innerHTML = print;
}

function getTotal(x) {
  let total = (players[player][server][x].sb + players[player][server][x].tgttos + players[player][server][x].hitw + players[player][server][x].bb) / servers[server];
  total = Math.round(total);
  return `<br>Total: ${total}<br>`;
}

  


  
//dynamicStats(player, server);

//dynamicStats(player, server);
//console.log(`Total Average Calculated: ${totalAvrgCalculated}\n`);

/*function showStatsFunction() {
  document.getElementById('showStats').innerHTML = dynamicReturn();
}*/

