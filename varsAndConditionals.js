/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Eowyn and
    Witch King of Angmar.
*/ 

let eowynAttack = 50;
let witchKingAttack = 51;

if (eowynAttack > witchKingAttack) {
    console.log("Eowyn is stronger")
} else if (witchKingAttack > eowynAttack) {
    console.log("Witch King is stronger")
} else {
    console.log("They are the same strength")
}

let eowynHealth = 100;
let eowynDefense = 0;

let eowynDefense = eowynDefense - witchKingAttack

if (eowynDefense <= 0){
    let eowynHealth = eowynHealth + eowynDefense
    let eowynDefense = 0
}

if (eowynHealth <= 0) {
    console.log("Eowyn has died")
} else {
    console.log("Eowyn has lived")
    eowynHealth -= witchKingAttack
    console.log(`Eowyn's Defense is now at ${eowynDefense}.`)
    console.log(`Eowyn's Health is now at ${eowynHealth}.`)
}

let coinLandsHeads = true;

if (coinLandsHeads === true) {
    console.log("The Witch King has escaped")
} else {
    console.log("The Witch King has been counterattacked")
}

for (let i = 0; i < 5; i++) {
    eowynHealth = eowynHealth - witchKingAttack;
    console.log(`Eowyn is now at ${eowynHealth}.`)
}

while(eowynHealth > 0) {

}