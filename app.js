// 5 Move classes to separate files and import them into the app using require.
const Vehicle = require('./Vehicle');
const Car = require('./Car');
const Track = require('./Track');

// Call staticMethod from Vehicle class  
Vehicle.staticMethod();

// Create obj car and call displayInfo method

let car = new Car('tr250', 2010, 230);
car.displayInfo(); // Overriding and call method from parent clas


// Create obj car and call  methods
let track = new Track('tkl25', 2011, 99);
track.displayInfo(); //Overriding parent method
track.transportPeple();






