function addTaskParagraph(){
    let newTaskPara = document.createElement("p");
    // console.log(newTaskPara);

    let taskTask = prompt("Enter task");
    if(!taskTask) return ; // prevent empty data/task

    let taskData = document.createTextNode(taskTask);
    newTaskPara.appendChild(taskData)

    
    let parentDiv = document.querySelector("#taskContainer");
    parentDiv.appendChild(newTaskPara)
    // document.textContent = newTaskPara;

    // document.getElementById("addTask").innerHTML=prompt("Enter task...
}