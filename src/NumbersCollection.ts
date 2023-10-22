export class NumbersCollection {
  constructor(public data: number[]) {}

  /**
   * Description
   * @returns {any}
   **/
  get length(): number {
    return this.data.length;
  }

  /**
   * Description
   * @param {number} leftIndex
   * @param {number} rightIndex
   * @returns {any}
   **/
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  /**
   * Description
   * @param {number} leftIndex
   * @param {number} rightIndex
   * @returns {any}
   **/
  swap(leftIndex: number, rightIndex: number) {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
