
const createTaskHtml=(nameOfTask, description, assignedTo, dueDate, status)=>
    `<li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${nameOfTask}</h5>
            <span class="badge badge-info">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <medium>Assigned To: ${assignedTo}</medium>
            <medium>Due: ${dueDate}</medium>
        </div>
    <p>${description}</p>
</li>`
;
 
class TaskManager{
    constructor(currentId=0){
        this.tasks=[];
        this.currentId=currentId;

}
    addTask(nameOfTask,description,assignedTo,dueDate){
    const task={
    id: this.currentId++,
    nameOfTask: nameOfTask,
    description: description,
    assignedTo: assignedTo,
    dueDate: dueDate,
    status: "To Do"

};
this.tasks.push(task);
}
  // Create the render method
  render() {
    // Create an array to store the tasks' HTML
    const tasksHtmlList = [];

    // Loop over our tasks and create the html, storing it in the array
    for (let i = 0; i < this.tasks.length; i++) {
        // Get the current task in the loop
        const task = this.tasks[i];

        // Format the date
        const date = new Date(task.dueDate);
        const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

        // Create the task html
        const taskHtml = createTaskHtml(task.nameOfTask, task.description, task.assignedTo, formattedDate, task.status);

        // Push it to the tasksHtmlList array
        tasksHtmlList.push(taskHtml);
    }

    // Create the tasksHtml by joining each item in the tasksHtmlList
    // with a new line in between each item.
    const tasksHtml = tasksHtmlList.join('\n');

    // Set the inner html of the tasksList on the page
    const tasksList = document.querySelector('#tasksList');
    tasksList.innerHTML = tasksHtml;
}
}

