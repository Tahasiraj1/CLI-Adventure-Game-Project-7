import inquirer from "inquirer";


class Player{
    name: string;
    health: number = 100;
    constructor(name:string){
        this.name = name;
    }
    healthDecrease(){
        let health = this.health - 25
        this.health = health
    }
    healthIncrease(){
        this.health = this.health + 25
    }
}

class Opponent{
    name: string;
    health: number = 100;
    constructor(name:string){
        this.name = name;
    }
    healthDecrease(){
        let health = this.health - 20
        this.health = health
    }
}

let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name: "
    }
])

let opponent = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: "Select you opponent.",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
])

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.Select)

do{
    // Skeleton
    if (opponent.Select == "Skeleton"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Potion", "Give Up"]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.healthDecrease()
                console.log(`${p1.name} fuel is ${p1.health}`)
                console.log(`${o1.name} fuel is ${o1.health}`)
                if(p1.health <= 0){
                    console.log("You Lost");
                    process.exit()
                }
            }
            if(num <= 0){
                o1.healthDecrease()
                console.log(`${p1.name} fuel is ${p1.health}`)
                console.log(`${o1.name} fuel is ${o1.health}`)
                if(o1.health <= 0){
                    console.log("You Won");
                    process.exit()
                }
            }
            }
            if(ask.opt == "Drink Potion"){
                p1.healthIncrease()
                console.log(`You Drank Health Potion, Your fuel is: ${p1.health}`)
            }
            if(ask.opt == "Give Up"){
                console.log("You Lost.")
                process.exit()
            }
    }
    // Alien
    if (opponent.Select == "Alien"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Potion", "Give Up"]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.healthDecrease()
                console.log(`${p1.name} fuel is ${p1.health}`)
                console.log(`${o1.name} fuel is ${o1.health}`)
                if(p1.health <= 0){
                    console.log("You Lost");
                    process.exit()
                }
            }
            if(num <= 0){
                o1.healthDecrease()
                console.log(`${p1.name} fuel is ${p1.health}`)
                console.log(`${o1.name} fuel is ${o1.health}`)
                if(o1.health <= 0){
                    console.log("You Won");
                    process.exit()
                }
            }
            }
            if(ask.opt == "Drink Potion"){
                p1.healthIncrease()
                console.log(`You Drank Health Potion, Your fuel is: ${p1.health}`)
            }
            if(ask.opt == "Give Up"){
                console.log("You Lost.")
                process.exit()
            }
    }
    // Zombie
    if (opponent.Select == "Zombie"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Potion", "Give Up"]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.healthDecrease()
                console.log(`${p1.name} fuel is ${p1.health}`)
                console.log(`${o1.name} fuel is ${o1.health}`)
                if(p1.health <= 0){
                    console.log("You Lost");
                    process.exit()
                }
            }
            if(num <= 0){
                o1.healthDecrease()
                console.log(`${p1.name} fuel is ${p1.health}`)
                console.log(`${o1.name} fuel is ${o1.health}`)
                if(o1.health <= 0){
                    console.log("You Won");
                    process.exit()
                }
            }
            }
            if(ask.opt == "Drink Potion"){
                p1.healthIncrease()
                console.log(`You Drank Health Potion, Your fuel is: ${p1.health}`)
            }
            if(ask.opt == "Give Up"){
                console.log("You Lost.")
                process.exit()
            }
    }
}
while(true)