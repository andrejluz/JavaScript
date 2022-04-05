

 let body = document.querySelector('body')
const todoListUl  = document.querySelector('#todo-list');
const button =  document.querySelector('#plus-button');
const input =  document.querySelector('#add-work-input');
let footerText = document.querySelector('.footer-text');


let allTasks = 0;
let completedTask = 0;
let taskProgressMax = 100;
let taskProgressValue = 0;
let tasksArray = [];



let footerProgressDiv = document.querySelector('.footer-progress')
let taskProgress = document.createElement('progress');
    taskProgress.setAttribute('max', taskProgressMax);
    taskProgress.setAttribute('value', taskProgressValue);
    taskProgress.classList.add('task-progress');







footerProgressDiv.appendChild(taskProgress);
footerText.innerHTML = `${completedTask} of ${allTasks}`;

input.addEventListener("keypress", function(event) {
    if (event.which === 13) {
        button.click();
    }
});

button.addEventListener('click', function() {

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



        if (input.value.length > 0) {
 
            li.appendChild(leftSide); 
            leftSide.appendChild(inputCheckbox);
            leftSide.appendChild(p);

            p.innerHTML = input.value;

          
            tasksArray.push(
                {        
                    todo: input.value,
                    done: false
                 
                })
            
          

            li.appendChild(rightSide);
            rightSide.appendChild(iconEdit);
            rightSide.appendChild(iconDelete);
            todoListUl.appendChild(li);

            input.value= '';

         
   
        allTasks = document.querySelectorAll('.todo-item').length;

        inputCheckbox.addEventListener('click', (event) =>{

        event.target.parentElement.classList.toggle('done')                 
          completedTask = document.querySelectorAll('.done').length;
          allTasks = document.querySelectorAll('.todo-item').length;
          footerText.innerHTML = `${completedTask} of ${allTasks}`;

            let taskProgressValue = Math.floor(completedTask === 0 ? 0 : (completedTask * taskProgressMax) / allTasks);
            taskProgress.setAttribute('max', taskProgressMax);
            taskProgress.setAttribute('value', taskProgressValue);

            let jobThatImCheck = event.target.nextElementSibling.textContent;

            console.log(jobThatImCheck)
            tasksArray.forEach(job => 
                job.todo === jobThatImCheck ? job.done = !job.done : job);
        
        });

      
        footerText.innerHTML = `${completedTask} of ${allTasks}`;

        iconDelete.addEventListener('click', function(event) {
           event.target.parentElement.parentElement.remove()

           let currentValue = event.target.parentElement.parentElement.firstChild.textContent;
            console.log(currentValue)
            // nextElementSibling
            tasksArray.forEach((job,index) => job.todo === currentValue ?  tasksArray.splice(index,1) : job)

           completedTask = document.querySelectorAll('.done').length;
           allTasks = document.querySelectorAll('.todo-item').length;
           footerText.innerHTML = `${completedTask} of ${allTasks}`;
           let taskProgressValue =Math.floor((completedTask * taskProgressMax) / allTasks);
            taskProgress.setAttribute('max', taskProgressMax);
            taskProgress.setAttribute('value', taskProgressValue);

            console.log(tasksArray)
          
        });
      
        removeChceckedWork.addEventListener('click', function() {
            if(inputCheckbox.checked) {
                todoListUl.removeChild(li);
                completedTask = document.querySelectorAll('.done').length;
                allTasks = document.querySelectorAll('.todo-item').length;
                footerText.innerHTML = `${completedTask} of ${allTasks}`;

            let taskProgressValue =Math.floor((completedTask * taskProgressMax) / allTasks);
            taskProgress.setAttribute('max', taskProgressMax);
            taskProgress.setAttribute('value', taskProgressValue);

                let tasksThatIsTrue = tasksArray.filter(job => job.done != true)
            }
        });
 
            let editClick = 0;
        
 
                iconEdit.addEventListener('click', function() {
            
                    if (editClick < 1) {
            
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
                        
                        
                            inputEdit.addEventListener('keypress', function(event) {
                                if(event.code === 'Enter') {
                                    editButton.click();
                                }
                            })

                            let lastPResult = p.innerHTML;

                        editButton.addEventListener('click', function(event) {
            
                            if (inputEdit.value.length > 0) {
                                p.innerHTML = inputEdit.value;
                                leftSide.removeChild(editSide); 

                                console.log(lastPResult)
                                tasksArray.forEach(job =>
                                    job.todo === lastPResult ? job.todo = inputEdit.value : job
                                )
                                editClick = 0;   

                            } else {
                                let alert = document.querySelector('.alert');
                                alert.innerText = 'Without writing anything, the data in the row is deleted';
                                todoListUl.removeChild(li);
                            }             
                        })
                        editClick++   
                        if (editClick === 1) {
                            iconEdit.addEventListener('click', function(event) {

                                // console.log(event.target.parentElement.parentElement)
                                leftSide.removeChild(editSide); 
                                editClick = 0;                          
                            })              
                    }                                            
                }             
        });
          
    };      

});

window.addEventListener("beforeunload", function(){
    localStorage.setItem('job', JSON.stringify(tasksArray))
  })


// for (let a of tasksArray) {
//     console.log(a)
// }
 