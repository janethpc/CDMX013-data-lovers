export function filmsGenders(jsonData) {   //funcion por medio del cual se aplica metodo filter para que me regrese un array que contenga
  let genders_list = [];                       //solo los generos contenidos en el objeto main.js:18-28;
  return jsonData.films.filter(function (data) {
    if (!genders_list.includes(data.genre)) {
      return genders_list.push(data.genre);
    }
  });
}

export function filterByCategory(jsonData, category) {
  return jsonData.films.filter(function (data) {
    return data.genre == category;
  });
}

export function filterby_rtScore(jsonData){
  const rtScore = jsonData.films.filter(function (data) {
    return data.rt_socre;
  })
  return rtScore;
}

export function dateFilter(data, minYear, maxYear) { //función recibe la data, y los parametros del año de main.
  const filterYear = data.filter(function (data) {
    return (data.release_date >= minYear && data.release_date <= maxYear);
  });
  return filterYear;
}

export function ascendingOrder(data) {
  let compareNames = data.sort((a, b) => {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  })
  return compareNames;
}

export function descendingOrder(data) {
  let backwards = '';
  return data.reverse(backwards);
}

export function ascendingYears(jsonData) {
  let recentMore = jsonData.sort((a, b) => {
    if (a.release_date > b.release_date) {
      return -1
    }
    if (a.release_date < b.release_date) {
      return 1
    }
  })
  return recentMore;
}

export function descendingYears(jsonData) {
  let old = jsonData.sort((a, b) => {
    if (a.release_date < b.release_date) {
      return -1
    }
    if (a.release_date > b.release_date) {
      return 1
    }
  })
  return old;
}









