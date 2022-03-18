// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223

function reverseNumber(x) {
    let num = 0;
    let lastChild ;  
    while( x != 0 ) {
        lastChild = x % 10;
        num = num * 10 + lastChild;
        x = Math.floor(x/10);
    }  
    return num;
}


function reverseNumber2(x) {
    let stringNum = x.toString();
    let num2 = stringNum.split('');
    let reverse = num2.reverse();
    let reverseNumber = reverse.join('');
        return reverseNumber;
}




let x = 123456;

console.log(reverseNumber2(x))

