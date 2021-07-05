class GuessingGame {
    constructor() {
        this.arr = [];
        this.indexNumber;
    }

    setRange(min, max) {
        for (let i = min; i < max; i++) {
            this.arr.push(i);
        }
    }

    guess() {
        this.indexNumber = Math.round((this.arr.length) / 2);
        return this.arr[this.indexNumber];
    }

    lower() {
        this.arr.length = this.indexNumber;
    }

    greater() {
       this.arr.splice(0, this.indexNumber);
    }
}

module.exports = GuessingGame;
