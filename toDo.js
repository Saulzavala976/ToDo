const btnCreateTask = document.querySelector("#createTask");
const taskInput = document.querySelector("#newTask");

const taskSpan = document.querySelector(".tasks");
const taskList = document.querySelector(".taskList");

btnCreateTask.addEventListener("click", function (e) {

    e.preventDefault;
    createTask(taskInput.value);

    console.log(taskInput.value);
    taskInput.value='';
    
})


function createTask(newTask) {    

//create new task
var newDiv = document.createElement("span");
newDiv.setAttribute('class','tasks');
newDiv.innerHTML = newTask;

taskList.appendChild(newDiv);

}

function deleteTask() {
    
}
function completeTask() {
    
}