describe ('Taskmanager',()=>{
    describe('#contructor',()=>{
        describe('when a new taskmanager starts',()=>{
            it('should creare an empty tasks Array',()=>{
                const taskManager = new TaskManager(1);

                expect(taskManager.tasks).toEqual([]);
            });
            it('should set the curentId to the passed in number',()=>{
                const taskManager=new TaskManager(1);
                expect(taskManager.currentId).toBe(1);

            });
        });
    });
   describe('#addTask',()=>{
        describe('new task data as parameters',()=>{
            it('should add the task to the taskarray',()=>{
                const taskManager=new TaskManager(10);
                const task={
                    id: taskManager.currentId,
                    nameOfTask: "try",
                    description: "try",
                    assignedTo: "try",
                    dueDate: Date.now(),
                    status: "To Do"
                    };  
             taskManager.addTask(task.nameOfTask,task.description,task.assignedTo,task.dueDate);
             expect(taskManager.tasks[0]).toEqual(task);
            });
            it('should increment the currentId',()=>{
                const taskManager=new TaskManager(10);
                const task={
                    id: taskManager.currentId,
                    nameOfTask: "try",
                    description: "try",
                    assignedTo: "try",
                    dueDate: Date.now(),
                    status: "To Do"
                    };  
            taskManager.addTask(task.nameOfTask,task.description,task.assignedTo,task.dueDate);
             expect(taskManager.currentId).toBe(11);
            });
        });
    });
    /* how to delete a task*/
    describe('#deleteTask',()=>{
        describe('when passes an existing taskId',()=>{
            it('should remove the task fom the task array',()=>{
                const taskManager=new TaskManager();

                const taskToDelete={
                     id: taskManager.currentId,
                    nameOfTask: "try",
                    description: "try",
                    assignedTo: "try",
                    dueDate: Date.now(),
                    status: "To Do"
                    };  
                taskManager.addTask(taskToDelete.nameOfTask,taskToDelete.description,taskToDelete.assignedTo,taskToDelete.dueDate);
                taskManager.addTask('water garden','every second day','frank',Date.now()); 
                taskManager.deleteTask(taskToDelete.id);

                expect(taskManager.tasks).not.toContain(taskToDelete);
                });
            });
        });
    /*how to get task by id number*/
    describe('#getTaskById',()=>{
        describe('when passing an existing id',()=>{
            it('should return the task',()=>{
                const taskManager=new TaskManager();
                const task={
                    id: taskManager.currentId,
                    nameOfTask: "try",
                    description: "try",
                    assignedTo: "try",
                    dueDate: Date.now(),
                    status: "To Do"
                    };  
                taskManager.addTask(task.nameOfTask,task.description,task.assignedTo,task.dueDate);
                const result=taskManager.getTaskById(task.id);
                expect(result).toEqual(task);
                });
            });
        });
   /* output to task list render use Spy for first time*/
    describe('#render',()=>{
        describe('when tasks exist in the task manager',()=>{
            it('should render text in innerHTML of taskList',()=>{
                const taskManager=new TaskManager();                  
   const task={
            id: taskManager.currentId,
            nameOfTask: "try",
            description: "try",
            assignedTo: "try",
            dueDate:1601451685812,
            status: "To Do"
            };  
            taskManager.addTask(task.nameOfTask,task.description,task.assignedTo,task.dueDate);
            
            const taskList={innerHTML:''};
            spyOn(document,'querySelector').and.returnValue(taskList);

            taskManager.render();

            expect(taskList.innerHTML).toContain('<li class="list-group-item" data-task-id=0>');
            expect(taskList.innerHTML).toContain('<h5>try</h5>');
            expect(taskList.innerHTML).toContain('<span class="badge badge-info">To Do</span>');
            expect(taskList.innerHTML).toContain('<medium>Assigned To: try</medium>');
            expect(taskList.innerHTML).toContain('<medium>Due: 30/9/2020</medium>');
            expect(taskList.innerHTML).toContain('<p>try</p>');
            expect(taskList.innerHTML).toContain('<input type="button" class="btn btn-outline-success done-button" value="Done"> ');
            expect(taskList.innerHTML).toContain(' <input type="button" class="btn btn-outline-danger delete-button" value="Delete">');
            });
        });
    });
/* how to test save a task start call save*/
    describe('#save',()=>{
        describe('when tasks exist in the task manager',()=>{
            it('should store the task on local storage',()=>{
                const taskManager=new TaskManager();
                const task={
                    id: taskManager.currentId,
                    nameOfTask: "try",
                    description: "try",
                    assignedTo: "try",
                    dueDate: Date.now(),
                    status: "To Do"
                    };  
                taskManager.addTask(task.nameOfTask,task.description,task.assignedTo,task.dueDate);
                const tasksJson=JSON.stringify([task]);

                const localStorageSpy=spyOn(localStorage,'setItem');
                taskManager.save();
                expect(localStorageSpy.calls.first().args).toEqual(['tasks',tasksJson]);
            });
            it('should store the currentId to local storage',()=>{
                const taskManager=new TaskManager();
                taskManager.addTask("try","try","try",Date.now());
                const localStorageSpy=spyOn(localStorage,'setItem');
                taskManager.save();
                const currentid=String(taskManager.currentId);
                expect(localStorageSpy.calls.mostRecent().args).toEqual(['currentId',currentid]);
            });
        });
    });
    describe('#load',()=>{
        describe('when task are stored in local storage',()=>{
            it('should set the tasks array to the saved tasks',()=>{
                const taskManager=new TaskManager();
                const task={
                    id: taskManager.currentId,
                    nameOfTask: "try",
                    description: "try",
                    assignedTo: "try",
                    dueDate: Date.now(),
                    status: "To Do"
                    };  
                const tasks=[task];
                const tasksJson=JSON.stringify(tasks);
                spyOn(localStorage,'getItem').and.returnValue(tasksJson);
                taskManager.load();
                expect(taskManager.tasks).toEqual(tasks);
            });
        })
        describe('when currentId is saved in local storage',()=>{
            it("should set the current id to the saved current id",()=>{
                const taskManager=new TaskManager();
                spyOn(localStorage,'getItem').and.returnValue('1');
                taskManager.load();
                expect(taskManager.currentId).toBe(1);
            })
        })
    })
});
