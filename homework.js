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