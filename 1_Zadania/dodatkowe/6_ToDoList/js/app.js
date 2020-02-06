// 6_ToDoList
document.addEventListener('DOMContentLoaded', function () {

    // variables
    let add = document.querySelector('#addTaskButton');
    let list = document.querySelector('#taskList');
    let buttonRemove = document.querySelector('#removeFinishedTasksButton');
    let buttonDelete = document.createElement('button');
    let buttonComplete = document.createElement('button');

    // listeners
    add.addEventListener('click', addTask);
    buttonComplete.addEventListener('click', CompleteTask);
    buttonDelete.addEventListener('click', DeleteTask);
    buttonRemove.addEventListener('click', RemoveFinishedTasks);

    // functions
    function addTask() {
        let newLi = document.createElement('li');
        let newH1 = document.createElement('h1');

        buttonDelete.innerHTML = 'Delete';
        buttonComplete.innerHTML = 'Complete';

        let inputValue = document.getElementById('taskInput').value;
        
        newH1.innerHTML = inputValue;
        list.appendChild(newLi);
        newLi.appendChild(newH1);
        newLi.appendChild(buttonDelete);
        newLi.appendChild(buttonComplete);
    }

    function CompleteTask() {
        console.log('complete clicked');
        list.style.color = 'red';
    }

    function DeleteTask() {
        console.log('delete clicked');
        
    }

    function RemoveFinishedTasks() {
        console.log('remove clicked');
    }



});