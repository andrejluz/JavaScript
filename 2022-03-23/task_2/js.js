let button = document.createElement('button');
button.textContent = 'Body Spalva';
document.body.appendChild(button);

c

function changeColor() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;  
}

button.addEventListener('click' , function() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;  
});




// button.onclick = changeColor;

// button.addEventListener('click', changeColor)



let newB = `
<h2>Naujas tagas</h2>`;

document.body.appendChild(newB)



