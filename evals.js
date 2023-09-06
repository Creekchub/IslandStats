/*async function getUUIDToUsername(uuid) {
  const response = await fetch(`https://api.mojang.com/user/profiles/${uuid}/names`);
  const data = await response.json();
  
  if (data && Array.isArray(data) && data.length > 0) {
    const latestName = data[data.length - 1].name;
    return latestName;
  } else {
    throw new Error("Player not found.");
  }
}

const uuid = "Creekchub";
getUUIDToUsername(uuid)
  .then(username => console.log(`Username for UUID ${uuid}: ${username}`))
  .catch(error => console.error(error));*/
  let games = ['sb', 'tgttos', 'hitw', 'bb', 'pkw'];

  let scoresIndividualGame = {
    pkw: 300, 
    sb: 60, 
    bb: 200, 
    hitw: 1000,
    helicopter: 400, 
    tgttos: 8 * 60 * 60
};
let sortable = [];
for (var gameCurrent in scoresIndividualGame) {
    sortable.push([gameCurrent, scoresIndividualGame[gameCurrent]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
});

let objSorted = {}
sortable.forEach(function(item){
    objSorted[item[0]]=item[1]
})

let objSortedLength = Object.keys(objSorted);
for(a = 0; a < objSortedLength.length; a++) {
  console.log(`${objSortedLength[a]} score: ${objSorted[objSortedLength[a]]}`)
}