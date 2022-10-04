window.onload = function () {
  let clicks = 26;
  const body = document.body;
  let planetCount = 0;
  let scoreClick = 0;
  let startingPlanet = 5;
  let startTitle = document.querySelector("#startTitle")

  startTitle.addEventListener("click", () => game());

  function game() {
    startTitle.remove()
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

    let planets = document.querySelectorAll(".planet");
    let count = planets.length;
    planets.forEach((planet) => {
      planet.addEventListener("click", () => {
        planet.classList.toggle("shot");
        setInterval(() => {
          planet.remove(planet);
          count--;
        }, 100);
      });
    });

    function checkForWinner() {
      let planets = document.querySelectorAll(".planet");
      if (planets.length < 2) {
        alert(`You Won! 
      you used ${(scoreClick -1) / planetCount} shots per target! 
      you missed ${(scoreClick -1) - startingPlanet} Shots!
      you had a shooting percentage of ${(startingPlanet / (scoreClick -1)) * 100}`);

        window.location.reload();
      }
    }
    body.addEventListener("click", () => clickCounter());

    function clickCounter() {
      clicks--;
      scoreClick++;
      document.getElementById("counter").innerHTML = ` Ammo: ${clicks}`;
      endGame();
      checkForWinner();
    }

    function endGame() {
      if (clicks < 1) {
        alert("You Suck!! you ran out of Ammo");
        window.location.reload();
      }
    }
  }
};


//make it so instead of reseting it adds an astroid and prompts the next level
//make it so the "i < 5" on line 30 is dinamic based on the level
//code css popup at the end of each round
//code rounds that get harder and harder
//add simple instructions for the game on the start screen