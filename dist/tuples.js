"use strict";
/*Enkel tuple
En tuple är en definierad array av en specifik längd
men även av dess typer - alltså vilka datatyper
vi ska tillåta i denna array*/
/*Ex) vi vill hantera rgb-färger*/
/*Detta säger att vi enbart kan ha värden i arrayen
som är av typen number */
// const rgbColor: number[]
/*Här har vi bestämt att denna enbart får ha
3 element */
/*Ett enkelt sätt att skapa en array med bestämd längd */
const rgbColor = [255, 0, 255];
rgbColor.push(0, 110, 255, 0.5);
const okResponse = [200, "ok"];
const createdResponse = [201, "created"];
const notFoundResponse = [404, "Not found"];
const badResponse = [400, "Bad request"];
const responses = [
    [200, "OK"],
    [201, "Created"],
    [400, "Bad request"],
];
