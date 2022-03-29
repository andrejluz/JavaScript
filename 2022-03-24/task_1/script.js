
let h2 = document.querySelector('h2');
let myInput = document.querySelector('input');




// myInput.addEventListener('input', function(event) { 

//     h2.innerText = event.target.value;
// });





function addText() {
    h2.innerText = `Sveiki, ${myInput.value}`;
}


myInput.addEventListener('input', addText);