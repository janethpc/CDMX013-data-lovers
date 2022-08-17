import { films_fantasy, films_genders } from './data.js'; 


import data from './data/ghibli/ghibli.js';
console.log(data);

const dataGhibli = data.films; //guarda el objeto en una variable

function displayMovies(data) { //Función para mostrar todas las peliculas
  document.getElementById("all_movies").innerHTML = ''; //Para vaciar el contenedor
  let data1 = "";
  data.forEach((value) => { //forEach itera sobre la data
    data1 += `<section class="movies">
        <img src="${value.poster}" alt="poster" class="poster">
        <h2 class="title">${value.title}</h2>
        <p>${value.release_date}</p>
      </section>`;
  });
  document.getElementById("all_movies").innerHTML = data1;
}
displayMovies(dataGhibli); //muestra todas las peliculas

let genders = "";  //crea dinamicamente lista con opciones de los generos dentro de films 
const filteredGenders= films_genders(data);
filteredGenders.map((value) => {
  genders += `
  <li>
    <a href="#" class="dd_menu_a">
    <span id="menu_films">${value.genre}</span></a>
  </li>
  `;
});
document.getElementById("gender_list").innerHTML= genders;

//codigo tomado de stackoverflow necesito investigar que hace exactamente (escuchar eventos para listas dinamicas)
function getEventTarget(e) { 
  e = e || window.event; 
  return e.target || e.srcElement;
};

let gender_ul= document.getElementById("gender_list"); //asignar la funcion de evento a la lista dinamica
gender_ul.onclick=function(event){
  let target= getEventTarget(event);
  console.log(target.innerHTML);
  gender_allsFilms(target.innerHTML);
};

//seccion para hacer dinamica la <nav></nav>
var a_parent = document.querySelectorAll(".a_parent"); 
var dd_menu_a = document.querySelectorAll(".dd_menu_a");


a_parent.forEach(function (aitem) {
  aitem.addEventListener("click", function () {
    a_parent.forEach(function (aitem) {
      aitem.classList.remove("active");
    })
    dd_menu_a.forEach(function (dd_menu_item) {
      dd_menu_item.classList.remove("active");
    })
    aitem.classList.add("active");
  })
})

dd_menu_a.forEach(function (dd_menu_item) {
  dd_menu_item.addEventListener("click", function () {
    dd_menu_a.forEach(function (dd_menu_item) {
      dd_menu_item.classList.remove("active");
    })
    dd_menu_item.classList.add("active");
  })
}) //termina seccion que hace "funcional" el nav 


function gender_allsFilms(category){     //se crea dinamicamente los elementos a mostrar dentro de la categoria de films 
document.getElementById("all_movies").innerHTML= "";  //deja contenedor vacio 
  const filtered_allclass = films_fantasy(data, category); 
console.log(filtered_allclass);
let data_filmsfantasy = "";
filtered_allclass.map((value) => {
  data_filmsfantasy += `<section class="genre_fantasy">
  <img src="${value.poster}" alt="poster" class="poster">
  <h2 class="title">${value.title}</h2>
  <p>${value.release_date}</p>
</section>`;
});
only_onegender(data_filmsfantasy);
}

function only_onegender(onlyFiltered) { //funcion que muestre en pantalla unicamente lo filtrado 
  document.getElementById("all_fantasy").innerHTML = onlyFiltered;
}
