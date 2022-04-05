function removeLetters(array) {
    const newIntArray = [] ;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === parseInt(array[i])) {         
            newIntArray.push(array[i]);
        }
    }
    return newIntArray;
}

function removeLettera_2(array) {
console.log(array.filter(item => typeof item === 'number'));
}



const array = [1, "a", "b", 0, 15, 15,20,30, "cs", "vf", 1.2,];
console.log(removeLetters(array))



// const array_2 = ["Google", "Apple", "Microsoft"];
// // ["Apple", "Google", "Microsoft"]


const arr = ["Microsoft2","Apple", "Google", "Microsoft"];

const sortByLeght = arr.sort((a,b) => a.length - b.length);
console.log(sortByLeght);


confirm('kak dela')