// 4_Obiekty_1

var book = {
    title: "Lalka",
    author: "Bolek Prus",
    numberOfPages: 377,
}

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

// 4_Obiekty_2
const person = {
    name: "Jon",
    age: 23,
    sayHello: function() {
        console.log("Hello");
    }
}

console.log(person.name, person.age);
person.sayHello();

// 4_Obiekty_3
var cookbook = {
    title: "Gordon Ramsey",
    serving: 20
}
cookbook.ingriedients = ["apple", "sugar"];

console.log(cookbook);

// 4_Obiekty_6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(isExist);