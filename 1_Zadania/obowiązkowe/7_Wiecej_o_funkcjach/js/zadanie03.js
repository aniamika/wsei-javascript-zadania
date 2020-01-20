// wywołanie funkcji - działa poprawnie, mimo tego, że jest przed zdefiniowaną funkcją, 
// ponieważ podczas kompilacji kodu funkcje wskakują na samą góre
Hello();

function Hello() {
    console.log("Cześć");
}

// wywołanie funkcji - działa poprawnie bo jest po zdefiniowanej funkcji
Hello();

Hello2();

var Hello2 = function() {
   console.log("Witaj");
};

Hello2();