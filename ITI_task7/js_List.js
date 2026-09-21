let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.onclick = function () {

    let taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    
    let task = document.createElement("div");
    task.className = "task";

    
    let span = document.createElement("span");
    span.innerHTML = taskText;

    
    let doneBtn = document.createElement("button");
    doneBtn.innerHTML = "Done";
    doneBtn.className = "doneBtn";

   
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "deleteBtn";

    
    task.appendChild(span);
    task.appendChild(doneBtn);
    task.appendChild(deleteBtn);

    taskList.appendChild(task);

  
    doneBtn.onclick = function () {
        task.classList.toggle("completed");
    };

    
    deleteBtn.onclick = function () {
        taskList.removeChild(task);
    };

   
    taskInput.value = "";
};