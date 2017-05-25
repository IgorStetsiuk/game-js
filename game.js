'use strict';

class Fighter {

    constructor(name, power = 10, health = 1000) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health -= damage;
        let message = this.health > 0 ? `Health : ${this.health}` : `Health : ${this.health=0}`;
        message += `  ${this.name}`;
        console.log(message);
    }

    hit(enemy, point) {
        enemy.setDamage(point * this.power);
    }
}


class ImprovedFighter extends Fighter {
    doubleHit(enemy, point) {
        super.hit(enemy, point *= 2);
    }
}


let fighter = new Fighter('Ivan', 10);
let improvedFighter = new ImprovedFighter('Petro', 15);


let fight = (fighter, improvedFighter, ...rest) => {



    let toggle = true;
    let exit = true;
    let isAllNull = rest.every(elem => elem === 0);

    if (isAllNull) {
        return console.log('All point can`t be 0');
    }

    if (rest.length < 2) {
        rest = [10, 10, ];
        console.log(`less than 2 points set : dafault ${rest}`);
    }



    while (exit) {
        
        for (let point of rest) {

            if (toggle) {
                fighter.hit(improvedFighter, point);
            } else {
                improvedFighter.doubleHit(fighter, point);
            }

            if (improvedFighter.health <= 0 || fighter.health <= 0) {

                let result = toggle ? fighter.name : improvedFighter.name;
                exit = false;
                return console.log(result += ' has won');
            }
            toggle = !toggle;
        }
    }
}


fight(fighter, improvedFighter, 10,12,7);
