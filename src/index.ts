import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollections";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


const numbersCollection = new NumbersCollection([100, 30, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayd');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(-6);
linkedList.add(400);
linkedList.add(50);

linkedList.sort();
linkedList.print();



// class Sorter {
//     collection: number[];

//     constructor(collection: number[]) {
//         this.collection = collection;
//     }
// }