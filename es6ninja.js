class Ninja{
	constructor(name){
		this.name = name;
		this.health = 100;
		this.speed = 3;
		this.strength = 3;

	}
	sayName(){
		console.log(`Name: ${this.name}`)
	}
	showStats(){
    console.log(`Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
	}
	drinkSake(){
		this.health += 10;
		return this;
	}
}

class Sensei extends Ninja{
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom(){
		super.drinkSake();
		console.log("He who smelt it delt it.");
	}

	showStats(){
		console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
	}
}
 let super_sensei = new Sensei("Will");
 super_sensei.speakWisdom();
 super_sensei.showStats();
