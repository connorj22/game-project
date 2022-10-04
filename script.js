window.onload = function () {
  let clicks = 0;
  const body = document.body;
  let planetCount = 0
  let scoreClick = 0

  function createPlanet() {
    planetCount++
    clicks = 4 * planetCount
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
    console.log(planetCount)
    console.log(`clicks ${clicks}`)
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
    });
  });

  function checkForWinner() {
    let planets = document.querySelectorAll(".planet");
    if (planets.length < 2) {
      alert(`You Won! you used ${scoreClick / planetCount} shots per target`);
      window.location.reload();
    }
  }
  body.addEventListener("click", () => clickCounter());

  function clickCounter() {
    clicks--
    scoreClick++
    document.getElementById("counter").innerHTML = ` Ammo: ${clicks}`
    endGame();
    checkForWinner()
  }

  function endGame() {
    if (clicks < 1) {
      alert("You Lose, you ran out of clicks");
      window.location.reload();
    }
  }
};


//add scoring and accuracy stats at the end of each level and reset automatically
//make it so the "i < 5" on line 30 is dinamic based on the level
//code css popup at the end of each round
//code rounds that get harder and harder
//make explosion animation different by cycling backround posistion image each time
