// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
        const directorsArr = moviesArray. map((oneMovie) => {
        return oneMovie.director;
        });
        return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

    function howManyMovies(moviesArray) {
        
        const spielbergDramaMovies = moviesArray.filter(movie => {
          return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
        });
      
        
        return spielbergDramaMovies.length;
      }
      
     
      const spielbergDramaCount = howManyMovies(movies);
     // console.log(`Steven Spielberg directed ${spielbergDramaCount} drama movies.`);
      



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
  
    const totalScore = moviesArray.reduce((accumulator, movie) => {
      if(movie.score){return accumulator + movie.score;}
      else{
        return accumulator;
      }
    }, 0);
  
    const averageScore = totalScore / moviesArray.length;
    
    // this is from internet
    return parseFloat(averageScore.toFixed(2));
  }
  
  
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const DramaMovies = moviesArray.filter(movie => {
        return movie.genre.includes('Drama');
      });
      if (DramaMovies.length==0){
        return 0;
      }
      const totalDramaScore = DramaMovies.reduce((accumulator, movie) => {
        if(movie.score){return accumulator + movie.score;}
        else{
          return accumulator;
        }
      }, 0);
      const averageDramaScore = totalDramaScore / DramaMovies.length;
      return parseFloat(averageDramaScore.toFixed(2));

    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 
    
    
    const sortedByYear = moviesArray.slice().sort(function(a,b){
        
        if (a.year !== b.year) {
            return a.year - b.year;
          }
          return a.title.localeCompare(b.title);
    });

    return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedByTitle = moviesArray.slice().sort(function(a,b){
        
        
          return a.title.localeCompare(b.title);
    });
    const onlyTitle = sortedByTitle. map((oneMovie) => {
        return oneMovie.title;
        });
      
    return onlyTitle.slice(0,20) ;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
