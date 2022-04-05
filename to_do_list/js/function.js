

function createPtagFromList (value) {

    let li = document.createElement('li');
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

let spanEditLinks = document.createElement('span');
    spanEditLinks.classList.add('edit-links');

let iconEdit = document.createElement('i');
let editClassList = ['bi', 'bi-pencil-fill'];
    iconEdit.classList.add(...editClassList);

let iconDelete = document.createElement('i');
let deleteClassList = ['bi', 'bi-trash-fill'];
    iconDelete.classList.add(...deleteClassList);

let removeChceckedWork = document.querySelector('.todo-buttons-rem')

let footerText = document.querySelector('.footer-text');
   
li.appendChild(leftSide); 
leftSide.appendChild(inputCheckbox);
leftSide.appendChild(p);
li.appendChild(rightSide);
rightSide.appendChild(iconEdit);
rightSide.appendChild(iconDelete);
todoListUl.appendChild(li);

p.innerText = value

}



function createTasksListFromArray (arr) {


    for (let a of arr) {

       createPtagFromList(a.todo) 
   
     }

}


function showProgressBarDesc(completedTask, allTasks) {

    return `${completedTask} of ${allTasks}`;
}


function taskBarProgresPercent(completedTask,allTasks) {
    completedTask = document.querySelectorAll('.done').length;
          allTasks = document.querySelectorAll('.todo-item').length;
          let taskProgressValue = Math.floor(completedTask === 0 ? 0 : (completedTask * taskProgressMax) / allTasks);
          taskProgress.setAttribute('max', taskProgressMax);
          taskProgress.setAttribute('value', taskProgressValue);
}