const chainMaker = {

  chain: [],

  getLength() {
    let length = this.chain.length;
    return length;
  },
  addLink(value) {
    let strValue = `( ${value} )`;
    this.chain.push(strValue);
    return this;
    },
  removeLink(position) {
    if (typeof (position) !== 'number' || 
      position > this.getLength() || position < 1) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = this.chain.slice();
    this.chain = [];
    return finish.join('~~');
  }
};

module.exports = chainMaker;
