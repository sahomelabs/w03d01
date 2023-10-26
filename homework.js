class Hamster {
    constructor(name) {
        this.owner = "";
        this.name = name;
       this.price = 15; 
    }
    wheelRun(){
        console.log("squeak squeak");
    }
    eatFood(){
        console.log("nibble nibble");
    }
    getPrice(){
        return this.price;
    }
}
let myHamster= new Hamster('Buddy');
myHamster.wheelRun();
myHamster.eatFood(); 
console.log(myHamster.getPrice()); 


class Person {
    constructor (name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.Hamster = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet() {
        console.log(`Hello my name is ${this.name}`);
    }
    eat(){
        this.weight++;
        this.mood++;
    }
    exercise(){
        this.weight--;
    }
    ageUP() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount +=10
    }
    buyHamster (hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
        }

    }
    const person = new Person("Dan");
    person.greet();
    person.eat();
    person.exercise();
    person.ageUP();
    console.log(person);
