
//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data);

fetch("./data/ghibli/ghibli.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(ghibli) {
       // console.log(ghibli.films[2].title);
       let data1="";
       ghibli.films.map((value)=>{
        data1+=`<section class="movies">
        <img src="${value.poster}" alt="poster" class="poster">
        <h2 class="title">${value.title}</h2>
        <p>${value.release_date}</p>
      </section>`;
       });
       document.getElementById("all_movies").innerHTML=data1;
        
    }).catch((error)=>{
        console.log(error)
    })
