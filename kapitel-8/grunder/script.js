// // var dag = "fredag";
// // alert(dag);
// // console.log("Idag är det " + dag);

// // var är du född
// // var stad = prompt("Var är du född?");
// // console.log("Du är född i" + stad);





// // var gissning = prompt("Vart är Alex ifrån");
// // if (gissning == "cluj") {
// //     alert("du är cigan");
// // } else {
// //     alert("Du är hangörian");
// // }


// var slumptal1 = Math.round(Math.random() * 100);
// var slumptal2 = Math.round(Math.random() * 100);

// var gissning = prompt ("Vad är " + slumptal1 + " + " +  slumptal2 + "?");
// if (gissning == facit) {
//     document.writeln("<h1>Du är en människa! 🐀</h1>");
// } else {
//     document.writeln("<h1>Du är en robot! 🪳");
// }

// document.writeln("Slumtal1 = " + slumptal1 );


// Läs in två tal

// var tal1 = prompt("Ange ett tal1");
// var tal2 = prompt("Ange ett tal2");
// var summa = Number(tal1) + Number(tal2);
// document.writeln("Summan är" + summa);

// läs in inkomst
// läs in skatt
// skriv it inkomst efter skatt

// var brutto = prompt("Vad är din lön före skatt?");
// // var skatt = prompt("Vad är din skatt?");
// // var inkomst = Number(brutto) * (100 - Number(skatt))/100;
// // document.writeln("Din inkomst efter skatt är " + inkomst + " med " + skatt + "% i skatt.");



// var tal1 = parseInt(prompt("Skriv in ett heltal:"));
// var tal2 = parseInt(prompt("Skriv in ett till heltal:"));

// if (tal1 > tal2) {
//     document.write(tal1 + " är större än " + tal2);
// }
// else if (tal2 > tal1) {
//     document.write(tal2 + " är större än " + tal1);
// }
// else {
//     document.write("Talen är lika stora");
// }


// var grader = parseInt(prompt("Hur många grader är det i vattnet"));

// if (grader > 20 && grader < 35) {
//     document.write("Det ska bli skönt att bada!");
// }
// else {
//     document.write("Jag skippar badet");
// }


// var val = confirm("Klicka på OK eller på Avbryt");

// if (val) {
//     document.write("Du klicka på OK");
// }
// else {
//     document.write("Du klicka på Avbryt");
// }


// var a = 5;
// var b = 3;

// if (a > b) {
//     document.write("A: " + a);
// }
// else if (b > a) {
//     document.write("B: " + b);
// }
// else {
//     document.write("A = B");
// }

var a = 5;
var b = 5;

a > b ? console.log("A: " + a) : console.log("B: " + b);
