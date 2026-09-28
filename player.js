const players = {

  "시은": {
    number: "PLAYER 01",
    avgRank: "2.9위",
    wins: "4회",
    finals: "6회",
    seasons: "10",
    championship: "SEASON 1 · SEASON 3 · SEASON 6, SEASON 10",
    participated: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11]
  },

  "지호": {
    number: "PLAYER 02",
    avgRank: "2.6위",
    wins: "3회",
    finals: "7회",
    seasons: "11",
    championship: "SEASON 4 · SEASON 5 · SEASON 8",
    participated: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },

  "서한": {
    number: "PLAYER 03",
    avgRank: "4.7위",
    wins: "0회",
    finals: "2회",
    seasons: "10",
    championship: "없음",
    participated: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11]
  },

  "민준": {
    number: "PLAYER 04",
    avgRank: "5.5위",
    wins: "0회",
    finals: "1회",
    seasons: "7",
    championship: "없음",
    participated: [1, 2, 3, 5, 6, 7, 11]
  },

  "민성": {
    number: "PLAYER 05",
    avgRank: "6.5위",
    wins: "0회",
    finals: "0회",
    seasons: "11",
    championship: "없음",
    participated: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },

  "서빈": {
    number: "PLAYER 06",
    avgRank: "4.6위",
    wins: "1회",
    finals: "1회",
    seasons: "8",
    championship: "SEASON 2",
    participated: [2, 3, 4, 6, 7, 8, 9, 10, 11]
  },

  "시원": {
    number: "PLAYER 07",
    avgRank: "5.1위",
    wins: "0회",
    finals: "1회",
    seasons: "8",
    championship: "없음",
    participated: [2, 3, 4, 6, 7, 8, 9, 11]
  },

  "준우": {
    number: "PLAYER 08",
    avgRank: "4.4위",
    wins: "2회",
    finals: "2회",
    seasons: "9",
    championship: "SEASON 7 · SEASON 11",
    participated: [2, 3, 4, 5, 6, 7, 8, 9, 11]
  },

   "혜영": {
    number: "PLAYER 09",
    avgRank: "7.3위",
    wins: "0회",
    finals: "0회",
    seasons: "9",
    championship: "없음",
    participated: [3, 4, 5, 6, 7, 8, 9, 10, 11]
  },

  "우성": {
    number: "PLAYER 10",
    avgRank: "9.3위",
    wins: "0회",
    finals: "0회",
    seasons: "3",
    championship: "없음",
    participated: [6, 8, 11]
  },

  "준서": {
    number: "PLAYER 11",
    avgRank: "2.3위",
    wins: "1회",
    finals: "2회",
    seasons: "3",
    championship: "없음",
    participated: [9, 10, 11]
  },

    "정윤": {
    number: "PLAYER 12",
    avgRank: "6.5위",
    wins: "0회",
    finals: "0회",
    seasons: "2",
    championship: "없음",
    participated: [10, 11]
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


function searchPlayer() {

  const name = input.value.trim();

  profile.style.display = "none";
  error.style.display = "none";

  if (!name) {
    error.textContent = "선수 이름을 입력해주세요.";
    error.style.display = "block";
    return;
  }

  const player = players[name];

  if (!player) {
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


input.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    searchPlayer();
  }

});
