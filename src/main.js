
import { films_fantasy, films_genders } from './data.js';
console.log(films_fantasy);

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

const filtered_resources = films_fantasy(data);
console.log(filtered_resources);


let data_filmsfantasy = "";
filtered_resources.map((value) => {
  data_filmsfantasy += `<section class="genre_fantasy">
  <img src="${value.poster}" alt="poster" class="poster">
  <h2 class="title">${value.title}</h2>
  <p>${value.release_date}</p>
</section>`;
});
document.getElementById("all_fantasy").innerHTML = data_filmsfantasy;


let genders = "";
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

//codigo tomado de stackoverflow necesito investigar que hace exactamente
function getEventTarget(e) { 
  e = e || window.event; 
  return e.target || e.srcElement;
};

let gender_ul= document.getElementById("gender_list");
gender_ul.onclick=function(event){
  let target= getEventTarget(event);
  console.log(target.innerHTML);
};

var a_parent = document.querySelectorAll(".a_parent");
var dd_menu_a = document.querySelectorAll(".dd_menu_a");
var dd_menu_a_spam = document.querySelectorAll(".dd_menu_a_spam");

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
})

dd_menu_a_spam.forEach(function (texitem) {

  texitem.addEventListener("click", function () {
    dd_menu_a_spam.forEach(function (texitem) {
      texitem.classsection.add("active");
    })
    dd_menu_a_spam.classmain.remove("active");
  })
})