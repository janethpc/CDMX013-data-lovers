export function films_fantasy(jsonData, category) {
  return jsonData.films.filter(function (data) {
    return data.genre == category;
  });
}

export function films_genders(jsonData) {   //funcion por medio del cual se aplica metodo filter para que me regrese un array que contenga
  let genders_list = [];                       //solo los generos contenidos en el objeto main.js:18-28;
  return jsonData.films.filter(function (data) {
    if (!genders_list.includes(data.genre)) {
      return genders_list.push(data.genre);
    }
  });
}

export function dateFilter(data, minYear, maxYear) { //función recibe la data, y los parametros del año de main.
  const filterYear = data.filter(function (data) {
    return (data.release_date >= minYear && data.release_date <= maxYear);
  });
  return filterYear;
}



