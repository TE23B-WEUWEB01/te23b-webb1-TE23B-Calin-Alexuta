let rutaTal1 = document.querySelector("#tal1")
let rutaTal2 = document.querySelector("#tal2")
let rutaSvar = document.querySelector("#svar")
function plus() {
    rutaSvar.value = Number(rutaTal1.value) + Number(rutaTal2.value);

    if (rutaSvar.value == 666) {
        document.body.style = "visibility: hidden";
    }
}
function minus() {
    rutaSvar.value = Number(rutaTal1.value) - Number(rutaTal2.value);
}
function multiplication() {
    rutaSvar.value = Number(rutaTal1.value) * Number(rutaTal2.value);
}
function division() {
    rutaSvar.value = Number(rutaTal1.value) / Number(rutaTal2.value);
}