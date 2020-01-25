export class LetterCounter {
    letterCounter(input: string) {
        
        let dictionary:{[key:string]: number} = {};

        input
        .split('', input.length)
        .forEach(element => {
            if(typeof dictionary[element] == "number"){
                dictionary[element]++;
            } else {
                dictionary[element] = 1;
            }
        });

        return dictionary;
    }
}