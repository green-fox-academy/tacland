export class App {

    anagramApp(firstWord: string, secondWord: string) {
        
        function stringSort(string: string) {
            return string.toLowerCase().split('', string.length).sort().toString()
        }

        let sortedFirstWord = stringSort(firstWord)
        let sortedSecondWord = stringSort(secondWord)

        if ( sortedFirstWord == sortedSecondWord) {
            return true;
        } else {
            return false;
        }
    }
}