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

  
class RandomNumberGenerator {
    constructor(element, remainingTotal) {
      this.element = element;
      this.remainingTotal = remainingTotal;
      this.number = 0;
    }
  
    generate() {
      const maxNumber = Math.min(2, this.remainingTotal);
      this.number = Math.floor(Math.random() * (maxNumber + 1));
      this.number = Math.min(this.number, this.remainingTotal);
      this.remainingTotal -= this.number;
      this.element.innerText = this.number;
    }
  }
  
  const randomNumbers = document.querySelectorAll(".random-number-goals");
  const totalPoints = 15;
  const numPlayers = randomNumbers.length;
  
  if (totalPoints >= numPlayers) {
    let remainingTotal = totalPoints;
    let remainingPlayers = numPlayers;
  
    randomNumbers.forEach((element, index) => {
      const maxPossiblePoints = Math.min(remainingTotal, remainingPlayers * 4);
      const generator = new RandomNumberGenerator(element, maxPossiblePoints);
      generator.generate();
      remainingTotal -= generator.number;
      remainingPlayers--;
    });
  } else {
    let allocatedTotal = 0;
  
    randomNumbers.forEach((element, index) => {
      const maxPossiblePoints = Math.min(4, totalPoints - allocatedTotal);
      const generator = new RandomNumberGenerator(element, maxPossiblePoints);
      generator.generate();
      allocatedTotal += generator.number;
    });
  }
  
  class RandomNumberTurnovers {
    constructor(element, remainingTotal) {
      this.element = element;
      this.remainingTotal = remainingTotal;
      this.number = 0;
    }
  
    generate() {
      const maxNumber = Math.min(4, this.remainingTotal);
      this.number = Math.floor(Math.random() * (maxNumber + 1));
      this.number = Math.min(this.number, this.remainingTotal);
      this.remainingTotal -= this.number;
      this.element.innerText = this.number;
    }
  }
  
  const randomTurnovers = document.querySelectorAll(".random-number-turnovers");
  const totalTurnovers = 6;
  const numPlayersTurnovers = randomTurnovers.length;
  
  if (totalTurnovers >= numPlayersTurnovers) {
    let remainingTotalTurnovers = totalTurnovers;
    let remainingPlayersTurnovers = numPlayersTurnovers;
  
    randomTurnovers.forEach((element, index) => {
      const maxPossibleTurnovers = Math.min(remainingTotalTurnovers, remainingPlayersTurnovers * 4);
      const generator = new RandomNumberTurnovers(element, maxPossibleTurnovers);
      generator.generate();
      remainingTotalTurnovers -= generator.number;
      remainingPlayersTurnovers--;
    });
  } else {
    let allocatedTotalTurnovers = 0;
  
    randomTurnovers.forEach((element, index) => {
      const maxPossibleTurnovers = Math.min(4, totalTurnovers - allocatedTotalTurnovers);
      const generator = new RandomNumberTurnovers(element, maxPossibleTurnovers);
      generator.generate();
      allocatedTotalTurnovers += generator.number;
    });
  }
  
  class RandomNumberBlocks {
    constructor(element, remainingTotal) {
      this.element = element;
      this.remainingTotal = remainingTotal;
      this.number = 0;
    }
  
    generate() {
      const maxNumber = Math.min(4, this.remainingTotal);
      this.number = Math.floor(Math.random() * (maxNumber + 1));
      this.number = Math.min(this.number, this.remainingTotal);
      this.remainingTotal -= this.number;
      this.element.innerText = this.number;
    }
  }
  
  const randomBlocks = document.querySelectorAll(".random-number-blocks");
  const totalBlocks = 30;
  const numPlayersBlocks = randomBlocks.length;
  
  if (totalBlocks >= numPlayersBlocks) {
    let remainingTotalBlocks = totalBlocks;
    let remainingPlayersBlocks = numPlayersBlocks;
  
    randomBlocks.forEach((element, index) => {
      const maxPossibleBlocks = Math.min(remainingTotalBlocks, remainingPlayersBlocks * 4);
      const generator = new RandomNumberBlocks(element, maxPossibleBlocks);
      generator.generate();
      remainingTotalBlocks -= generator.number;
      remainingPlayersBlocks--;
    });
  } else {
    let allocatedTotalBlocks = 0;
  
    randomBlocks.forEach((element, index) => {
      const maxPossibleBlocks = Math.min(4, totalBlocks - allocatedTotalBlocks);
      const generator = new RandomNumberBlocks(element, maxPossibleBlocks);
      generator.generate();
      allocatedTotalBlocks += generator.number;
    });
  }
  
  class RandomNumberAssists {
    constructor(element, remainingTotal) {
      this.element = element;
      this.remainingTotal = remainingTotal;
      this.number = 0;
    }
  
    generate() {
      const maxNumber = Math.min(4, this.remainingTotal);
      this.number = Math.floor(Math.random() * (maxNumber + 1));
      this.number = Math.min(this.number, this.remainingTotal);
      this.remainingTotal -= this.number;
      this.element.innerText = this.number;
    }
  }
  
  const randomAssists = document.querySelectorAll(".random-number-assists");
  const totalAssists = 15;
  const numPlayersAssists = randomAssists.length;
  
  if (totalAssists >= numPlayersAssists) {
  let remainingTotalAssists = totalAssists;
  let remainingPlayersAssists = numPlayersAssists;
  
  randomAssists.forEach((element, index) => {
  const maxPossibleAssists = Math.min(remainingTotalAssists, remainingPlayersAssists * 4);
  const generator = new RandomNumberAssists(element, maxPossibleAssists);
  generator.generate();
  remainingTotalAssists -= generator.number;
  remainingPlayersAssists--;
  });
  } else {
  let allocatedTotalAssists = 0;
  
  randomAssists.forEach((element, index) => {
  const maxPossibleAssists = Math.min(4, totalAssists - allocatedTotalAssists);
  const generator = new RandomNumberAssists(element, maxPossibleAssists);
  generator.generate();
  allocatedTotalAssists += generator.number;
  });
  }
  
  