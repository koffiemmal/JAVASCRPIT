//let Nom = prompt("Quelle est votre Nom");
//console.log(Nom);
//let Prenom = prompt("Quelle est votre prenom");
//console.log(Prenom);

//console.log("Bienvenue " + Nom + " " + Prenom);
//condition
/* let age = 17
if (age <= 17) {
    console.log("c'est une mineur")
} else {
    console.log("non elle est majeure")
}
let nom = "GORDON"
let Prenom = "GORDON";
if (nom == Prenom) {
    console.log("c'est bizarre d'avoir le mem nom bro")
} else {
    console.log("Ok votre nom peut passer") */
/* } */
/* let number = Number(prompt("veuillez choisir un nomre"));
console.log(typeof number);
if (number > 0) {
    console.log("votre nombre est positif")
} else {
    if (number == 0) console.log("votre nombre est null")
    else { console.log("votre nombre est negatif") }
} */
/* let sexe = prompt('quelle est votre sexe , f pour feminin , m pour masculin');
let fesse = prompt("est ce que tu as fesse ? o pour oui n pour non");
if (sexe == "f" && fesse == o) {
    console.log("Chemin tracé ton avenir et coller derriere toi")
} else { console.log("Travaille dur tu dois manger a la suer de ton front") }
if (sexe == "m " || fesse == n) {
    console.log("je t'ai dis de te concentrer")
} */


//switch and case


/* let lundi = "Kodjo";
let mardi = "ablam";
let mercredi = "kokou";
let jeudi = "yao";
let vendredi = "koffi";
let samedi = "Komi";
let dimanche = "kossi"; */
/* let Nom = prompt("entrer votre nom de semaine");
switch (Nom) {
    case "kodjo":
        console.log("Vous etes née un lundi");

        break;
    case "ablam":
        console.log("vous etes née un mardi")
        break;
    case "kokou":
        console.log("vous etes née un mercredi")
        break;
    case "yao":
        console.log("vous etes née un jeudi ")
        break;
    case "koffi":
        console.log("vous etes née un vendredi")
        break;
    case "komi":
        console.log("vous etes née un samedi")
        break;
    case "kossi":
        console.log("vous etes née un dimanche")
        break;


    default:
        console.log("votre nom doit etre erronée")
        break;
} */
//boucle while && for
/* let specialite = prompt("qu'elle est votre specialité")
while (specialite != "IT") {
    console.log("tu n'as pas ta place ici");
    specialite = prompt("qu'elle est votre specialité")
} */
/* let nbr = 1;
while (nbr < 6) {
    console.log("votre nombre est inferreir");
    nbr++;

} */
/* 
for (let i = 1; i < 7; i++) {
    console.log(`tour${i}`)
} */
/* let note;
let Ns = 0;


for (let i = 1; i < 5; i++) {
    note = Number(prompt("entre vos notes "));
    console.log(note);
    Ns = note + Ns;

}


let moyenne = Ns / 4;
console.log("votre moyenne general est " + moyenne);
if (moyenne > 10) {
    console.log("Bravo")
} else if (moyenne == 10) {
    console.log("Vous devez repasser")

} else {
    console.log("Vous etes recalez")
} */

/* let lundi = 1;
let mardi = 2;
let mercredi = 3;
let jeudi = 4;
let vendredi = 5;
let samedi = 6;
let dimanch = 7; */
/* let jour;
jour = prompt("entrer le jour qu'il est")
switch (jour) {
    case "lundi":
        console.log("le jour suivant est mardi ")
        break;
    case "mardi":
        console.log("le jour suivant est mercredi")
        break;
    case "mercredi":
        console.log("le jour suivant est jeudi")
        break;
    case "jeudi":
        console.log("le jour suivant est vendredi")
        break;
    case "vendredi":
        console.log("le jour suivant est samedi")
        break;
    case "samedi":
        console.log("le jour suivant est dimanche")
        break;
    case "dimanche":
        console.log("le jour suivant est lundi")
        break;
    default:
        console.log("vous avez mal saisi le jour")
        break;
} */
/* let Heure = Number(prompt("rentrer lheure "));

let Minute = Number(prompt("rentrer les minutes "));
let seconde = Number(prompt("rentrer les secondes "));
console.log("il est alors " + Heure + " H " + Minute + " min " + seconde + " sec");
if ((seconde + 1) <= 59 && (seconde + 1) > 0) {
    console.log("il est alors " + Heure + " H " + Minute + " min" + (seconde + 1) + " sec");
} else {
    seconde = 0;

    console.log("il est alors " + Heure + " H " + (Minute + 1) + " min" + seconde + " sec");
} */
/* let Heure = Number(prompt("il est quel heure"));
let Minute = Number(prompt("combien de minutes ?"));
let seconde = Number(prompt("combien de seconde ?"));
if (seconde < 59 && seconde > 0) {
    console.log("il est alors " + Heure + " H " + Minute + " min" + (seconde + 1) + " sec");
} else {
    seconde = 0;

    if (Minute < 59 && Minute > 0) {
        console.log("il est alors " + Heure + " H " + (Minute + 1) + " min" + seconde + " sec");
    } else {
        Minute = 0;
        if (Heure < 23 && Heure > 0) {
            console.log("il est alors " + (Heure + 1) + " H " + Minute + " min" + seconde + " sec");

        } else {
            Heure = 0;
            console.log("il est alors " + Heure + " H " + Minute + " min" + seconde + " sec");
        }
    }
} */
let nombre = Number(prompt("quelle table voulez vous vous"));
for (let i = 0; i < 13; i++) {
    let resultat = Number(nombre * i);
    console.log(nombre + "x" + i + " = " + resultat);
}