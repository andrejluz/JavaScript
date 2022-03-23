const animals = [
    {
      type: 'fox',
      wild: true
    }, 
    {
      type: 'cat',
      wild: false
    }, 
    {
      type: 'dog',
      wild: false
    }, 
    {
      type: 'rabbit',
      wild: true
    }, 
    {
      type: 'giraffe',
      wild: true
    }, 
    {
      type: 'monkey',
      wild: true
    }, 
  ]

  const wildAnimals = animals.map(function (animal) {
    if (animal.wild != false) {
        return `type: ${animal.type} \n wild: ${animal.wild}`;
    }
  });

  let firstArr = [1, 2, 3, 4, 5];
let secondArr = [6, 7, 8, 9, 10];

const allNumbers = [...firstArr, ...secondArr]; // sujungia du masyvus
// console.log(allNumbers);

0
function remove_array_element(array, num){
    const nArr = array.map(function (item) {
        if (item === num) {
            array.splice(item,1)
        } else {
            return item;
        }
    })
     const result = nArr.filter(element => {
        return element !== undefined
      })
        return result;
}

const array = [2,5,9,6];

console.log(remove_array_element(array, 9));