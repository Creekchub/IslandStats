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
  /*let games = ['sb', 'tgttos', 'hitw', 'bb', 'pkw'];

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
}*/


/*fetch("images/arrow.webp", { method: "HEAD" }) 
    .then(response => { 
        if (response.ok) { 
            console.log("File exists"); 
        } else { 
            console.log("File does not exist"); 
        } 
    }) 
    .catch(error => { 
        console.log('amoga')
    });*/
    

    /*let date1 = new Date('2023-10-10'); // October 7, 2023
    let date2 = new Date('2023-10-08'); // October 8, 2023
    
    if (date1 < date2) {
        console.log("date1 is before date2");
    } else if (date1 > date2) {
        console.log("date1 is after date2");
    } else {
        console.log("date1 is equal to date2");
    }*/

const data = [
  { id: 1, date: new Date('2023-10-10') },
  { id: 2, date: new Date('2023-10-08') },
  { id: 3, date: new Date('2023-10-09') },
];


data.sort((a, b) => a.date - b.date);

for(a = 0; a < data.length; a++) {
    console.log(data[a])
}

