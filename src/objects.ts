/*Funktioner som behöver ett object som argument*/

/*Object som funktions argument*/

function printMovieInformaton(movie:{title:string; releaseYear:number}): void{
    console.log(`${movie.title} - ${movie.releaseYear}`);
}
printMovieInformaton({title:"The Equalizer 3", releaseYear: 2023});


const movie = {title:"Taken", releaseYear: 2008}
printMovieInformaton(movie);

/*Använda type nyckelordet för att beskriva en typ.
Vi har här skapat en egen typ som vi kallar Movie*/

type Movie = {
    title: string,
    releaseYear: number;
    director: string;
};

const batmanBegins: Movie = {
    title: "Barman Begins",
    releaseYear: 2005,
    director: "Christopher Nolan"
};

function displayMovieInfo(movie: Movie):void{
    console.log(`${movie.title} - ${movie.releaseYear} - ${movie.director}`)
}

displayMovieInfo(batmanBegins);


type Vehicle = {
    readonly id: number;
    registrationNumber: string;
};

const volvo: Vehicle = {
    id: 1,
    registrationNumber: "ABC123",
};

/*Ponera att id:t kommer från en databas som restAPI:et anropar, 
vi vill inte att id:t ska kunna manipuleras

Vi lägger till readonly i vår typ, då kan vi ej ändra id:t genom 
ex)
volvo.id = 14;

vi kan enbart ändra ett readonly värde genom instansiering eller initiering
*/


/*Intersection types - vi kan slå samman typer 
Vi kan ta vår Vehicle och skapa en annan typ ex) car.

Alltså om vi vill nyttja vehicle och car i min kod samtidigt

Vi kan även dynamiskt lägga på*/

type Car = {
    color: string;
}

type VehicleGearType = {
    numberOfGears: number;
}

type SuperCar = Vehicle & Car & VehicleGearType;
type SuperDuperCar = Vehicle & Car & VehicleGearType & {horsePower: number}

const mySuperCar: SuperCar = {
    id: 2,
    registrationNumber: "ABC123",
    color: "White",
    numberOfGears: 6,
}

const mySuperDuperCar: SuperDuperCar = {
    id: 2,
    registrationNumber: "ABC123",
    color: "White",
    numberOfGears: 6,
    horsePower: 1000,
}