// Complete the js code
function Car(make, model) {
	this.make = make  ;
	this.model =model ;
}
Car.prototype.getMakeModel = function(){
	return `${this.make} and ${this.model} `
}

function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model);
  

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;
 SportsCar.prototype.getTopSpeed = function(){
	 this.topSpeed =topSpeed
 }
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
