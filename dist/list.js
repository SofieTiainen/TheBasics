"use strict";
/*Arrayer
Här använder vi oss av typade lister

Explicit typas array...*/
/*Här säger vi att arrayen endast får innehålla siffror*/
const numberList = [1, 2, 3, 4, 5];
numberList[0] = 100;
// numberList[0] = "100";
/*Implicit typas array */
/*Här säger vi:
utifrån vad vi initierar den till, så förstår
den att det är number */
const numbersList = [1, 2, 3, 4, 5];
numbersList[1] = 25;
// numbersList[1] = "25";
/*Alternativ syntax till att skapa en array*/
/*Här säger vi att det ska vara en array
av typen sträng */
const movieCategories = [];
/*Här skapar vi manufacutrerList, vi säger att det
ska vara av typen Manufacturer och en array, sedan
initierar vi den till en tom array */
const manufacturerList = [];
manufacturerList.push({ name: "Volvo", country: "Sweden" });
//går ej
// manufacturerList.push({name: "Volvo", country: "Sweden", phone: 12345});
/*Multidimensionella listor
två-dimensionell array*/
const demo = [[]];
/*tredimensionell */
const demo = [[[]]];
