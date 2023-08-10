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
class etudiant {
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
           for (let i = 0; i < Tableau.length; i++) {} */