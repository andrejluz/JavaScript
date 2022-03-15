let promptTekstas = {
    pradinis : 'PRASOME IVESTI KOMANDA IS SARASO: \n\t new - leidzia sukruti nauja irasa \n\t  list - isveda i console visas musu     sukurtus darbus \n\t delete - pasalina nurodyta darba is saraso \n\t quit - uzdaro applikacija' ,
    naujasDarbasText : 'Iveskyte nauja darba',
    deleteText:  'Iveskyte indeksa kuri istrinti !!!'
}

const todoList = [];

let ivestaKomanda = prompt(promptTekstas.pradinis);

while(ivestaKomanda !== 'quit') {
    if (ivestaKomanda === 'new') {
        ivestaKomanda = prompt(promptTekstas.naujasDarbasText);
        todoList.push(ivestaKomanda);
    } 
    else if (ivestaKomanda === 'list') {
        for (let i =0; i < todoList.length; i++) {
            console.log(`ìndeksas: ${i} ---> darbas: ${todoList[i]}`);
            ivestaKomanda = prompt(promptTekstas.pradinis);
        }
        if (todoList.length === 0 ) {
            console.log('Nera ivestu darbu');
          }

    }  else if (ivestaKomanda === 'delete') {
            let indeksas =prompt(promptTekstas.deleteText);
            todoList.splice(indeksas, 1);
    }
    console.log('Norint iseiti iveskyte  -> quit');
    ivestaKomanda = prompt(promptTekstas.pradinis);
}

console.log(`Listas baigtas pildyti \n ${todoList}`);