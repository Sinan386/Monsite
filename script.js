async function afficherFilms() {
    const reponse = await fetch("https://raw.githubusercontent.com/jikan-me/jikan-rest/master/storage/api-docs/api-docs.json");
    const films = await reponse.json();
    console.log(films);
  }

  afficherFilms();