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
  
  /* Out team stats */

  class RandomNumberTurnoversO {
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
  
  const randomTurnoversO = document.querySelectorAll(".random-number-turnovers-o");
  const totalTurnoversO = 6;
  const numPlayersTurnoversO = randomTurnoversO.length;
  
  if (totalTurnoversO >= numPlayersTurnoversO) {
    let remainingTotalTurnoversO = totalTurnoversO;
    let remainingPlayersTurnoversO = numPlayersTurnoversO;
  
    randomTurnoversO.forEach((element, index) => {
      const maxPossibleTurnoversO = Math.min(remainingTotalTurnoversO, remainingPlayersTurnoversO * 4);
      const generator = new RandomNumberTurnoversO(element, maxPossibleTurnoversO);
      generator.generate();
      remainingTotalTurnoversO -= generator.number;
      remainingPlayersTurnoversO--;
    });
  } else {
    let allocatedTotalTurnoversO = 0;
  
    randomTurnoversO.forEach((element, index) => {
      const maxPossibleTurnoversO = Math.min(4, totalTurnoversO - allocatedTotalTurnoversO);
      const generator = new RandomNumberTurnoversO(element, maxPossibleTurnoversO);
      generator.generate();
      allocatedTotalTurnoversO += generator.number;
    });
  }
  
  class RandomNumberBlocksO {
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
  
  const randomBlocksO = document.querySelectorAll(".random-number-blocks-o");
  const totalBlocksO = 30;
  const numPlayersBlocksO = randomBlocksO.length;
  
  if (totalBlocksO >= numPlayersBlocksO) {
    let remainingTotalBlocksO = totalBlocksO;
    let remainingPlayersBlocksO = numPlayersBlocksO;
  
    randomBlocksO.forEach((element, index) => {
      const maxPossibleBlocksO = Math.min(remainingTotalBlocksO, remainingPlayersBlocksO * 4);
      const generator = new RandomNumberBlocksO(element, maxPossibleBlocksO);
      generator.generate();
      remainingTotalBlocksO -= generator.number;
      remainingPlayersBlocksO--;
    });
  } else {
    let allocatedTotalBlocksO = 0;
  
    randomBlocksO.forEach((element, index) => {
      const maxPossibleBlocksO = Math.min(4, totalBlocksO - allocatedTotalBlocksO);
      const generator = new RandomNumberBlocksO(element, maxPossibleBlocksO);
      generator.generate();
      allocatedTotalBlocksO += generator.number;
    });
  }
  
  class RandomNumberAssistsO {
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
      
      const randomAssistsO = document.querySelectorAll(".random-number-assists-o");
      const totalAssistsO = 15;
      const numPlayersAssistsO = randomAssistsO.length;
      
      if (totalAssistsO >= numPlayersAssistsO) {
      let remainingTotalAssistsO = totalAssistsO;
      let remainingPlayersAssistsO = numPlayersAssistsO;
      
      randomAssistsO.forEach((element, index) => {
      const maxPossibleAssistsO = Math.min(remainingTotalAssistsO, remainingPlayersAssistsO * 4);
      const generator = new RandomNumberAssistsO(element, maxPossibleAssistsO);
      generator.generate();
      remainingTotalAssistsO -= generator.number;
      remainingPlayersAssistsO--;
      });
      } else {
      let allocatedTotalAssistsO = 0;
      
      randomAssistsO.forEach((element, index) => {
      const maxPossibleAssistsO = Math.min(4, totalAssistsO - allocatedTotalAssistsO);
      const generator = new RandomNumberAssistsO(element, maxPossibleAssistsO);
      generator.generate();
      allocatedTotalAssistsO += generator.number;
      });
      }
      
      class RandomNumberGenerator {
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
      
      // Adjust the desired total range for each category
      const totalGoalsMin = 4;
      const totalGoalsMax = 15;
      
      const totalGoalsOMin = 4;
      const totalGoalsOMax = 15;
      
      // Calculate the total points for goals within the desired range
      const totalGoals = Math.floor(Math.random() * (totalGoalsMax - totalGoalsMin + 1)) + totalGoalsMin;
      const totalGoalsO = Math.floor(Math.random() * (totalGoalsOMax - totalGoalsOMin + 1)) + totalGoalsOMin;
      
      const randomGoals = document.querySelectorAll(".random-number-goals");
      const numPlayersGoals = randomGoals.length;
      
      const randomGoalsO = document.querySelectorAll(".random-number-goals-o");
      const numPlayersGoalsO = randomGoalsO.length;
      
      if (totalGoals >= numPlayersGoals) {
        let remainingTotalGoals = totalGoals;
        let remainingPlayersGoals = numPlayersGoals;
      
        randomGoals.forEach((element) => {
          const maxPossibleGoals = Math.min(remainingTotalGoals, remainingPlayersGoals * 4);
          const generator = new RandomNumberGenerator(element, maxPossibleGoals);
          generator.generate();
          remainingTotalGoals -= generator.number;
          remainingPlayersGoals--;
        });
      } else {
        let allocatedTotalGoals = 0;
      
        randomGoals.forEach((element) => {
          const maxPossibleGoals = Math.min(4, totalGoals - allocatedTotalGoals);
          const generator = new RandomNumberGenerator(element, maxPossibleGoals);
          generator.generate();
          allocatedTotalGoals += generator.number;
        });
      }
      
      if (totalGoalsO >= numPlayersGoalsO) {
        let remainingTotalGoalsO = totalGoalsO;
        let remainingPlayersGoalsO = numPlayersGoalsO;
      
        randomGoalsO.forEach((element) => {
          const maxPossibleGoalsO = Math.min(remainingTotalGoalsO, remainingPlayersGoalsO * 4);
          const generator = new RandomNumberGenerator(element, maxPossibleGoalsO);
          generator.generate();
          remainingTotalGoalsO -= generator.number;
          remainingPlayersGoalsO--;
        });
      } else {
        let allocatedTotalGoalsO = 0;
      
        randomGoalsO.forEach((element) => {
          const maxPossibleGoalsO = Math.min(4, totalGoalsO - allocatedTotalGoalsO);
          const generator = new RandomNumberGenerator(element, maxPossibleGoalsO);
          generator.generate();
          allocatedTotalGoalsO += generator.number;
        });
      }
      
      const goalsHomeTotalElement = document.querySelector(".goals-home-total");
      const goalsHomeTotalOElement = document.querySelector(".goals-out-total");
      
      goalsHomeTotalElement.innerText = totalGoals.toString();
      goalsHomeTotalOElement.innerText = totalGoalsO.toString();

      const totalGamePointsElement = document.querySelector(".total-game-points");
      const totalGamePoints = totalGoals + totalGoalsO;
      totalGamePointsElement.innerText = totalGamePoints.toString();
      
      
      // Repeat the above steps for other categories (turnovers, blocks, assists, turnovers-o, blocks-o, assists-o) with the desired total range and class names
      