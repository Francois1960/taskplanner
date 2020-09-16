
class TaskManager{
constructor(currentId=0){
this.tasks=[];
this.currentId=currentId


}
addTask(nameOfTask,description,assignedTo,status,duedate){
const task={
    id: this.currentId++,
    nameOfTask: nameOfTask,
    description: description,
    assignedTo: assignedTo,
    status: "To Do",
    duedate: duedate,

}
this.tasks.push(task);
}
}
