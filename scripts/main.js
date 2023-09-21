'use strict'

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
        console.log(`This character's name is ${this.name}. They have ${this.selfEsteem} self esteem and ${this.health} health. They can do ${this.healthDamage} health damage and ${this.esteemDamage} damage to the self esteem. They are pleased to meet you!`)
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
        console.log(`${this.name} has ${this.selfEsteem} self esteem.`);
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
        console.log(`Look who it is! It's ${otherCharacter.name}! Oh boy, I'm so scared right now, are you going to eat us? HAHAHA!! I'd like to see you try.`)
    }
}


class Wolf extends Character {
    constructor(name, selfEsteem, health, healthDamage, esteemDamage) {
        super(name, selfEsteem, health, healthDamage = 50, esteemDamage = 10);
    }

    announce(otherCharacter) {
        console.log(`Well hello there, ${otherCharacter.name}. I don't want to eat you. I'm not even hungry.`)
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

Sugar.listHealth();


Ink.physicalAttack(Sugar);
Sugar.listHealth();

Ink.physicalAttack(Sugar);
Sugar.listHealth();