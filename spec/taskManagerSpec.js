describe ('Taskmanager',()=>{
    describe('#contructor',()=>{
        describe('when a new taskmanager starts',()=>{
            it('should creare an empty tasks Array',()=>{
                const taskManager = new TaskManager(1);

                expect(taskManager.tasks).toEqual([]);
            })
        })
    })
    describe ('deleteTask',()=>{
        describe('')


    })
})