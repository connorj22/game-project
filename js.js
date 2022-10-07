startTitle.addEventListener("click", () => start());
let clicks = 26;
const body = document.body;
let planetCount = 0;
let scoreClick = 0;
let startingPlanet = 5;
let menu = document.querySelector(".levelContainer")
menu.style.display = "none"
let endScreen = document.querySelector(".endScreen")
endScreen.style.display = "none"
let stats = document.querySelector(".stats")
let winner = document.querySelector(".winner")
let loser = document.querySelector(".loser")
let planets = document.querySelectorAll(".planet")

function start() {
  let startTitle = document.querySelector("#startTitle");
  startTitle.remove();
  menu.style.display = "grid"
}
let easy = document.querySelector(".easy")
easy.addEventListener("click", () => easyMode())

function easyMode() {
  startingPlanet = 5
  gameBrain();
  menu.style.display = "none"
}

let medium = document.querySelector(".medium")
medium.addEventListener("click", () => mediumMode())

function mediumMode() {
  startingPlanet = 10
  gameBrain();
  menu.style.display = "none"
}

let hard = document.querySelector(".hard")
hard.addEventListener("click", () => hardMode())

function hardMode() {
  startingPlanet = 15
  gameBrain();
  menu.style.display = "none"
}

let impossible = document.querySelector(".impossible")
impossible.addEventListener("click", () => impossibleMode())

function impossibleMode() {
  startingPlanet = 20
  gameBrain();
  menu.style.display = "none"
}



function gameBrain() {
  scoreClick = 0;
  planetCount = 0

  function createPlanet() {
    planetCount++;
    let planet = document.createElement("div");
    planet.classList.add("planet");
    body.append(planet);

    planet.style.top = `${Math.random() * window.innerHeight}px`;
    planet.style.left = `${Math.random() * window.innerWidth}px`;

    function movePlanet(planetObj) {
      let top = Math.random() * window.innerHeight;
      let left = Math.random() * window.innerWidth;

      planetObj.style.top = `${top}px`;
      planetObj.style.left = `${left}px`;
    }
    setInterval(() => {
      movePlanet(planet);
    }, Math.floor(Math.random() * (1500 - 500)) + 500);
  }

  for (let i = 0; i < startingPlanet; i++) {
    createPlanet();
  }
  game()
}

  function game() {
    function checkForWinner() {
      let planets = document.querySelectorAll(".planet");
      if (planets.length < 2) {
        endScreen.style.display = "grid"
        stats.innerHTML = `
        you used ${(scoreClick - 1) / planetCount} shots per target! 
        you missed ${scoreClick - 1 - startingPlanet} Shots!
        you had a shooting percentage of ${(startingPlanet / (scoreClick - 1)) * 100
      }`
      stats.style.display = "flex"
        winner.style.display = "grid" 
        loser.style.display = "none"
      }
    }

    let planets = document.querySelectorAll(".planet");
    let count = planets.length;
    planets.forEach((planet) => {
      planet.addEventListener("click", () => {
        planet.classList.toggle("shot");
        setInterval(() => {
          planet.remove(planet);
          count--;
        }, 100);
      checkForWinner();
      });
    });


    body.addEventListener("click", () => clickCounter());

    function clickCounter() {
      clicks--;
      scoreClick++;
      document.getElementById("counter").innerHTML = ` Ammo: ${clicks}`;
      endGame()
    }

    function endGame() {
      if (clicks < 1) {
        alert("You Suck")
        window.location.reload()
      }
    }
  }

  let reset = document.querySelector(".reset")
  reset.addEventListener("click", () => window.location.reload())


//make the stats centered
//change font to be pixelated
//add simple instructions for the game on the start screen