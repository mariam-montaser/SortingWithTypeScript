
export interface Sortable {
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
    length: number;
}

export abstract class Sorter {

    abstract length: number;

    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;

    sort(): void {
        const {length} = this;
        for (let i = 0; i < length; i++) {
            for(let  j= 0; j < length - i -1; j++) {
                if(this.compare(j, j+1)) {
                    this.swap(j, j+1)
                }
            }
        }
    }
}

// class Sorter {

//     constructor(public collection: number[] | string) {}

//     sort(): void {
//         const {length} = this.collection;
//         for (let i = 0; i < length; i++) {
//             for(let  j= 0; j < length - i -1; j++) {
//                 if(this.collection instanceof Array) { //type guard(other ex:object || class)
//                     if(this.collection[j] > this.collection[j+1]) {
//                         const leftHand = this.collection[j];
//                         this.collection[j] = this.collection[j+1];
//                         this.collection[j+1] = leftHand;
//                     }
//                 }
//                 if(typeof this.collection === 'string') { //type guard (primitive)

//                 }
//             }
//         }
//     }
// }