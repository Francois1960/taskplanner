
const taskManager = new TaskManager();
//taskManager.addTask('Drink Coffee', 'make a lot of expresso', 'Joe', '25/09/2020');

//console.log(taskManager.tasks)

const newtaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const newNameOfTask=document.querySelector('#newNameOfTask');
    const newDescription=document.querySelector('#newDescription');
    const newAssignedTo=document.querySelector('#newAssignedTo');
    const newDueDate=document.querySelector('#newDueDate');
   
//validation code here

    const nameOfTask = newNameOfTask.value;
    const description = newDescription.value;
    const assignedTo =newAssignedTo.value;
    const dueDate = newDueDate.value;

  taskManager.addTask(nameOfTask,description,assignedTo,dueDate);
  
    taskManager.render();

    newNameOfTask.value='';
    newDescription.value='';
    newDueDate.value='';
    newAssignedTo.value='';




});
