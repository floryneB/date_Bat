let activiteChoisie = "";

const boutonOui = document.getElementById("yes");
const boutonNon = document.getElementById("no");


// Bouton NON qui s'échappe 😵

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




// Quand on clique sur OUI 🥰

boutonOui.addEventListener("click", function(){


    document.getElementById("question")
    .classList.add("hidden");


    document.getElementById("activite")
    .classList.remove("hidden");


});






// Choix cinéma ou verre 🍿🍹

function chooseActivity(choix){


    activiteChoisie = choix;


    document.getElementById("activite")
    .classList.add("hidden");


    document.getElementById("dateChoice")
    .classList.remove("hidden");


}






// Envoi de la réponse par mail 💌

document.getElementById("send")
.addEventListener("click", function(){


    const date =
    document.getElementById("date").value;



    if(date === ""){


        alert("Choisis une date ❤️");

        return;

    }



    const message = 
`Bonjour ❤️

J'accepte le rendez-vous !

Mon choix :
${activiteChoisie}

La date choisie :
${date}

À bientôt 🌸`;



    const email = "floryne.barraud@gmail.com";



    window.location.href =
    `mailto:${email}?subject=Notre date ❤️&body=${encodeURIComponent(message)}`;



    document.getElementById("dateChoice")
    .classList.add("hidden");


    document.getElementById("result")
    .classList.remove("hidden");

});
