
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// tworzymy funkcję sortArray, która nie przyjmuje parametrów
function sortArray() {

    // tworzymy tablicę points z liczbami
    var points = [41, 3, 6, 1, 114, 54, 64];

    // tworzymy funkcję sortującą dla tablicy
    points.sort(function (a, b) {
        // zależne od tego czy wynik jest dodatni, czy ujemy, czy równy zeru wartości są umieszczane w odpowiednich miejscach
        return a - b;
    });

    // zwracamy posortowaną tablicę
    return points;
}

// wywołujemy funkcję sortArray
sortArray();
