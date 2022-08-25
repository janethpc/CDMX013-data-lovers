import data from '../src/data/ghibli/ghibli.js';
import { filterByCategory, dateFilter, ascendingOrder, ascendingYears, descendingOrder, descendingYears } from '../src/data.js';

describe('data', () => {

    it('should be an object', () => {
      expect(typeof data).toBe('object');
    });
})

describe('films',() => {
    it ('films by genres', () => {
        const dataGhibli = data;
        const category = "adventure";
        //GIVEN THE USER WANTS TO FILTER MOVIES BY GENRE
        const resolved = filterByCategory(dataGhibli,category);
        //WHEN  USERS FILTER BY ADVENTURE 
        //THEN IT WILL DISPLAY 6 FILMS
        expect(resolved.length).toEqual(6);
    })
})

describe('dateFilter',() => {
    it('filter films by date release between 1988 to 1989',() => {
        const solved = dateFilter(data.films, 1988 , 1989);
        expect(solved.length).toEqual(3);
       //expect(dateFilter(data.films, 1988 , 1989)).toEqual([{release_date: 1989}, {release_date: 1988}]);  
    })
})

describe('ascendingOrder',() => {
    it('order films by title A to Z',() => {
        const orderMovies = ascendingOrder([data.films[0],data.films[19]])
        expect(orderMovies).toEqual([data.films[0],data.films[19]])
        
    })
})

describe('ascendingYears', () => {
    it('order films by release date', () => {
        const moreNewMovies = ascendingYears([2001, 2002, 2003, 2010, 2022])
        expect(moreNewMovies).toEqual([2001, 2002, 2003, 2010, 2022])
    })
})

describe('descendingOrder', () => {
    it('Reverse a list of numbers from 0 to 9', () => {
        const reversedNumbers = descendingOrder([5, 6, 7, 10, 15])
        expect(reversedNumbers).toEqual([15, 10, 7, 6, 5])
    })

})

describe('descendingYears', () => {
    it('sort movies by oldest date', () => {
        const oldestMovies = descendingYears([2001, 2002, 2003, 2004, 2005])
        expect(oldestMovies).toEqual([2001, 2002, 2003, 2004, 2005])
    })
})

// describe('descendingYears', () => {
//     it('order descending films by year', () => {

//     })
// })