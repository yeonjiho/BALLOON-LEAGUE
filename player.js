const players = { 
 
  "시은": { 
    number: "PLAYER 01", 
    rank: "시즌 7 미참가", 
    wins: "3회", 
    finals: "3회", 
    seasons: "6", 
    championship: "SEASON 1 · SEASON 3 · SEASON 6", 
    participated: [1, 2, 3, 4, 5, 6] 
  }, 
 
  "지호": { 
    number: "PLAYER 02", 
    rank: "2위", 
    wins: "2회", 
    finals: "3회", 
    seasons: "7", 
    championship: "SEASON 4 · SEASON 5", 
    participated: [1, 2, 3, 4, 5, 6, 7] 
  }, 
 
  "서한": { 
    number: "PLAYER 03", 
    rank: "시즌 7 미참가", 
    wins: "0회", 
    finals: "0회", 
    seasons: "5", 
    championship: "없음", 
    participated: [1, 2, 3, 4, 5] 
  }, 
 
  "민준": { 
    number: "PLAYER 04", 
    rank: "4위", 
    wins: "0회", 
    finals: "0회", 
    seasons: "7", 
    championship: "없음", 
    participated: [1, 2, 3, 4, 5, 6, 7] 
  }, 
 
  "민성": { 
    number: "PLAYER 05", 
    rank: "5위", 
    wins: "0회", 
    finals: "0회", 
    seasons: "7", 
    championship: "없음", 
    participated: [1, 2, 3, 4, 5, 6, 7] 
  }, 
 
  "서빈": { 
    number: "PLAYER 06", 
    rank: "6위", 
    wins: "1회", 
    finals: "1회", 
    seasons: "5", 
    championship: "SEASON 2", 
    participated: [2, 3, 4, 5, 6, 7] 
  }, 
 
  "시원": { 
    number: "PLAYER 07", 
    rank: "3위", 
    wins: "0회", 
    finals: "0회", 
    seasons: "6", 
    championship: "없음", 
    participated: [2, 3, 4, 6, 7] 
  }, 
 
  "준우": { 
    number: "PLAYER 08", 
    rank: "1위", 
    wins: "1회", 
    finals: "1회", 
    seasons: "5", 
    championship: "SEASON 7", 
    participated: [2, 3, 4, 5, 6, 7] 
  }, 
 
  "혜영": { 
    number: "PLAYER 09", 
    rank: "7위", 
    wins: "0회", 
    finals: "0회", 
    seasons: "5", 
    championship: "없음", 
    participated: [3, 4, 5, 6, 7] 
  } 
 
}; 
 
 
const input = document.getElementById("playerInput"); 
const searchButton = document.getElementById("searchButton"); 
 
const profile = document.getElementById("profile"); 
const error = document.getElementById("playerError"); 
 
const profileName = document.getElementById("profileName"); 
const profileNumber = document.getElementById("profileNumber"); 
 
const rank = document.getElementById("rank"); 
const wins = document.getElementById("wins"); 
const finals = document.getElementById("finals"); 
const seasons = document.getElementById("seasons"); 
 
const championship = document.getElementById("championship"); 
const seasonList = document.getElementById("seasonList"); 
 
 
function searchPlayer(){ 
 
  const name = input.value.trim(); 
 
  profile.style.display = "none"; 
  error.style.display = "none"; 
 
  if(!name){ 
    error.textContent = "선수 이름을 입력해주세요."; 
    error.style.display = "block"; 
    return; 
  } 
 
  const player = players[name]; 
 
  if(!player){ 
    error.textContent = "등록된 선수를 찾을 수 없습니다."; 
    error.style.display = "block"; 
    return; 
  } 
 
  profileName.textContent = name; 
  profileNumber.textContent = player.number; 
 
  rank.textContent = player.rank; 
  wins.textContent = player.wins; 
  finals.textContent = player.finals; 
  seasons.textContent = player.seasons; 
 
  championship.textContent = player.championship; 
 
  seasonList.innerHTML = ""; 
 
  player.participated.forEach(season => { 
 
    const badge = document.createElement("span"); 
 
    badge.className = "season-badge"; 
    badge.textContent = `SEASON ${season}`; 
 
    seasonList.appendChild(badge); 
 
  }); 
 
  profile.style.display = "block"; 
 
} 
 
 
searchButton.addEventListener("click", searchPlayer); 
 
 
input.addEventListener("keydown", function(event){ 
 
  if(event.key === "Enter"){ 
    searchPlayer(); 
  } 
 
}); 
