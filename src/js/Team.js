export default class Team {
  constructor() {
      this.members = new Set();
  }

  [Symbol.iterator]() {
      let iterator = {
          current: 0,
          members: [...this.members],

          next() {
              if (this.current < this.members.length) {
                  return { done: false, value: this.members[this.current++] };
              } else {
                  return { done: true };
              }
          }
      };

      return iterator;
  }
}