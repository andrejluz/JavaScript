const darbai = ['paimti darbus is masyvo', 'parasyti funkcija', 
'funckija turi skurti DOM elementus', 
'tie elementai turi buti sudeti i tevini ul konteineri']


const myNewH1 = document.createElement('h1');
myNewH1.innerHTML = 'My text';
document.body.appendChild(myNewH1);



const myUl = document.createElement('ul');

function addlistItemToUl(arr) {
    arr.forEach(element => {
        let newLi = document.createElement('li');
        newLi.innerHTML = element;
        myUl.appendChild(newLi);
    });
    
    document.body.appendChild(myUl);
}



addlistItemToUl(darbai);