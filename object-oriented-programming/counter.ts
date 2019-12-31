// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    integer: number;
    resetValue: number;
    constructor(_integer: number = 0) {
        this.integer = _integer;
        this.resetValue = _integer
    }
    add(number:number = 1){
        if(number % 1 === 0){
            this.integer += number;
            console.log('Integer updated.')
        } else {
            console.log('Only whole numbers can be added.')
        }
    }
    get() {
        console.log('' + this.integer);
    }
    reset() {
        console.log('Integer reset.')
        this.integer = this.resetValue;
    }
}

const counter1 = new Counter(12)

counter1.add(213)
counter1.get()
counter1.reset()
