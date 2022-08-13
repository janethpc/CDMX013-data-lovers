
//import {data_fantasy } from './data.js';
//console.log(data_fantasy);

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

const filtered_resources = data.films.filter(function(data){
  return data.genre == 'fantasy';
});
console.log(filtered_resources);

let data_filmsfantasy= "";
filtered_resources.map((value) => {
  data_filmsfantasy += `<section class="genre_fantasy">
  <img src="${value.poster}" alt="poster" class="poster">
  <h2 class="title">${value.title}</h2>
  <p>${value.release_date}</p>
</section>`;
});
document.getElementById("all_fantasy").innerHTML = data_filmsfantasy;



 



var a_parent =  document.querySelectorAll(".a_parent");
var dd_menu_a = document.querySelectorAll(".dd_menu_a");
var dd_menu_a_spam = document.querySelectorAll(".dd_menu_a_spam");

a_parent.forEach(function(aitem){

		aitem.addEventListener("click", function(){
			a_parent.forEach(function(aitem){
				aitem.classList.remove("active");
			})
			dd_menu_a.forEach(function(dd_menu_item){
				dd_menu_item.classList.remove("active");
			})
			aitem.classList.add("active");
		})
})

dd_menu_a.forEach(function(dd_menu_item){

		dd_menu_item.addEventListener("click", function(){
			dd_menu_a.forEach(function(dd_menu_item){
				dd_menu_item.classList.remove("active");
			})
			dd_menu_item.classList.add("active");
		})
})

dd_menu_a_spam.forEach(function(textem){

  textem.addEventListener("click", function(){
    dd_menu_a_spam.forEach(function(textem){
      textem.classsection.add("active");
    })
    dd_menu_a_spam.classmain.remove("active");
  })
})