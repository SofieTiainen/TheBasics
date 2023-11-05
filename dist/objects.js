"use strict";
/*Funktioner som behöver ett object som argument*/
/*Object som funktions argument*/
function printMovieInformaton(movie) {
    console.log(`${movie.title} - ${movie.releaseYear}`);
}
printMovieInformaton({ title: "The Equalizer 3", releaseYear: 2023 });
const movie = { title: "Taken", releaseYear: 2008 };
printMovieInformaton(movie);
const batmanBegins = {
    title: "Barman Begins",
    releaseYear: 2005,
    director: "Christopher Nolan"
};
function displayMovieInfo(movie) {
    console.log(`${movie.title} - ${movie.releaseYear} - ${movie.director}`);
}
displayMovieInfo(batmanBegins);
const volvo = {
    id: 1,
    registrationNumber: "ABC123",
};
const mySuperCar = {
    id: 2,
    registrationNumber: "ABC123",
    color: "White",
    numberOfGears: 6,
};
const mySuperDuperCar = {
    id: 2,
    registrationNumber: "ABC123",
    color: "White",
    numberOfGears: 6,
    horsePower: 1000,
};
