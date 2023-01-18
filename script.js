//"onomatopeico","aberrazione","toponimo","aracnofobia","entropia","iniquo"
const arrayStringhe = ["saba"]
numero = Math.floor(Math.random() * arrayStringhe.length)

//quando premi il bottone "fatto"
function done() {
    let parola = arrayStringhe[numero]


    let lettera = document.getElementById("id_lettera").value
    lettera = lettera.toLowerCase()


    parolona = document.getElementById("id_parola").value
    if (lettera == "") { alert("devi scrivere almeno una lettera") }
    else {
        canContinue = true;
        for (i = 0; i < parola.length && canContinue; i++) {
            if (parola.indexOf(lettera) != -1) {
                if (parola[i] == lettera) {

                    //per qualche motivo non cambia
                    //devo creare una stringa identica con le lettere già cambiate e poi rimpiazzrla
                    document.getElementById("id_parola").value[i] = lettera
                }
            } else canContinue = false
        }
    }
}

//questa è la prima cosa che parte quando carica la pagina
window.onload = function () {
    generazione()
}

//questa funzione sceglie dal primo la parola da usare 
function generazione() {

    let trattini = "";
    for (i = 0; i < arrayStringhe[numero].length; i++) {
        trattini += "_ "
    }
    document.getElementById("id_parola").value = trattini
}
