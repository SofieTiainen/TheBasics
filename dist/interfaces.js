"use strict";
/*Ett interface definierar ett objekt struktur

ex) vi har vår movies sida, vi vill definiera
hur vårt movies-obect ser ut*/
const taken = {
    id: 23,
    title: "Taken",
    director: "Pierre Morel",
    releaseDate: 2008,
    // length: 94,
    displayInfo() {
        return 'Taken';
    },
};
const Ford = {
    id: 1,
    manufacturer: "Ford",
    registrationNumber: "ABC123",
    model: "Fusion",
    milage: 25000,
};
const bike = {
    id: 45,
    manufacturer: "Monark",
    hasFootBreak: true,
};
const truck = {
    id: 4567,
    manufacturer: "Mack",
    model: "SomeModel",
    registrationNumber: "VBT234",
    tara: 3000,
    milage: 45000
};
