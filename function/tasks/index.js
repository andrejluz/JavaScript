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



function wordInHalf (word) {
let newWord;
   const      array = word.split('');

    for (let i =0; i < array.length; i++) {
        if (array[i].length %  2 != 0) {
           let newString = array[i].splice(Math.floor(array[i].length/2), 1);
            newWord = newString.join('');
        } else {
            return `zodis susideda is liginiaus skaiciaus ----> ${word}`
        }  
        return `naujas zodis ----> ${newWord}`;
    }


    
}

let word = "matematyk";
console.log(wordInHalf(word))
