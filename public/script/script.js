const jerseyNumbers = document.querySelectorAll('.jersey-numbers');
const playerNames = document.querySelectorAll('.player-name');

 

const players = Array.from(jerseyNumbers).map((element, index) => ({
  number: parseInt(element.textContent),
  name: playerNames[index].textContent
}));

 

players.sort((a, b) => a.number - b.number);

 

players.forEach((player, index) => {
  jerseyNumbers[index].textContent = player.number;
  playerNames[index].textContent = player.name;
});

 

const firstWordBold = document.querySelectorAll('.player-name');
firstWordBold.forEach(element => {
  const words = element.textContent.split(' ');
  const firstWord = words.shift();
  element.innerHTML = `<span class="first-name-bold">${firstWord}</span> ${words.join(' ')}`;
});