export class Fibonacci {

    compute(index: number) {
        let element1 = 1;
        let element2 = 0;
        let temp = 0;

        for (let i = 0; i <= index-1; i++) {
            temp = element1
            element1 = element1 + element2
            element2 = temp
            console.log(element1, element2, temp)
        }
        return temp
    }
}


