import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedListCollection";

const numbersCollection = new NumbersCollection([-10000, 30, -4, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Mohamed El-Raghy");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();

linkedList.add(50);
linkedList.add(51);
linkedList.add(-11);
linkedList.add(0);

linkedList.sort();
linkedList.print();
