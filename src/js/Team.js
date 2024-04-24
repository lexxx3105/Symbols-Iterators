export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    [Symbol.iterator]() {
      return this.members[Symbol.iterator]();
    }
  }