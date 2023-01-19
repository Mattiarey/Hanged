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
        let tempstring = ""

        let isWordHere = false

        //l'idea è che si crei una stringa con la lettera richiesta nelle posizioni dove dovrebbe essere e con i trattini dove non dovrebbe essere
        for (i = 0; i < parola.length && canContinue; i++) {
            if (parola.indexOf(lettera) != -1) {
                if (parola[i] == lettera) {
                    tempstring += lettera
                    isWordHere = true
                }
                else { tempstring += document.getElementById("id_parola").value[i] }     //qui non si deve aggiungere un trattino, ma il carattere preciso della stringa originale
            } else {
                canContinue = false
            }
        }
        document.getElementById("id_parola").value = tempstring


        if(!isWordHere){
        //fare tuttecose con l'immagine
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
