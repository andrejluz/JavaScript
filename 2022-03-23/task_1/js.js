
const button = document.getElementById('btn');

button.addEventListener('click', function(){

    const num = prompt('Iveskyte skaiciu');
    const p = document.createElement('p');
    p.innerText = `Jusu skaicius yra: ${num}`;
    document.body.appendChild(p)
   
});



function secondClick() {
    console.log('antras mygtukas ivygdomas')
}

let secondButton = document.createElement('button');
secondButton.textContent = 'Antras';
secondButton.onclick = secondClick;

document.body.appendChild(secondButton);