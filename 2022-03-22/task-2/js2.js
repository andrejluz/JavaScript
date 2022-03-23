let duomenysIsBD = [
    {
      id: 1,
      name: "Leanne Graham",
      photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    },
    {
      id: 2,
      name: "Ervin Howell",
      photo: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
      }
    },
    {
      id: 3,
      name: "Clementine Bauch",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653"
        }
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications"
      }
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990"
        }
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services"
      }
    },
    {
      id: 5,
      name: "Tom Dietrich",
      username: "Tom",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      email: "TomDietr@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342"
        }
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems"
      }
    },
  ];

  // create cards

  const cards = document.createElement('div');
  cards.classList.add('cards')
  document.body.appendChild(cards);

    //cards style
    cards.style.width = '100%';
    cards.style.height = '100%';
    cards.style.padding = '20px 0';
    cards.style.display = 'flex';
    cards.style.justifyContent = 'space-around';


function createCard(arr) {
    arr.forEach(element => {
      // create card
      const card = document.createElement('div');
      card.classList.add('card')
      cards.appendChild(card);  

      //card style 
      card.style.width = '250px';
      // card.style.height = '50%';
      card.style.border = '1px solid #000';
      card.style.display = 'flex';
      card.style.padding = '15px 0';
      card.style.flexDirection = 'column';
      card.style.alignItems = 'center';
      card.style.justifyContent = 'center';
       
      // image
      const img = document.createElement('img');
      card.appendChild(img);
      img.setAttribute('src', element.photo);

      //img style 
      img.style.width = '150px';
      img.style.height = '150px';
      img.style.borderRadius = '50%';
      img.style.objectFit = 'cover';
      img.style.alignSelf = 'center';

        // h2
      const h2 = document.createElement('h2');
      card.appendChild(h2);
      h2.innerText = element.name

        h2.style.textAlign = 'center';

      // link 
      const a = document.createElement('a');
      card.appendChild(a);
      a.innerText = element.website
      a.setAttribute('href', `http://${element.website}`);

      //social link
      const socialLink = document.createElement('div');
      socialLink.classList.add('social-link')
      card.appendChild(socialLink); 
        socialLink.style.marginTop = '20px';

      //facebook
      const iFaceebok = document.createElement('i');
      socialLink.appendChild(iFaceebok);
      iFaceebok.setAttribute('class', 'bi bi-facebook');

      iFaceebok.style.fontSize = '25px';

      //twitter
      const iTwitter = document.createElement('i');
      socialLink.appendChild(iTwitter);
      iTwitter.setAttribute('class', 'bi bi-twitter');

      iTwitter.style.fontSize = '25px';
      iTwitter.style.margin = '0 10px';

      //linkedin
      const iLinkedin = document.createElement('i');
      socialLink.appendChild(iLinkedin);
      iLinkedin.setAttribute('class', 'bi bi-linkedin');

      iLinkedin.style.fontSize = '25px';
   
    });
}

createCard(duomenysIsBD);



