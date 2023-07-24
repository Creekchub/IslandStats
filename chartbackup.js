function updateChart() { // MAINTAINENCE
  let coinsSB =0, countSB = 0, coinsTGTTOS = 0, countTGTTOS = 0, coinsHITW = 0, countHITW = 0, coinsBB = 0, countBB = 0, coinsPKW = 0, countPKW = 0;

  togglesToArray = Object.keys(servers);
  for(i = 0; togglesToArray[i] !== undefined; i++) {
    let checkedDecider = document.getElementById(`${togglesToArray[i]}toggle`);
    if(checkedDecider.checked) {
      for(r = 0; r <= 30; r++ ) {
        if(players[player][togglesToArray[i]] !== undefined) {
          if(players[player][togglesToArray[i]][r] !== undefined) {
            if(players[player][togglesToArray[i]][r][games[0]] !== undefined) {
              valueSB = 0;
              countSB++;
              valueSB = players[player][togglesToArray[i]][r][games[0]];
              valueSB = valueSB / servers[togglesToArray[i]];
              valueSB = Math.round(valueSB);
              coinsSB = coinsSB + valueSB;
            }
            if(players[player][togglesToArray[i]][r][games[1]] !== undefined) {
              valueTGTTOS = 0;
              countTGTTOS++;
              valueTGTTOS = players[player][togglesToArray[i]][r][games[1]];
              valueTGTTOS = valueTGTTOS / servers[togglesToArray[i]];
              valueTGTTOS = Math.round(valueTGTTOS);
              coinsTGTTOS = coinsTGTTOS + valueTGTTOS;
            }
            if(players[player][togglesToArray[i]][r][games[2]] !== undefined) {
              valueHITW = 0;
              countHITW++;
              valueHITW = players[player][togglesToArray[i]][r][games[2]];
              valueHITW = valueHITW / servers[togglesToArray[i]];
              valueHITW = Math.round(valueHITW);
              coinsHITW = coinsHITW + valueHITW;
            }
            if(players[player][togglesToArray[i]][r][games[3]] !== undefined) {
              valueBB = 0;
              countBB++;
              valueBB = players[player][togglesToArray[i]][r][games[3]];
              valueBB = valueBB / servers[togglesToArray[i]];
              valueBB = Math.round(valueBB);
              coinsBB = coinsBB + valueBB;
            }
            if(players[player][togglesToArray[i]][r][games[4]] !== undefined) {
              valuePKW = 0;
              countPKW++;
              valuePKW = players[player][togglesToArray[i]][r][games[4]];
              valuePKW = valuePKW / servers[togglesToArray[i]];
              valuePKW = Math.round(valuePKW);
              coinsPKW = coinsPKW + valuePKW;
            }
          }
        }
      }
    }
  }
  sbBar.data.datasets[0].data[0] = coinsSB / countSB;
  sbBar.update();
  tgttosBar.data.datasets[0].data[0] = coinsTGTTOS / countTGTTOS;
  tgttosBar.update();
  hitwBar.data.datasets[0].data[0] = coinsHITW / countHITW;
  hitwBar.update();
  bbBar.data.datasets[0].data[0] = coinsBB / countBB;
  bbBar.update();
  pkwBar.data.datasets[0].data[0] = coinsPKW / countPKW;
  pkwBar.update();
}