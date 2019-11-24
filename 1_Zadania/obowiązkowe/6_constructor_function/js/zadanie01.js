// 6_constructor_function_1

var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + "changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + "was fixed");
};

var Zbyszek1 = new Robot('Janusz');
Zbyszek1.sayHi('Zbyszek');
Zbyszek1.fixIt(false);
Zbyszek1.changeName('Ivan');
Zbyszek1.sayHi('Zbyszek');