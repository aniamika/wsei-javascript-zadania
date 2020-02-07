// 6_ToDoList
document.addEventListener('DOMContentLoaded', function () {

    let add = document.querySelector('#addTaskButton');
    let list = document.querySelector('#taskList');
    let buttonRemove = document.querySelector('#removeFinishedTasksButton');
    let buttonDelete = document.createElement('button');
    let buttonComplete = document.createElement('button');
    let counter = document.createElement('span');
    counter.id = 'counter';
    let numberOfTasks = 0;
    counter.innerHTML = "Task to finish: " + numberOfTasks;  
    document.body.insertBefore(counter, list);
    
    // listeners
    buttonComplete.addEventListener('click', CompleteTask);
    buttonDelete.addEventListener('click', DeleteTask);
    buttonRemove.addEventListener('click', RemoveFinishedTasks);


    // 6_ToDoList_5
    add.addEventListener('click', function inputValidation() {
        let inputEl = document.querySelector('#taskInput');

        if(inputEl.length <= 5) {
            alert("zadanie za krótkie");
        } else if(inputEl.length >= 100) {
            alert("zadanie za długie");
        } else {
            addTask();
            // 6_ToDoList_7
            counter.innerHTML = numberOfTasks + 1;
            // 6_ToDoList_6
            inputEl.value = " ";
        }

        // 6_ToDoList_1
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

    });
    
    // 6_ToDoList_2
    list.style.color = 'black';
    function CompleteTask() {  
        if(list.style.color === 'black') {
            list.style.color = 'red';
        } else if (list.style.color == 'red') {
            list.style.color = 'black';
        }
    }

    // 6_ToDoList_3
    function DeleteTask() {
        this.parentElement.remove();
    }

    // 6_ToDoList_4
    function RemoveFinishedTasks() {
        if(list.style.color === 'red') {
            let finishedTask = list.querySelector('li');
            finishedTask.remove();
        }
    }


});