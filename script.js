window.onload = function () {
  let clicks = 26;
  const body = document.body;
  let planetCount = 0;
  let scoreClick = 0;
  let startingPlanet = 4;
  let startTitle = document.querySelector("#startTitle")

  startTitle.addEventListener("click", () => game());


  function game() {

    startingPlanet++
    if (startingPlanet > 5) clicks = 25

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
      you had a shooting percentage of ${(startingPlanet / (scoreClick - 1)) * 100}`);
        game()
      }
    }

    body.addEventListener("click", () => clickCounter());

    function clickCounter() {
      clicks--
      scoreClick++;
      document.getElementById("counter").innerHTML = ` Ammo: ${clicks}`;
      endGame();
      checkForWinner();
    }

    function endGame() {
      if (clicks < 1) {
        alert("You Suck!! Game Over, you ran out of Ammo");
         window.location.reload();
      }
    }

  }
};


//problems: plants speed is doubling when leveling up and clicks are decreasing by 2 when leveling up
//line 62 is the problem but dont know how to fix
//try adding a resart/next level function that adds the variables then re runs the game
//try reoginizing the code so game() only had functions of gameplay and another function handles the iteration

//make it so instead of reseting it adds an astroid and starts the next level
//code css popup at the end of each round and one when you loose that says the level you were on
//add simple instructions for the game on the start screen