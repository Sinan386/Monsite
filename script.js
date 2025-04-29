// async function afficherJoke() {
//     const reponse = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr");
//     const joke = await reponse.json();
//     console.log(joke);
//   }

//   afficherJoke();

foreach ( i = 0; i < 10; i++) {
fetch("https://v2.jokeapi.dev/joke/Any?lang=fr")
    .then(res => res.json())
    .then(joke => {
        console.log(joke)
       let a = joke;
       });
}
    

    