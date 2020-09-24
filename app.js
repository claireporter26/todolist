//declare global variables

const inputText = document.querySelector('.input-text');
const addBtn = document.querySelector('.add-btn');
const todoArea = document.querySelector('.todo-area');
const alertText = document.querySelector('.alert-text');
const todoList = document.querySelector('.todo-list');


//event listeners
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', completedTodo);


//functions

function addTodo() {

    if (inputText.value === " "){
        alertText.style.display = "block"
        setTimeout(function(){
            alertText.style.display = "none"  
        }, 1500);

    } else {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('added-todo')
        
        const newTodo = document.createElement("li")
        newTodo.classList.add('added-todo-item')
        newTodo.innerHTML = inputText.value;
        todoDiv.appendChild(newTodo);
    
        let completedBtn = document.createElement('button');
        completedBtn.classList.add('completed-btn');
        completedBtn.innerHTML = `<i class="fa fa-check"></i>`;
        todoDiv.appendChild(completedBtn);
    
        document.querySelector('.todo-list').appendChild(todoDiv);
        inputText.value = " ";
  
    }
};


function completedTodo(e){
    
    const item = e.target;
    if (item.classList.contains('completed-btn')){
        const completedTodo = item.parentElement;
        completedTodo.classList.add('reduce-opacity');
        completedTodo.addEventListener('transitionend', function(){
            completedTodo.remove();
        })
         
    }
    
}
    

    



    

    
