window.onload = function () {
  let clicks = 0;
  const body = document.body;

  function createPlanet() {
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
    }, Math.floor(Math.random() * (2000 - 800)) + 800);
  }

  for (let i = 0; i < 5; i++) {
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
      checkForWinner();
    });
  });

  function checkForWinner() {
    let planets = document.querySelectorAll(".planet");
    if (planets.length < 2) {
      alert(`You Won this took you ${clicks / 5} shots per target`);
    }
  }
  function clickCounter() {
    clicks++;
    console.log(clicks);
    endGame();
  }

  body.addEventListener("click", () => clickCounter());

  function endGame() {
    if (clicks > 29) {
      alert("You Lose, you ran out of clicks");
    }
  }
};


//add scoring and accuracy stats at the end of each level and reset automatically
//code it so you only have a limited number of shots
//code css popup at the end of each round
//code rounds that get harder and harder
//make explosion animation different by cycling backround posistion image each time
