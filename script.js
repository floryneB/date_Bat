let activite = "";

const boutonNon = document.getElementById("no");
const boutonOui = document.getElementById("yes");


// Le bouton Non s'échappe 😵

function fuir(){

    const largeur = window.innerWidth - 150;
    const hauteur = window.innerHeight - 80;

    const x = Math.random() * largeur;
    const y = Math.random() * hauteur;

    boutonNon.style.position = "fixed";
    boutonNon.style.left = x + "px";
    boutonNon.style.top = y + "px";

}

boutonNon.addEventListener("mouseover", fuir);
boutonNon.addEventListener("click", fuir);


// Le bouton Oui ouvre les choix

boutonOui.addEventListener("click", function(){

    document.getElementById("choices").classList.remove("hidden");

});


// Choix de l'activité

function chooseDate(choix){

    activite = choix;

    document.getElementById("calendar")
    .classList.remove("hidden");

}


// Envoi de la réponse

document.getElementById("send")
.addEventListener("click", function(){

    const date =
    document.getElementById("date").value;


    if(date === ""){

        alert("Choisis une date ❤️");

        return;

    }


    /*
    Ici on ajoutera l'envoi par mail
    avec EmailJS quand ton site sera prêt.
    */


    document.getElementById("calendar")
    .classList.add("hidden");


    document.getElementById("result")
    .classList.remove("hidden");


});
