function Ninja(name){
	this.name = name;
	this.health = 100;
	var speed = 3; //private
	var strength = 3; //private

	this.readSpeed = function(){
		return speed;
	}

	this.readStrength = function(){
		return strength;
	}
}

Ninja.prototype.showStats = function(){
	console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${ninja1.readSpeed()}, Strength: ${ninja1.readStrength()}`)
	return this;
}

Ninja.prototype.sayName = function(){
	console.log(`My Ninja name is ${this.name}!`);
	return this;
}

Ninja.prototype.drinkSake = function(){
	this.health += 10;
	return this;
}
Ninja.prototype.punch = function(ninja){
	this.health -=5;
	console.log(`${ninja.name},was punched by ${this.name},and lost 5 health!`)
	return this;
  }

  Ninja.prototype.kick = function(ninja){
	this.health -=15;
	console.log(`${ninja.name},was kicked by ${this.name},and lost 15 health!`)
	return this;
  }

var ninja1 = new Ninja('Walter');
ninja1.sayName();
ninja1.showStats();

var blue_ninja = new Ninja("Joe");
var red_ninja = new Ninja("Will");
red_ninja.punch(blue_ninja);
blue_ninja.kick(red_ninja);
red_ninja.showStats();
blue_ninja.showStats();
