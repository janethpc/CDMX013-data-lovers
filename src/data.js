
export  function films_fantasy(jsonData, category){
  return jsonData.films.filter(function(data){
    return data.genre == category;
  });
}

export function films_genders(jsonData){   //funcion por medio del cual se aplica metodo filter para que me regrese un array que contenga
  let genders_list= [];                       //solo los generos contenidos en el objeto main.js:18-28;
  return jsonData.films.filter(function(data){
    if(!genders_list.includes(data.genre)){    
      return genders_list.push(data.genre);      
    }
  });
} 

  




//export const anotherExample = () => {
  //return 'OMG';
//};
