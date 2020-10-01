
const taskManager = new TaskManager(0);
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
    taskManager.save();
    taskManager.render();

    newNameOfTask.value='';
    newDescription.value='';
    newAssignedTo.value='';
    newDueDate.value='';
});

    const tasksList = document.querySelector('#tasksList');
    tasksList.addEventListener('click', (event)=> {

      if(event.target.classList.contains('done-button')) {
        const parentTask=event.target.parentElement.parentElement;
        const taskId =Number(parentTask.dataset.taskId);
        const task = taskManager.getTaskById(taskId);
        task.status = "Done"
        taskManager.save();
        taskManager.render();   
      }
      if(event.target.classList.contains('delete-button')) {
        const parentTask=event.target.parentElement.parentElement;
        const taskId=Number(parentTask.dataset.taskId);
        taskManager.deleteTask(taskId);
        taskManager.save();
        taskManager.render();
      
}
});
