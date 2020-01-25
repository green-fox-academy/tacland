export class Apple {

    getApple() {
        return 'apple';
    }

    sum(list: number[]) {

        if (list.length == 0) {

            return 'no numbers to sum';

        } else {

            let total = 0;
          
            list.forEach(element => {
                total += element
            });

            return total;

        }
    }
}