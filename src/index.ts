class Sorter {
  constructor(public collection: number[]) {}

  // * bubble sort Algorithm
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          let temp = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = temp;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 30, -4, 0]);
sorter.sort();
console.log("sorted arr", sorter.collection);
