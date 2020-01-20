// 5_this_0
var car = {
    brand: "Mercedes",
    color: "Czarny",
    numberOfKilometers: 6,
}

car.printCarInfo = function() {
    console.log(this.color, this.brand, "," , this.numberOfKilometers + "km");
}

car.drive = function(km) {
    console.log(this.numberOfKilometers = this.numberOfKilometers + km);
}

car.printCarInfo();
car.drive(20);
car.printCarInfo();

// 5_this_1
car.technicalDates = [
    '2019-08-19',
    '2019-07-19',
    '2019-03-19',
    '2019-01-19',
];

car.addTechnical = function(date) {
    this.technicalDates.push(date);
}

car.getTechnicalDates = function() {
    console.log(this.technicalDates);
};

car.addTechnical('2020-08-20');
car.getTechnicalDates();


// 5_this_3
var stairs = {
    step: 0,
    up: function() {
        this.step++;
    },
    down: function() {
        this.step--;
    },
    printStep: function() {
        console.log(this.step);
    }
};

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();
