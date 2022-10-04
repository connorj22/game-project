
window.onload = function () {
  const body = document.body;

  console.log(body);
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
    }, 1000);
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
   if (planets.length < 2) alert("YOU WIN");
  }
}


//orginize code
//change movement to be more smooth
//code css popup at the end of each round
//make explosion animation different by cycling backround posistion image each time
//add scoring, accuracy, and time stats at the end of each level