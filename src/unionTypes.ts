/*Ex) vi har en variabel, ex) modelyear på en bil, där vi bara vill ha nummer
men ibland får vi in årsmodellen som en sträng, hur kan vi då tillåta
både string och number */

/*Basic Union Type*/

let modelYear: number | string ;

modelYear = 2019;
modelYear = "2019";
/*Enbart new Date() fungerar ej, men
getFullYear fungerar då den returnerar ett nummer*/
// modelYear = new Date("2017-01-01")
modelYear = new Date("2017-01-01").getFullYear();

type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

/*Vi vill att coordinates även ska fungera för lat och long*/

let coordinates: Point | Loc = {x: 10, y: 10};
coordinates = {lat: 100.02, long: 256.5}

/*Vi kan använda union typen för funktioner*/
/*Funktioner med union typ argument*/

function displayModelYear(modelYear: number | string): void {
    console.log(`The vehicles modelyear is ${modelYear}`)
}

displayModelYear(2019);
displayModelYear("2019");
// displayModelYear(new Date("2018-11-25");
displayModelYear(new Date("2018-11-25").getFullYear());

/*Union typer med listor*/
//Denna ser rätt ut, men är ej rätt
// const coords: Point[] | Loc[] = [];

// coords.push({x:20, y:20})

// coords.push({x:20, y:20, lat: 100.4, long: 34.5})

/*Men vi vill att man SKA kunna skicka in enbart x och y koordinater
eller lat och long, då måste vi sätta paranteser runt*/

/*Då säger vi att coords ska vara av typen Point eller Loc och 
att det ska varav en array av detta*/
const coords: (Point | Loc)[] = [];

coords.push({x:20, y:20})
coords.push({lat:20.5, long:200.45})

/*En variabel som kan ta tre olika variabler, movieTypes
kan bara acceptera action, drama eller horror*/
let movieTypes: 'Action' | 'Drama' | 'Horror';

movieTypes = 'Action'
movieTypes = 'Comedy'


