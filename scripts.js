"use strict";

let genres = [];
alert(+"thousand");
let gg = +"Thousand";
alert(typeof gg);
let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("How many movies have you watched? ", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("How many movies have you watched? ", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 1; i < 2; i++) {
      const a = prompt("One the last film: ", ""),
        b = prompt("How do eveluation it? ", "");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        i--;
        console.log("error");
      }
    }
  },
  detectedPersonalLevel: function (params) {
    if (personalMovieDB.count < 10) {
      console.log("Do you like2 films?");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("You classic spectator");
    } else if (personalMovieDB.count > 30) {
      console.log("You is moviegoer?");
    } else {
      console.log("Error");
    }
  },

  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
      let genre = prompt(`What are your like genre on namber  ${i} ?`, ``);
      if (genre === "" || genre == null) {
        console.log("You enter uncorrect data...");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favorite ganre ${i + 1} - is this ${item}`);
    });
  },
};

// let endFilm;
// let evaluation;

// showMyDB(personalMovieDB.privat);

// rememberMyFilms();

// detectedPersonalLevel();

// writeYourGenres();
// console.log(genres);
//console.log(personalMovieDB);

/* 
// Пишем решение вот тут
  for (let i=5; i<11;i++){
   console.log(i);
}

console.log('2 ---------------------');

// Место для второй задачи

// Пишем решение вот тут
for (let i = 20; i > 9; i--) {
    if (i <= 13) {
        break;
    }
    console.log(i);
} 
console.log('3 ---------------------');

for (let i=2; i<11;i=i+2){
    console.log(i);
 }
 console.log('4 ---------------------');
let i=1;
 while(i<=15){
    i++;
    if (i % 2 === 0) {
        continue;
         } 
         else {
            console.log(i);
        }
     */
/* }
 console.log('5 ---------------------');

 const arrayOfNumbers = [];

 for (let i=5; i<11;i++){
    arrayOfNumbers[i-5]=i; 
    
 }
 console.log('6 ---------------------'); */
/* 
 const arr = [3, 5, 8, 16, 20, 23, 50];
 const result = [];

 console.log('1 ---------------------');

 for (let i=0; i< arr.length;i++){
    result[i] = arr[i]; 
 }
 console.log(result);
 console.log('2 ---------------------');

 const data = [5, 10, 'Shopping', 20, 'Homework'];

  
 for (let i=0; i< data.length;i++){
     if (  typeof data[i] === 'number'){
        data[i] = data[i]*2;
     }
     else{
        data[i] = data[i] + " - done";
     }
   
 }   */
//console.log(data);
/*  console.log('3 ---------------------');
 
 const data = [5, 10, 'Shopping', 20, 'Homework'];
 const result = [];

 let SumIndex = data.length-1;
 let IndTwo = SumIndex;
 for (let i=0; i<= SumIndex;i++){
    result[IndTwo] = data[i];
    IndTwo--
 }
 console.log(result); */
/* console.log('1 ---------------------');
 
 const lines = 5;
 let result = '';
 let y = ''
 for (let i=0; i<= lines;i++){
    let x ='' ;
    for (let k = lines-i-1; k>0; k--){
        x = x + ' '; 
      }
      
    //console.log(x);
    result = result + x + y +'*' + y + x + '\n';
    console.log(result);
    y = y + '*';
 }
 console.log('2 -------------\n---5--------');
 console.log(result); */
