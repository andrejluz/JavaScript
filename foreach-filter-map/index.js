const knygosApieProgramavima = [
    {
      title: "The Pragmatic Programmer",
      author: 'David Thomas',
      goodReadsRating: 4.33,
      numberOfRatings: 18579
    },
    {
      title: "Clean Code",
      author: 'Robert C. Martin',
      goodReadsRating: 4.39,
      numberOfRatings: 18094
    },
    {
      title: "The Clean Coder",
      author: 'Robert C. Martin',
      goodReadsRating: 4.28,
      numberOfRatings: 7459
    },
    {
      title: "The Effective Engineer",
      author: 'Edmond Lau',
      goodReadsRating: 4.28,
      numberOfRatings: 1401
    },
    {
      title: "Eloquent JavaScript",
      author: 'Marijn Haverbeke',
      goodReadsRating: 4.15,
      numberOfRatings: 2680
    }
  ]

  function papildytiVertinima(knyga) {
      console.log(knyga.goodReadsRating += ` is 5`);
  }


  function autorius(el) {
      console.log(el.author);
  }

//   knygosApieProgramavima.forEach(function (el) {
//       console.log(el.author);
//   })

//   knygosApieProgramavima.forEach(papildytiVertinima)


const knyguPavadinimai = knygosApieProgramavima.map(function (el) {
        return el.title;
});


// console.log(knyguPavadinimai);


// const numbers = [12,25,45,1,2,46,85,6,8,9];

// let newNumbers = numbers.map(function (item) {
//     return item * 2;
// });
// console.log(numbers);
// console.log(newNumbers);


const object = {
    skaicius: 12,
    suma: function (num) {
        return num + this.skaicius;
    }
}

// console.log(object.suma(5));



function bestBook(book) {
    if (book.goodReadsRating >= 4.3)
    return book;
}


// console.log(knygosApieProgramavima.filter(bestBook));

const skaiciai = [12,25,45,1,2,46,85,6,8,9];

let newSkaiciai = skaiciai.map(item => item ** 2);

newSkaiciai2 = skaiciai.map(function(item) {
    return item ** 2;
});

console.log(newSkaiciai);
console.log(newSkaiciai2);