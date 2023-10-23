import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedListCollection";

// const numbersCollection = new NumbersCollection([-10000, 30, -4, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log("sorted arr", numbersCollection.data);

// const charactersCollection = new CharactersCollection("ZzZaAXxX");
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log("sorted string", charactersCollection.data);

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
// console.log(linkedList.length);
linkedList.print();
