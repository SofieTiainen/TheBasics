"use strict";
/*Nu ska vi kolla på hur vi hanterar funktioner i ts
Vi kan använda typer för att definiera
argument vi vill ha in i en funktion.
vi kan också definiera returtypen vi ska
returnera tillbaka*/
/*________________________________________________________ */
/*Funktioner med typade argument*/
/*Denna returnernar Void- den returnerar inget.
En funktion som ej returnerar - bra om man talar om det.*/
const myFunction = (name, age) => {
    console.log(`${name} - ${age}`);
};
/*_____________________________________________________________ */
/*Funktioner med retur typ
Vi typar returvärdet*/
/*Syftet med funktionen är att returnera ett värde
av typen string/number/ingenting(void) */
function sayHello(name) {
    const greeting = `Välkommen ${name}`;
    return greeting;
}
/*Lika bra i arrow functions */
const square = (num) => {
    return num * num;
};
myFunction("Karl", 16);
console.log(sayHello("Sofie"));
console.log(square(2));
/*___________________________________________________________ */
/*Implicip typ hantering
Om vi tittar på categories, har den förstått att den kommer vara en
lista med strängar.

I mapen får får category typen string.
Implicip förstår den, att det vi itererar över i map,
kommer från en lista med strängar, därför blir det en sträng*/
const categories = ['action', 'drama', 'horror'];
categories.map(category => {
    return category.toUpperCase;
});
/*___________________________________________________________- */
/*Void retur
För vi muspekaren över funktionens namn, säger den att detta
är en funkton av typen void d.v.s att den ej returnerar något,
detta då vi ej angivit retur nyckelordet.

I JS - en funktion utan returvärde ger undefined eller null*/
const printMovieInfo = (title) => {
    console.timeLog(title);
};
/*Här är det mer tydligt, då vi anger void */
const printMovie = (title) => {
    console.timeLog(title);
};
/*______________________________________________________ */
/*Returtypen Never -
det här ska aldrig någonsin kunna returnera något.
ex) om man har en funktion som kastar undantag/felhanterings funktion.
vi tar med ett felmeddelande som är string och ett nummer,
denna är till för att kasta felet uppåt i anropsstacken, vi vill
aldrig någonsin returnera någonting.

Då måste vi i funktionen lägga till
att det ej finns en endpoint att anropa.
Vi lägger till
throw new Error();

*/
const throwExeption = (errMsg, errorCode) => {
    throw new Error();
};
function mainLoop() {
    while (true) {
        console.log("I am running forever... ");
    }
}
