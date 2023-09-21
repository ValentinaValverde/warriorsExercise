'use strict'

const sugarInfo = document.getElementById('sugarInfo');
const inkInfo = document.getElementById('inkInfo');

const characterSection = document.getElementById('characterSection');

class Character {
    constructor(name, selfEsteem = 50, health = 50, healthDamage, esteemDamage) {
        this.name = name;
        this.selfEsteem = selfEsteem;
        this.health = health;
        this.healthDamage = healthDamage;
        this.esteemDamage = esteemDamage;
    }


    greet() {
        console.log(`Hello User, I am ${this.name}.`)
    }

    listInfo() {
        const characterInfo = document.createElement('p');
        characterInfo.innerHTML = `This character's name is ${this.name}. They have ${this.selfEsteem} self esteem and ${this.health} health. They can do ${this.healthDamage} health damage and ${this.esteemDamage} damage to the self esteem. They are pleased to meet you!`
        return characterSection.appendChild(characterInfo);
    }

    verbalAttack(otherCharacter) {
        otherCharacter.selfEsteem = (otherCharacter.selfEsteem - this.esteemDamage);
        console.log(`${this.name} verbally attacked ${otherCharacter.name}! Now ${otherCharacter.name} only has ${otherCharacter.selfEsteem} self esteem.`)
        console.log(otherCharacter.selfEsteem);
        return otherCharacter.selfEsteem;
    }

    physicalAttack(otherCharacter) {
        otherCharacter.health = (otherCharacter.health - this.healthDamage);
        console.log(`${this.name} physically attacked ${otherCharacter.name}! Now ${otherCharacter.name} only has ${otherCharacter.health} health.`)
        console.log(otherCharacter.health);
        return otherCharacter.health;
    }

    listSelfEsteem() {
        return `${this.name} has ${this.selfEsteem} self esteem.`
    }

    listHealth() {
        console.log(`${this.name} has ${this.health} health.`);
    }
}


class Sheep extends Character {
    constructor(name, selfEsteem, health, healthDamage, esteemDamage) {
        super(name, selfEsteem, health, healthDamage = 10, esteemDamage = 20);
    }

    taunt(otherCharacter) {
        return `"Look who it is!" said ${this.name}. "It's ${otherCharacter.name}! Oh boy, I'm so scared right now, are you going to eat me? HAHAHA!! I'd like to see you try."`
    }
}


class Wolf extends Character {
    constructor(name, selfEsteem, health, healthDamage, esteemDamage) {
        super(name, selfEsteem, health, healthDamage = 50, esteemDamage = 10);
    }

    announce(otherCharacter) {
        return `"Well hello there, ${otherCharacter.name}," said ${this.name}. "I don't want to eat you. I'm not even hungry. Just lonely."`
    }
}

//list of Clarifications:

//Wolves:
//health damage is -50 (instant kill)
//esteem damage is -10

//Sheep:
//health damage is -10
//esteem damage is -20

const Sugar = new Sheep('Sugar');
const Ink = new Wolf('Ink');


//meet Sugar Button:
const meetSugar = document.getElementById('meetSugar');
meetSugar.addEventListener('click', () => {
    Sugar.listInfo();
})

//meet Ink Button:
const meetInk = document.getElementById('meetInk');
meetInk.addEventListener('click', () => {
    Ink.listInfo();
})




// //buttons:
// const startButton = document.getElementById('startButton');
// const buttonOne = document.getElementById('buttonOne');
// const buttonTwo = document.getElementById('buttonTwo');
// const buttonThree = document.getElementById('buttonThree');
// const buttonFour = document.getElementById('buttonFour');
// const buttonFive = document.getElementById('buttonFive');
// const buttonSix = document.getElementById('buttonSix');
// const buttonSeven = document.getElementById('buttonSeven');
// const buttonEight = document.getElementById('buttonEight');
// const buttonNine = document.getElementById('buttonNine');
// const buttonTen = document.getElementById('buttonTen');
// const buttonEleven = document.getElementById('buttonEleven');

// //HTML elements:
// const startingDialogue = document.getElementById('startingDialogue');
// const pOne = document.getElementById('pOne');
// const sheepTaunt = document.getElementById('sheepTaunt');
// const wolfAnnounce = document.getElementById('wolfAnnounce');
// const pFour = document.getElementById('pFour');
// const sheepEsteemAttack = document.getElementById('sheepEsteemAttack');
// const wolfEsteem = document.getElementById('wolfEsteem');
// const wolfEsteemAfter = document.getElementById('wolfEsteemAfter');

// //button events:
// startButton.addEventListener('click', () => {
//     startingDialogue.innerHTML = "Once upon a time, there was a beautiful sheep named Sugar, and a grotesque wolf named Ink."
// })

// buttonOne.addEventListener('click', ()=>{
//     pOne.innerHTML = "One day, the wolf was lonely, so she went to visit the sheep. But when she got to their pasture, Sugar was the only one there."
// })

// buttonTwo.addEventListener('click', () => {
//     sheepTaunt.innerHTML = Sugar.taunt(Ink);
// })

// buttonThree.addEventListener('click', () => {
//     wolfAnnounce.innerHTML = Ink.announce(Sugar);
// })

// buttonFour.addEventListener('click', () => {
//     pFour.innerHTML = "Sugar, seeing that the Wolf was sad, started to verablly attack her."
// })

// buttonFive.addEventListener('click', () => {
//     wolfEsteem.innerHTML = Ink.listSelfEsteem();
//     sheepEsteemAttack.innerHTML = Sugar.verbalAttack(Ink);
//     wolfEsteemAfter.innerHTML = Ink.listSelfEsteem;
// })


//instead: have a button that physically attacks (insert_character), then have it log health before, action, and health after.



//Order of events
//Sheep taunts Wolf
//Wolf responds (announce)
//Sheep verbally attacks Wolf
//Sheep verbally attacks Wolf (again)
//Sheep physically attacks Wolf
//Wolf physically attacks Sheep
//Sheep dies.
//Let this quote show up in red lettering:
//"I became exactly what you wanted me to be."


