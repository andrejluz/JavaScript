const { listenerCount } = require("process");

function duSkaiciai(a, b) {
    console.log(a ** b);
}

function didesnisSkaicius(a,b) {
    if (a >b) {
        return a;
    } else if ( a === b ) {
        return `skaicius ${a} yra lygus skaiciui ${b}`;
    }
    return b;
}

function kokiaTaiDiena(num) {
    switch(num) {
        case 1: 
        return 'pirmadienis';
        case 2: 
        return 'Antradienis';
        case 3: 
        return 'Treciadienis';
        case 4: 
        return 'Ketvirtadienis';
        case 5: 
        return 'Penktadienis';
        case 6: 
        return 'Sestadienis';
        case 7: 
        return 'Sekmadienis';
        default: 
        return 'Tokios dienos savaiteneje nera !!!'  ;     
    }
}


function sudetiVisusSkaicius(array) {
const newArray = [];
const like = [];
let suma = 0;
for ( let i = 0; i <= array.length-1; i++) {
    if (Number.isInteger(array[i])) {
        newArray.push(array[i]);
    } else  {
        like.push(array[i]);
    }
}
for ( let j = 0; j <= newArray.length-1; j++) {
    suma += newArray[j];
}

    return `Visu skaiciu suma yra: ${suma}`;
}

function sudetiVisusSkaicius2(array) {
const newArray = [];
const like = [];
let suma = 0;
for ( let i = 0; i <= array.length-1; i++) {
    if (Number.isInteger(array[i])) {
        suma += array[i];  
        }  
    }
    return `suma yra ${suma}`;
}

const  array = [12, 4, 16, 3, 8, 9, 'hi', 12, 2, 1, 5, 3, 9, 55, 292, 13,55, undefined];



let zodis = "zodis";

function dideleRaide(zodis) {

     const array = zodis.split(' ');
   
     for ( let i = 0; i < array.length; i++) {
            
        for ( let j = 0; j < array[i].length; j++) {
                if (array[i][j] === array[i][0]) {
                    console.log(array[i][j].toUpperCase() + array[i][j].slice(1));
                }
        }
     }
   
}
console.log(dideleRaide(zodis));