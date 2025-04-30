const container = document.getElementById("jokes");

const buttonReload = document.getElementById("reloadJokes");
buttonReload.addEventListener("click", function () {
  // clear jokes container
  container.innerHTML = "";

  // add new jokes
  getJokes(4); // Je veux afficher 5 blagues
});

/**
 * Fonction qui affiche une blague à l'écran
 * @param question la 1ère partie de la blague (question)
 * @param answer la 2nd partie de la blague (réponse)
 * @param index le numéro de la blague
 */
function displayJoke(question, answer, index) {
  const child = document.createElement("div");
  child.className = "joke-card";
  container.appendChild(child);

  child.innerHTML = `${index}: <p>${question}</p><p>${answer}</p>`;
}

/**
 * Fonction qui récupère une blague depuis une API distante et l'affiche dans l'index.html
 * @param index le numéro de la blague
 */
function getJoke(index) {
  fetch("https://v2.jokeapi.dev/joke/Any?lang=fr")
    .then((res) => res.json())
    .then(function (json) {
      displayJoke(json.setup, json.delivery, index);
    });
}

/**
 * Fonction qui affiche une seule blague avec son numéro en paramètre
 * @param jokeNum le numéro de la blague
 */
function getJokes(jokeNum) {
  for (let i = 0; i < jokeNum; i++) {
    getJoke(i + 1);
  }
}

getJokes(4); // Je veux afficher 4 blagues

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const form = document.getElementById("joke-form");
