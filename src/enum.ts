/*Enumereringar - inget vi har i JS.
En enum är en namngiven kontant med två värden.
Namnet och ett numerisk värde representation

Enum är en gruppering av namngivna konstanter.
*/

/*Ex) vi har ett supportsystem där vi får in ärenden
som nya, lösa ärenden och ärenden som stängda*/

// const NEW: string = "new";
// const PENDING: string = "pending";
// const SOLVED: string = "solved";
// const CLOSED: string = "closed";

// const test = PENDING

/*Men istället för detta ovan kan vi skapa enum */

// const enum SupportStatus {
//     NEW, 
//     PENDING, 
//     SOLVED,
//     CLOSED,
// }

// const enum SupportStatus {
//     NEW = 10, 
//     PENDING = 15, 
//     SOLVED,
//     CLOSED,
// }

/*Använd const innan, så blir det renare i JS */

const enum SupportStatus {
    NEW = "new", 
    PENDING = "pending", 
    SOLVED = "solved",
    CLOSED = "closed",
}
const supportStatus = SupportStatus.NEW;

/*Enum i en funkton*/
function isSolved(status: SupportStatus): boolean {
    return status === SupportStatus.SOLVED
}

isSolved(SupportStatus.PENDING)
