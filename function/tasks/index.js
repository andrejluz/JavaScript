// Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

 let string = 'webmaster';

function sortByAlphabet(string) {
    let  splitString = string.split('');
    let sortArray = splitString.sort();
    let newString = sortArray.join('');
    return newString;
}
    

var five = 5;
function fives(number) {
    return five + number ;
}


const septyniuKartotinis = function(num) {
    if (num % 7 === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(septyniuKartotinis(213))

