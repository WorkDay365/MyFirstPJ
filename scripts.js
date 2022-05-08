'use strict';
let numberOfFilms = prompt('How many movies have you watched? ');

let personalMovieDB = new Object();
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = new Object();
personalMovieDB.actors = new Object();
personalMovieDB.genres = new Array();
personalMovieDB.privat = false;


let endFilm; 
let evaluation;

for (let i=1;i<=numberOfFilms;i++){
   endFilm = prompt('One the last film: ');
   if(endFilm =='' || endFilm.length > 50 ){
      i--;
   }
   else{
     evaluation = prompt('How do eveluation it? ');

      personalMovieDB.movies[endFilm] = evaluation;
   }
   
}
console.log(personalMovieDB);

if (personalMovieDB.count<10){
   alert('Do you like films?');
}
else{
   if (personalMovieDB.count>=10 && personalMovieDB.count<=30) {
      alert('You classic spectator');
   } else {
      alert('You is moviegoer?');
   }
}


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