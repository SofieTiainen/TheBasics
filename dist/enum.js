"use strict";
/*Enumereringar - inget vi har i JS.
En enum är en namngiven kontant med två värden.
Namnet och ett numerisk värde representation

Enum är en gruppering av namngivna konstanter.
*/
const supportStatus = "new" /* SupportStatus.NEW */;
/*Enum i en funkton*/
function isSolved(status) {
    return status === "solved" /* SupportStatus.SOLVED */;
}
isSolved("pending" /* SupportStatus.PENDING */);
