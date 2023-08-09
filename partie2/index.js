/* console.log("
vrai ") */
//function


/* function direBonjour() {
    console.log("Bonjour")
}

direBonjour(); */


/* 
function identification() {
    Nom = prompt("votre Nom");
    Prenom = prompt("votre Prenom");
    Age = Number(prompt("votre Age"));

    console.log(`${Nom} ${Prenom} ${Age}`)
}
identification(); */
/* let Nom = prompt("votre Nom");
Prenom = prompt("votre Prenom");
Age = Number(prompt("votre Age"));

function ident(Nom, Prenom, Age) { console.log(`${Nom} ${Prenom} ${Age}`) }
ident(Nom, Prenom, Age); */
/* 
function Add */
/* 
function Addition() {
    let nombre_1 = Number(prompt("entrer votre premier nombre"));
    let nombre_2 = Number(prompt("entrer votre deuxieme nombre"));
    let total = Number(nombre_1 + nombre_2);
    return total;
}
let somme = Addition();
console.log(somme); */
/* function addition(nbr1, nbr2) {} */
/* 
let direBonjour = () => {
    console.log("Bonjour ");
}
/* /* console.log("taille du tableau " + mesFilms.length); */
/* direBonjour(); * / */

/* console.log(mesFilms);
mesFilms.push("justing");
console.log(mesFilms);
mesFilms.pop();
console.log(mesFilms);
mesFilms.splice(1, 1);
console.log(mesFilms); */
/* let mesFilms = ["transformeurs", "thor", "viceland"];
for (let i = 0; i < mesFilms.length; i++) {
    console.log(mesFilms[i]);
} */
/* let filmTable;
let decision = prompt("est ce que vous aimez les films, sui oui tapez o si non tapez n");
if (decision == n) {
    console.log("en tout cas c'est votre choix")

} else {
    filmTable prompt(" entrer le nom du film que vous aimez alors")
    if ()
} * /
/* 
// objet
console.log(etudiant.nom);
etudiant.nom = "Ichigo";
console.log(etudiant.nom);
console.log(`je m'appele ${etudiant.nom} j'ai ${etudiant.age} et je suis ${etudiant.statutMatrimonial}`) */
/* let etudiant = {
    nom: "yannis",
    age: 55,
    statutMatrimonial: "CELIBATAIRE",

    presentation() { console.log(`je m'appele ${this.nom} j'ai ${this.age} et je suis ${this.statutMatrimonial}`) }
};
etudiant.presentation() */
/* 
let nombre_1 = Number(prompt("entrer le premier nombre"))
let nombre_2 = Number(prompt("entrer votre deuxieme nombre"))
let nombre = nombre_1 + nombre_2


f/* unction parite() {

    if (nombre % 2 == 0) {
        console.log(`est paire`)
    } else {
        console.log(`est impaire`)
    }

} */

/* function addition(nbr1, nb2) {

    console.log(
        nbr1 + nbr2)
    parite(nbr1 + nbr2)

}

addition(2, 3) * / */


/* function parcour(tableau) {

    for (let i of tableau) {
        if (i % 2 != 0)
            console.log(`${i}`)

    }
}
let monTableau = [1, 2, 3, 4, 5, 6, 7];
parcour(monTableau); */


let tableau = [{ nom: "Wakanda", annee: 2014 }, { nom: "spiderman", annee: 2030 }, { nom: "sisia", annee: 2050 }, { nom: "Marvel", annee: 2080 }];

//function for normal
function parcour(tableaus) {

    for (let i = 0; i < tableaus.length; i++) {

        console.log(tableaus[i].nom)

    }
}
parcour(tableau);

function parcours(tableaus) {

    for (let a of tableaus) {

        console.log(a.nom)

    }
}
parcours(tableau)