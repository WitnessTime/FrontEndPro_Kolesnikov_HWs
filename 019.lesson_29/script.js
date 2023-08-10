class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  };
};

class Appartment {
  constructor() {
    this.residents = [];
  };

  addResident(resident) {
    this.residents.push(resident);
    console.log(`Мешканця ${resident.name} було додано.`);
  };
};

class House {
  constructor(maxFlats) {
    this.flats = [];
    this.maxFlats = maxFlats;
  };

  addFlat(flat) {
    if (this.flats.length < this.maxFlats) {
      this.flats.push(flat);
      console.log("Нову квартиру додано.");
    } else {
      console.log("Неможливо додати нову квартиру. Будинок й так повний.");
    };
  };
};

let testPerson1 = new Person("Валентин", 'м');
let testPerson2 = new Person("Даша", 'ж');
let testPerson3 = new Person("Андрій", 'м');
let testPerson4 = new Person("Аня", 'ж');

let testAppartment1 = new Appartment();
let testAppartment2 = new Appartment();

testAppartment1.addResident(testPerson1);
testAppartment1.addResident(testPerson2);
testAppartment2.addResident(testPerson3);
testAppartment2.addResident(testPerson4);

let testHouse = new House(2);

testHouse.addFlat(testAppartment1);
testHouse.addFlat(testAppartment2);