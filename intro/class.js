class Vehicle {
  #wheels = 4;

  getWheels() {
    return this.#wheels;
  }

  setWheels(wheels) {
    this.#wheels = wheels;
  }
}

class Car extends Vehicle {
  #color = 'Black';
  #make;
  #model;
  #year;

  constructor(make, model, year, color) {
    super();

    this.#make = make;
    this.#model = model;
    this.#year = year;

    if (color) {
      this.#color = color;
    }
  }

  #disassembleCar() {
    super.setWheels(2);
  }

  getValues() {
    this.#disassembleCar();

    return {
      color: this.#color,
      make: this.#make,
      model: this.#model,
      wheels: super.getWheels(),
      year: this.#year,
    };
  }
}

const car = new Car('Honda', 'City', 1993, 'Vermelho');

console.log(car.getValues());
