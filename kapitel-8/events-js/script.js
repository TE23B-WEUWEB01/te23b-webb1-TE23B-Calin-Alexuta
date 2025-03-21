// while (true) {
//     let namn = prompt("Ange ditt namn:");
//     let lösenord = prompt("Ange ditt lösenord:");
//     if (
//         namn == "alex" && lösenord == "12345"
//     ) {
//         document.writeln("<3 I LOVE U!")
//         break;
//     } else {
//         document.writeln("Fel uppgifter");
//     }
//     let ålder = prompt("hur gammal är du?")
//     document.writeln(`Hej ${namn} du är ${ålder}`);
// }

// Läs in ett heltal mella 5-10
// Skriv un så många rader som heltalt i webbläsaren
let heltal = parseInt(prompt("Skriv ett heltal 5-10:"));
for (let i = 1; i <= heltal;  i++) {
    document.writeln(`rad ${i}<br>`)
}