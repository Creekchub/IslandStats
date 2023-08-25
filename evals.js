async function getUUIDToUsername(uuid) {
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
  .catch(error => console.error(error));
