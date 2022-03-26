const todoListUl = document.querySelector('#todo-list');

const button =  document.querySelector('#plus-button');
const input =  document.querySelector('#add-work-input');



function myClick() {
    if ('click') {
        return 'click';
    } 
    else if (witch === 13) {
        return 'keyup'
    }
}



button.addEventListener('click', function() {
   
        if (input.value.length > 0) {

            const li = document.createElement('li');
            li.classList.add('todo-item');
            
            let leftSide = document.createElement('div');
            leftSide.classList.add('left-side')

            let rightSide = document.createElement('div');
            rightSide.classList.add('right-side')
            rightSide.classList.add('edit-links')


            let inputCheckbox = document.createElement('input');
            inputCheckbox.setAttribute('type', 'checkbox');
            inputCheckbox.classList.add('checkbox')

        

            let p = document.createElement('p');
            p.classList.add('text');
            p.innerHTML = input.value;

            let spanEditLinks = document.createElement('span');
            spanEditLinks.classList.add('edit-links');

            let iconEdit = document.createElement('i');
            let editClassList = ['bi', 'bi-pencil-fill'];
            iconEdit.classList.add(...editClassList);

            let iconDelete = document.createElement('i');
            let deleteClassList = ['bi', 'bi-trash-fill'];
            iconDelete.classList.add(...deleteClassList);

            let removeChceckedWord = document.querySelector('.todo-buttons-rem')

            todoListUl.appendChild(li);

            li.appendChild(leftSide);
            leftSide.appendChild(inputCheckbox);
            leftSide.appendChild(p);

            li.appendChild(rightSide);

            rightSide.appendChild(iconEdit);
            rightSide.appendChild(iconDelete);

            input.value= '';

            p.addEventListener('click', function() {
                p.style.textDecoration = 'line-through';
            });

            p.addEventListener('dblclick', function() {
                p.style.textDecoration = 'none';
            });


            iconDelete.addEventListener('click', function() {
                todoListUl.removeChild(li);
            });

            
            removeChceckedWord.addEventListener('click', function() {
                if(inputCheckbox.checked) {
                    todoListUl.removeChild(li);
                }
            });

                  
            iconEdit.addEventListener('click', function() {

                let editUl = document.createElement('lu');
                editUl.classList.add('edit-lu');

                let editLi =  document.createElement('li');
                editLi.classList.add('edit-li');

                let inputEdit = document.createElement('input');
                inputEdit.setAttribute('value', '');
                inputEdit.classList.add('edit-input');

                let editButton = document.createElement('button');
                editButton.innerText = 'Edit Work';
                editButton.classList.add('edit-btn')

                let editSide = document.createElement('div');
                editSide.classList.add('edit-side')

        
                    leftSide.appendChild(editSide)
                    editSide.appendChild(editUl)
                    editUl.appendChild(editLi)
                    editLi.appendChild(inputEdit);
                    editLi.appendChild(editButton)
                    inputEdit.setAttribute('value', p.innerHTML)
    
                   

                    editButton.addEventListener('click', function() {
                        p.innerHTML = inputEdit.value;
                        inputEdit.value = '';
                        leftSide.removeChild(editSide);
                    })
            
              
            });

    };
});




// let checkBoxInput = document.querySelector('.checkbox');
// checkBoxInput.addEventListener('click', () => console.log('checkbox'));
//             let newToDo = `<li class="todo-item">
//             <div class="left-side">
//                 <input type="checkbox" class="checkbox"/>
//                 <p class="text">${input.value}</p>
//             </div>
//             <div class="righ-side edit-links">
//                     <i class="bi bi-pencil-fill"></i>
//                     <i class="bi bi-trash-fill" id="delete"></i>
//                     <!-- <span class="todo-del-link">X</span> -->
//             </div>     
//         </li>`;
//              todoListUl.insertAdjacentHTML("beforeend", newToDo)      
//              console.dir(input.value)
//             input.value= '';
// let todoText = document.querySelector('.text');
// console.log(todoText)
// todoText.addEventListener('click', function() {
//     todoText.style.textDecoration = 'line-through';
// })
// let iconDelete = document.querySelector('#delete');
// iconDelete.addEventListener('click', function() {
//     todoListUl.remove(newToDo);