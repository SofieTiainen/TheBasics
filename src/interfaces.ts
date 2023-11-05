/*Ett interface definierar ett objekt struktur

ex) vi har vår movies sida, vi vill definiera
hur vårt movies-obect ser ut*/

/*Interface är till för att skapa en
förbindelse mellan den som utnyttjar mitt
interface och jag som tillhandar mitt interface*/

/*Använd interface när man vill definiera ett objekts struktur*/

interface Moviee {
    readonly id: number;
    title: string;
    director: string;
    releaseDate: number;
    length?: number;
    displayInfo(): string;
}

const taken: Moviee = {
    id: 23,
    title: "Taken",
    director: "Pierre Morel",
    releaseDate: 2008,
    // length: 94,
    displayInfo() {
        return 'Taken';
    },
}


/*Reopening interface  om man får interface från någon
och man vill lägga till något*/

interface Moviee {
    language?: string;
}

interface Vehiclee {
    readonly id: number;
    manufacturer: string;
}

interface Caar extends Vehiclee{
    registrationNumber: string;
    model: string;
    milage: number;
}

interface Bike extends Vehiclee {
    hasFootBreak: boolean;
}

const Ford: Caar = {
    id: 1,
    manufacturer: "Ford",
    registrationNumber: "ABC123",
    model: "Fusion",
    milage: 25000,
}

const bike: Bike = {
    id: 45,
    manufacturer: "Monark",
    hasFootBreak: true,
}

/*Utöka med flera interface*/

interface Truck extends Vehiclee, Caar {
    tara: number;
}

const truck: Truck = {
    id: 4567,
    manufacturer: "Mack",
    model: "SomeModel",
    registrationNumber: "VBT234",
    tara: 3000,
    milage: 45000
}