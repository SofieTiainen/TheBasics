/*Explicit typ annotering 
- talar om med kolon vilken typ jag vill att det ska vara 
Sätter vi musmarkören över movieTitle, ser vi vilken typ det är*/

let movieTitle: string;
let movieLength: number;
let isCategoryAction: boolean;

movieTitle = "The Equalizer 3";
movieLength = 94;
isCategoryAction = true;


// //går ej
// movieTitle = 123; 

// //går ej
// movieLength = "94";

// //går ej
// isCategoryAction = "true";

/*Implicit typ annotering - (type inference) 
tvSerie förstår att typen ska vara string, 
försöker vi då ge den 123 får vi röd udnerstruken
text under tvSerie, att typ number ej är möjlig att ge
till sträng variabel = detta är inplicit typ annotering

Vi får ej typ tilldelningen förren vi tilldelat den
ett värde i deklarationen*/

let tvSerie = "La Brea";
let isDrama = true;

// tvSerie = 123;
// isDrama = "false";

/*Any type - egentligen att gå tillbaka till JS 
denna bli any, men man kan även tilldela den typen any*/

// let director;
let director: any = "Christopher Noian"
director = 10;
director: true;
director();

/*Varför existerar any då? Ibland vet vi ej vad vi får tillbaka, 
om vi ex) anropar ett externt API, vi vet ej vilket typ vi får tillbaka, 
sedan kan vi sätta rätt typ för den, akta er lite för denna typ */


