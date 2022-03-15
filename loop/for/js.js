for (let i=1; i <=17; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }  
}



const skaiciai = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
for (let i= 0; i <= skaiciai.length-1; i++) {
    if (skaiciai[i] % 2 === 0) {
        console.log(skaiciai[i]);
    }
}


const myArr = ['One', 'Two', 'Sofa', 'Stalas', 'test'];


for (let i = myArr.length-1; i >=0; i--) {
    console.log(myArr[i]);
}