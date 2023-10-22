import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([-10000, 30, -4, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log("sorted arr", numbersCollection.data);

const charactersCollection = new CharactersCollection("ZzZaAXxX");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log("sorted string", charactersCollection.data);
