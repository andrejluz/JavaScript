

// const newArr = [];

// for (let i = 0; i <= skaiciai.length-1; i++) {
//     if (skaiciai[i] > 8) {
//         newArr.push(skaiciai[i]);
//     }
// }

// for (let y = 0; y <= newArr.length-1; y++) {
//     console.log(newArr[y]);
// }

// const skaiciai = [0, 5, 29, 23, 4, 5, 2, 525, 24, 89, 6, 555, 1, 2, 3, 4, 5, 658, 7, 8, 9, 11, 12, 13, 14, 15, 16];

// let didziausiasSkaicius = 0;

// for (let i = 1; i < skaiciai.length; i++) {   
//     if (didziausiasSkaicius < skaiciai[i]) {
//         didziausiasSkaicius = skaiciai[i];
//     }  
// }
// console.log(didziausiasSkaicius);


// const activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
//   ];

//   for (let i =0; i < activities.length; i++) {
//       console.log(`\n eilute ${i+1}`);
//       for (let y =0; y < activities[i].length; y++) {
//           console.log(activities[i][y]);
//       }
//   }

// let num = 0;
// while ( num < 10) {
//     console.log(num);
//     num++;
// }


const arr = [8,5,'kitas',6];

for (let i in arr) {
    console.log(arr[i]);
}