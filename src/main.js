
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

var a_parent =  document.querySelectorAll(".a_parent");
var dd_menu_a = document.querySelectorAll(".dd_menu_a");

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