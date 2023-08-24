async function getUsernameToUUID(username) {
  const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
  const data = await response.json();
  
  if (data && data.id) {
    return data.id;
  } else {
    throw new Error("Player not found.");
  }
}

const username = "player123";
getUsernameToUUID(username)
  .then(uuid => console.log(`UUID for ${username}: ${uuid}`))
  .catch(error => console.error(error));