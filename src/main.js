
//import { cleanghibli, } from './data.js';
//import { cleanghibli, } from './data.js';

import data from './data/ghibli/ghibli.js';
console.log(data);

let data1 = "";
data.films.map((value) => {
  data1 += `<section class="movies">
        <img src="${value.poster}" alt="poster" class="poster">
        <h2 class="title">${value.title}</h2>
        <p>${value.release_date}</p>
      </section>`;
});
document.getElementById("all_movies").innerHTML = data1;
