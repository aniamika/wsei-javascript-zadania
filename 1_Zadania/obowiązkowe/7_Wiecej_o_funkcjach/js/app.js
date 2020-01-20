/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// tworzymy funkcje jeden - scope jeden
function jeden() {

    // tworzymy zmienną zmienna1 w funkcji jeden
    var zmienna1 = 1;

    // tworzymy kolejną funkcje - dwa - i kolejny scope dwa
    function dwa() {

        // w tej funkcji dwa nie ma zmiennej jeden więc szukamy wyżej w scope jeden czy ją znajdziemy i znajdujemy
        console.log(zmienna1);

        // tworzymy zmienna2 w funkcji dwa - jej scope to scope dwa
        var zmienna2 = 3;
    }

    // wywolujemy funkcje dwa
    dwa();

    // VM338:21 Uncaught ReferenceError: zmienna2 is not defined - otrzymujemy taki bład poniewaz zmienna2  jest w srodku funkcji dwa i nie mamy do niej dostepu
    console.log(zmienna2)
}

// wywołanie funkcji jeden
jeden()