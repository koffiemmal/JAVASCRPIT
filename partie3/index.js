/* /* class Personne extends Personnage {
    constructor(nom) {
        super(nom);
    }
} */
/* class Personnage {

    constructor(n) {
        this.nom = n;
    }
    NombredeVie = 100;
    Exp = 0;
    armeDegats = [{ arme: "epée", degats: 20 }, { arme: "marteau", degats: 10 }, { arme: "fusil", degats: 35 }];
    presentation() {
        console.log(
            `je m'appelle ${this.nom} `)
    }

    attaquer(Personnage, armeDegats) {

        switch (armeDegats) {
            case "marteau":

                Personnage.NombredeVie = Personnage.NombredeVie - 10;
                console.log(`${Personnage.nom} apres etre attaquer par  ${this.nom} il lui reste ${Personnage.NombredeVie}`);

                break;
            case "epée":

                Personnage.NombredeVie = Personnage.NombredeVie - 20;
                console.log(`${Personnage.nom} apres etre attaquer par  ${this.nom}  il lui reste ${Personnage.NombredeVie}`);
            case "fusil":

                Personnage.NombredeVie = Personnage.NombredeVie - 35;
                console.log(`${Personnage.nom} apres etre attaquer par  ${this.nom}  il lui reste ${Personnage.NombredeVie}`);

                break;

            default:
                break;
        }
        
        
        
    }
    
    
}
let luffi = new Personnage("luffi");
let zorro = new Personnage("zorro");
luffi.attaquer(zorro, "fusil"); * / */
//for (let i = 0; i == (Personnage.NombredeVie == 0); i++)
/* class Acteur {
    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    star = true;

}
let celebre_1 = new Acteur("Acteur1", "ACTEUR", 25);
console.log(celebre_1);
let celebre_2 = new Acteur("Acteur1", "ACTEUR", 25);
console.log(celebre_2);
let celebre_3 = new Acteur("Acteur1", "ACTEUR", 25);
console.log(celebre_3) */
;
/* class etudiant {
    constructor(nom, prenom, filiere) {
        this.nom = nom;
        this.prenom = prenom;
        this.filiere = filiere;

    }
    note = [];
    AjouterNote() {


        for (let i = 0; i < 3; i++) {
            let matiere = prompt("entrer le nom de la matiere");
            let notes = Number(prompt("entrer la note"));

            let coefficiant = Number(prompt("entrer le coefficient"))


            this.note.push({
                    matiere: matiere,
                    notes: notes,
                    coefficiant: coefficiant,
                }

            )

        }
        console.log(this.note);
    }

    calculMOyenne() {
        if (this.note.length < 1) {
            console.log("rentrer d'abord des elements dans le tableau")
        } else {
            let nt = 0;
            for (let a of this.note) {
                nt = nt + (a.notes * a.coefficiant);
            }
            let moyenne = nt / this.note.length
            console.log(`la moyenne est ${moyenne}`)


        }

    }
}


let premier = new etudiant("premier", "prenom", "it");
premier.AjouterNote()
premier.calculMOyenne();
/* else {
           let notes = 0
       */
/* for (let i = 0; i < Tableau.length; i++) {} * / */
/* 
let decision = prompt("voulez vous ajouter des notes, si oui o si non n")
let notes = [];
if (decision == "o") {
    while (decision == "o") {
        let matiere = prompt("entrer le nom de la matiere")
        let note = Number(prompt(`la note recu dans ${matiere}`))
        let coefficiant = Number(prompt(`entrer le coefficient de ${matiere}`))
        notes.push({
            matiere: matiere,
            note: note,
            coefficiant: coefficiant,
        })
        console.log(notes)
        decision = prompt("voulez vous ajouter des notes, si oui o si non n")
    }
} else {
    console.log("faut partir meme")
} */
/* if (decision == "n") { console.log("non") } else {
    console.log("vrai")

} */
/* class Etudiant {
    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    notes = [];
    AjouterNote() {
        for (let i = 0; i < 3; i++) {
            let matiere = prompt("entrer la matiere");
            let note = Number(prompt(`entrer la note de ${matiere}`))
            let coefficient = Number(prompt(`entrer le coefficient de ${matiere}`))

            this.notes.push({
                matiere: matiere,
                note: note,
                coefficient: coefficient,
            })
        }

    }
    Calcul() {
        if (this.notes.length < 1) {
            console.log("veuillez d'abord renseigner des informations")
        } else {
            let Ns = 0;
            for (let a of this.notes) {
                Ns = (Ns + (a.note * a.coefficient));

            }
            let Moyenne = Ns / this.notes.length;
            console.log(`la moyenne de ${Ns} est${Moyenne} `)
        }
    }
}
let Messan = new Etudiant("MESSAN", "Emmanuel", 19);
/* console.log(Messan) */
/* Messan.AjouterNote();
Messan.Calcul(); * / */


/* class Personnage {
    constructor(nom) {
        this.nom = nom;
    }
    NombreVie = 100;
    exp = 0;
    arme = [{
        arme: "marteau",
        degats: 10
    }, {
        arme: "epee",
        degats: 20
    }, {
        arme: "fusil",
        degats: 35
    }]
    Attaquer(Personnage, arme) {
        while (
            (Personnage.NombreVie != 0) && (Personnage.NombreVie >= 0)) {
            switch (arme) {
                case "marteau":
                    Personnage.NombreVie = Personnage.NombreVie - 10;
                    console.log(`${this.nom} a attaquer ${Personnage.nom} avec ${arme} il lui reste  ${Personnage.NombreVie}`)

                    break;
                case "fusil":
                    Personnage.NombreVie = Personnage.NombreVie - 35;
                    console.log(`${this.nom} a attaquer ${Personnage.nom} avec ${arme} il lui reste  ${Personnage.NombreVie}`)

                    break;
                case "epee":
                    Personnage.NombreVie = Personnage.NombreVie - 20;
                    console.log(`${this.nom} a attaquer ${Personnage.nom} avec ${arme} il lui reste  ${Personnage.NombreVie}`)

                    break;

                default:
                    break;
            }
            if (Personnage.NombreVie <= 0) {
                console.log(`${Personnage.nom} est mort `)
                this.exp = this.exp + 10;
            }

        }
        console.log(`${this.nom} a acquerit ${this.exp} points d'experience`)
    }
}
let Gojo = new Personnage("gojo")
let Sukuna = new Personnage("sukuna");
Gojo.Attaquer(Sukuna, "epee") */
/* let tableau = [];
let size = Number(prompt("combien de fois aimerais vous remplir votre tableau?"));
for (let i = 0; i < size; i++) {
    let nombre = Number(prompt("entrer le nombre"))
    tableau.push({
        nombre: nombre,
    })
}
for (let j of tableau) {
    let petit = j
    for (let a of tableau) {
        if (petit > a) {
            petit = a;
        }
    }
    console.log(petit)
} */