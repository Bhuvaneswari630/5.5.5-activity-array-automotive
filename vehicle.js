class Vehicle {
    constructor(make, model, year, price, vin, color){
        this.make = make
        this.model = model
        this.year = year
        this.color = color
        this.price = price
        this.vin = vin
    }
    drive(){
        // console.log (this.year + " " + this.make + " " + this.model + ' drives');
        return (this.year + " " + this.make + " " + this.model + ' drives');
    }
    paint(color){
        return this.color = color
        // console.log(`${this.make} painted ${color}`);
    }
}


