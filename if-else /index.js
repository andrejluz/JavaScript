

let skaicius = prompt("Jusu ivesta mokama suma" );
let skaiciusInt = parseInt(skaicius);
let arbatPinigai = 0;
let pilnaSuma = skaiciusInt + arbatPinigai;

if (skaiciusInt > 0  ) {
    if (skaiciusInt <= 20) {
        arbatPinigai = skaiciusInt * 0.1;
        skaicius1 = 0;
    
    }
    else if (skaiciusInt > 20 && skaiciusInt <= 50) {
        arbatPinigai = skaiciusInt * 0.075;
        skaicius1 = 1;    
    }
    else {
        arbatPinigai = skaiciusInt * 0.05;
        skaicius1 = 2;
      
    }    

    let pilnaSuma = skaiciusInt + arbatPinigai;
    console.log("Sumoketa suma yra " + skaiciusInt);
    console.log("Arbatpinigai yra " + arbatPinigai );
    console.log('Pilna sumoketa suma yra ' + pilnaSuma);

} else if (isNaN(skaiciusInt)) {
    console.log("Prasome ivesti skaiciu ----  tuscia eilute arba ivestas zodis netinka ")
} else {
    console.log("Minusinis skaicius negali buti :)")
}
