// Gestion du menu déroulant (présente sur toutes les pages)
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Ferme le dropdown si l'utilisateur clique en dehors
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// --- FEED DE BLAGUES (index.html) ---
if (document.querySelector("#jokes")) {
  const container = document.getElementById("jokes");
  const buttonReload = document.getElementById("reloadJokes");
  buttonReload.addEventListener("click", function () {
    // clear jokes container
    container.innerHTML = "";
    // add new jokes
    getJokes(4); // Je veux afficher 4 blagues
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
   * Fonction qui récupère une blague depuis une API distante
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
   * Fonction qui affiche plusieurs blagues
   * @param jokeNum le nombre de blagues
   */
  function getJokes(jokeNum) {
    for (let i = 0; i < jokeNum; i++) {
      getJoke(i + 1);
    }
  }

  getJokes(4); // initialisation

  const form = document.getElementById("joke-form");
  // Écoute du submit pour ajouter une nouvelle blague
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // on empêche le rechargement de la page
    const text = document.getElementById("text").value.trim();
    // détermine l'index de la nouvelle carte
    const nextIndex = container.getElementsByClassName("joke-card").length + 1;
    // ajoute la carte avec displayJoke (réponse vide)
    displayJoke(text, "", nextIndex);
    form.reset(); // vide le formulaire
  });
}

// --- GALERIE PICSUM (gallery.html) ---
if (document.querySelector("#gallery")) {
  const gallery = document.getElementById("gallery");
  const reload = document.getElementById("reload");
  const countIn = document.getElementById("count");

  /**
   * Charge n images aléatoires depuis Picsum
   * @param n nombre d'images
   */

  function loadPicsum(n) {
    gallery.innerHTML = ""; // vide la galerie
    for (let i = 0; i < n; i++) {
      // on crée un conteneur <div> pour utiliser innerHTML
      const imgContainer = document.createElement("div"); //`<img src="https://picsum.photos/400?random=${Math.random()}" alt="Image #${i+1}">`;
      imgContainer.innerHTML = `<img src="https://picsum.photos/200?random=${Math.random()}" alt="Image #${i+1}">`;
      gallery.appendChild(imgContainer);
    }
  }

// 1) on crée le handler une seule fois
  function refreshGallery() {
    const n = Number(countIn.value) || 1;
    loadPicsum(n);
  }

  // 2) on l’assigne au clic
  reload.addEventListener('click', refreshGallery);

  // 3) on l’appelle pour l’initialisation
  refreshGallery();
 }

 
