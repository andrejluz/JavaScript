
const todoList = [];





let ivestaKomanda = prompt('Prasome ivesti komanda ?');

while(ivestaKomanda !== 'quit') {
    if (ivestaKomanda === 'list') {
        ivestaKomanda = prompt('Iveskyte nauja darba');
        todoList.push(ivestaKomanda);
    }
    console.log('Vartotojas neivedet quit');
    ivestaKomanda = prompt('Prasome ivesti sekanti komanda ?');
}

console.log(todoList);