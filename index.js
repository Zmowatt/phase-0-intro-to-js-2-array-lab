const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Silvester) {
    cats.push(Silvester);
}

function destructivelyPrependCat(Benji) {
    cats.unshift(Benji);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Spot) {
    const allCats = [...cats, Spot];

    return allCats;
}

function prependCat(Milkshake) {
    const allCats = [Milkshake, ...cats];

    return allCats;
}

function removeLastCat() {
    const removeLastCat = cats.slice(0, -1);

    return removeLastCat;
}

function removeFirstCat() {
    const removeFirstCat = cats.slice(1);

    return removeFirstCat;
}