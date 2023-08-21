const inputTask = document.getElementById("input-box");
const listTask = document.getElementById("list");
function addTask(){
    if(inputTask.value == "") {
        alert("Please enter task")
    } else {
        const newTask = document.createElement("li");
        newTask.innerHTML = inputTask.value;
        listTask.appendChild(newTask);
        const remove = document.createElement("remove");
        remove.innerHTML = " ";
        newTask.appendChild(remove);
        const edit = document.createElement("edit");
        edit.innerHTML = " ";
        newTask.appendChild(edit);
     }
    inputTask.value="";
    saveData(); 
}
listTask.addEventListener("click",function(e) {
    if(e.target.tagName === "LI") { 
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "REMOVE") {
        e.target.parentElement.remove();
        saveData();
    } else if(e.target.tagName === "EDIT") {
        let taskEdited = prompt("", " ");
        if (taskEdited !== null && taskEdited.trim() !== "") {
        e.target.parentElement.remove();
        let newTask = document.createElement("li");
        newTask.innerHTML = taskEdited;
        listTask.appendChild(newTask);
        let remove = document.createElement("REMOVE");
        remove.innerHTML = " ";
        newTask.appendChild(remove); 
        let edit = document.createElement("edit");
        edit.innerHTML = " ";
        newTask.appendChild(edit);
        saveData();
      }
    }
}, false );
function saveData() {
    localStorage.setItem("data",listTask.innerHTML);
}
function showTask() {
    listTask.innerHTML = localStorage.getItem("data");
}
showTask();


