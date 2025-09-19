class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        let attack;

        if (this.type === "mago") {
            attack = "magia";
        } else if (this.type === "guerreiro") {
            attack = "espada";
        } else if (this.type === "monge") {
            attack = "artes marciais";
        } else if (this.type === "ninja") {
            attack = "shuriken";
        } else {
            console.log("Erro!");
            return; 
        }

        
        console.log(`O ${this.type} atacou usando ${attack}`)
    }
}

let heroes = [
    new Hero("Caleb", 20, "guerreiro"),
    new Hero("Luka", 30, "mago"),
    new Hero("Mioto", 19, "monge"),
    new Hero("Han", 25, "ninja")
];


for (let i = 0; i < heroes.length; i++) {
    heroes[i].atacar();
}