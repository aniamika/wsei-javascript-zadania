// Zadanie 8_1
function Tree(type) {
    this.type = type;
}

const tree1 = new Tree("Dąb");
const tree2 = new Tree("Akacja");
const tree3 = new Tree("Olcha");

Tree.prototype.bloom = function() {
    return "I am blooming";
}
