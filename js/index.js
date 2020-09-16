

const taskManager = new TaskManager(0);
//taskManager.addTask('Drink Coffee', 'make a lot of expresso', 'Joe', '25/09/2020');

console.log(taskManager.tasks)

const newtaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const newNameOfTask=document.querySelector("#newNameOfTask");
    const newDescription=document.querySelector("#newDescription");
    const newDueDate=document.querySelector("#newDueDate");
    const newAssignedTo=document.querySelector("#newAssignedTo");
   
//validation code here

const nameOfTask = newNameOfTask.value;
const description= newDescription.value;
const dueDate= newDueDate.value;
const assignedTo=newAssignedTo.value;
// removing due date from add task
taskManager.addTask(nameOfTask,description,dueDate,assignedTo)

newNameOfTask.value='';
newDescription.value='';
newDueDate.value='';
newAssignedTo.value='';




});
