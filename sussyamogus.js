let players = {//top
  iSiqht: { //iSight
    mccic: {
      'O.B Balanced 2': {
        hitw:245,
        sb:166,
        bb:720,
        tgttos:450,
        team: 'Emerald Eels'
      },
    }
  },
  Ivanthesavior: {
    mccic: {
      'O.B Balanced 2': {
        hitw:320,
        sb:288,
        bb:735,
        tgttos:408,
        team: 'Brown Blobfish'
      },
    }
  },
  eklyst: {
    mccic: {
      'O.B Balanced 2': {
        hitw:585,
        sb:66,
        bb:735,
        tgttos:730,
        team: 'Purple Pearls'
      },
    }
  },
}

/*var str1 = "Hel7lo";
var str2 = "hel7lo";*/

/*let playerQuery = 'iSiqht';

let playerLowercase = playerQuery.toLowerCase();

let playersL = Object.keys(players).toLowerCase();

console.log(playersL);*/


/*if (str1.toLowerCase() === str2.toLowerCase()) {
  console.log("Strings are equal (case-insensitive)");
} else {
  console.log("Strings are not equal");
}*/

let playerQuery = 'isiQht';

let playerArray = Object.keys(players);


let keyVar;
for(a = 0; a < playerArray.length; a++) {
  if(playerQuery.toLowerCase() === playerArray[a].toLowerCase()) {
    console.log('found!')
    keyVar = a;
  }
}

console.log(keyVar)


/*
let playerQuery = '';

let playerArray = Object.keys(players);

let keyVar = 'deez';
for(a = 0; a < playerArray.length; a++) {
  if(playerQuery.toLowerCase() === playerArray[a].toLowerCase()) {
    keyVar = a;
  }
}

if(keyVar !== 'deez')  {
  console.log(playerArray[keyVar])
}
This works! (makes searches not case sensetive) */