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

/* 
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
parcours(tableau) */
/* let nombre1 = Number(prompt("entrer un nombre"))
let nombre2 = Number(prompt("entrer un deuxieme nombre"))

let Addition = (nbre1, nbre2) => {
    console.log(`la somme des deux nombre est ${nbre1+nbre2}`)

}
Addition(nombre1, nombre2); */
/* 
let filmTab = ["sangoku", "naruto", "violetta", "rengoku"]
for (let i of filmTab) {
    console.log(i)
} */
/* let Parite = (nbre) => {
    if (nbre % 2 == 0) {
        console.log("nombre pair")
    } else {
        console.log("nombre impair")
    }
}


function Addition(nbre1, nbre2) {
    console.log(`la somme est ${nbre1+nbre2}`)
    let nombre = nbre1 + nbre2
    Parite(nombre);


}
let premier = Number(prompt("entrer le nombre"))
let deuxieme = Number(prompt("entrer le nombre"))
Addition(premier, deuxieme); */
/* /* Parite(9); */
/* let Tables = [1, 2, 4, 7, 85, 49, 27, 14, 58, 43, 21, 753, 954, 125, 8753, 96, 964, 42]


let Tableau = (Tab) => {
    for (let i of Tab) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
Tableau(Tables); * / */
/* let Telephone = {
        marque: "Iphone",
        type: "iphone 14 pro max",

        presentation() { console.log(`mon telephone est de marque ${this.marque} et c'est precisement ${this.type}`); }
    }
    /* console.log(`mon telephone est de marque ${Telephone.marque} et c'est precisement ${Telephone.type}`);
    Telephone.marque = "samsung"
    Telephone.type = "note 24"
/*     console.log(`mon telephone est de marque ${Telephone.marque} et c'est precisement ${Telephone.type}`); */
/* Telephone.presentation();
Telephone.annee = "zone"; * / */

/* let tableau = (Table) => {
    for (let i of Table) {
        console.log(i.Annee)

    }
}
tableau(Tab) */
/* let date = Tab[0].Annee;
for (let i = 1; i < Tab.length; i++) {

    if (date > Tab[i].Annee) {
        date = Tab[i].Annee;




    }
}

f    console.log(date); */
/* console.log(superieur) * /
let tab = [];
for (i = 0; i < 10; i++) {
    tab[i] = prompt("entrer la lettre")
    console.log(tab[i])
    tab = tab[i];
} */
/* for (let a of tab) {
    console.log(a);
} */

/* let Tab = [{ nom: "Barbie", Annee: 2012 }, { nom: "wakanda", Annee: 2023 }, { nom: "spiderman", Annee: 2013 }, { nom: "darknet", Annee: 2058 }, { nom: "cybersec", Annee: 2024 }, { nom: "Markora", Annee: 1234 }, { nom: "Azus", Annee: 2054 }, { nom: "GOjo", Annee: 2022 }, ]
let date = Tab[0].Annee;
for (let a of Tab) {
    if (date > a.Annee) {
        date = a.Annee
    }
}
console.log(date) */
/* class Personne {
    constructor(n, p) {
        this.nom = n;
        this.prenom = p;
    }

    presentation() {
        console.log(`je m'appele ${this.nom} ${this.prenom}`)
    }

}
let koffi = new Personne("KOFFI", "Satnislas");
console.log(koffi);
let audrey = new Personne("AUDREY", "audrey");
console.log(audrey); */
class Animal {
    constructor(n) {
        this.nom = n;
    }

}
let chien = new Animal("Spike");
console.log(chien);
let chat = new Animal("minou");
console.log(chat)