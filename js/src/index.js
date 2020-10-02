
const taskManager = new TaskManager(0);
//taskManager.addTask('Drink Coffee', 'make a lot of expresso', 'Joe', '25/09/2020');
taskManager.load();
//console.log(taskManager.tasks)
taskManager.render();
const newtaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const newNameOfTask=document.querySelector('#newNameOfTask');
    const newDescription=document.querySelector('#newDescription');
    const newAssignedTo=document.querySelector('#newAssignedTo');
    const newDueDate=document.querySelector('#newDueDate');
   
//validation code hereCreate a JavaScript function called “validateTaskForm” that verifies that the inputs inserted by the user in the task form are correct:
//Name -> Not Empty and longer than 8 characters
//Description -> Not Empty and longer than 15 characters
//AssignedTo -> Not Empty and longer than 8 characters
// DueDate  -> Not Empty and not in the past

 /* if(newNameOfTask.value.length <= 0 && newNameOfTask.value.length >= 8){
      alert("success");
  }
  else{
      alert("make sure the input is between more than 8 characters long")
  }
}
const validateTaskForm()=>{
  function validate(){
    x=document.myForm
    input=x.myInput.value
    if (input.length>5){
        alert("The field cannot contain more than 5 characters!")
        return false
    }else {
        return true

playing here*/

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
