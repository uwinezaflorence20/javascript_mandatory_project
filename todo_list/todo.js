const todoList = {
    categories: [],
    tasks: [],
  
    addTask (categoryName, taskName){
      const category = todoList.categories.find(category => category.name === categoryName);
      if (category) {
        const newTask = {
          name: taskName,
          completed: false
        };
  
        todoList.tasks.push(newTask);
        category.tasks.push(newTask);
      } else {
        console.log('Invalid category!');
      }
    },
  
    addCategory (categoryName) {
      const category = {
        name: categoryName,
        tasks: []
      };
  
      todoList.categories.push(category);
    },
  
    displayTasks () {
      todoList.categories.forEach(category => {
        console.log(`${category.name}:`);
        category.tasks.forEach(task => {
          console.log(`${task.name} (${task.completed ? 'Completed' : 'Not completed'})`);
        });
      });
    },
  
    markTaskCompleted (categoryName, taskName) {
      const category = todoList.categories.find(category => category.name === categoryName);
      if (category) {
        const task = category.tasks.find(task => task.name === taskName);
        if (task) {
          task.completed = true;
        } else {
          console.log(`Task "${taskName}" not found in "${categoryName}" category.`);
        }
      } else {
        console.log(`Category "${categoryName}" not found.`);
      }
    },
  
    removeTask(categoryName, taskName)  {
      const category = todoList.categories.find(category => category.name === categoryName);
      if (category) {
        const taskIndex = category.tasks.findIndex(task => task.name === taskName);
        if (taskIndex !== -1) {
          category.tasks.splice(taskIndex, 1);
        } else {
          console.log(`Task "${taskName}" not found in "${categoryName}" category.`);
        }
      } else {
        console.log(`Category "${categoryName}" not found.`);
      }
    }
  };
  
  // Add categories
  todoList.addCategory('home');
  todoList.addCategory('work');
  
  // Add tasks to their corresponding categories
  todoList.addTask('home', 'sleeping and resting');
  todoList.addTask('work', 'finish project');
  todoList.addTask('home', 'baby sitting');
  todoList.addTask('work', 'presentation');
  todoList.displayTasks();
  
  // Mark tasks as completed
  todoList.markTaskCompleted('home', 'sleeping and resting');
  todoList.markTaskCompleted('work', 'finish project');
  todoList.markTaskCompleted('home', 'baby sitting');
  todoList.markTaskCompleted('home', 'presentation');
  todoList.displayTasks();
  
  // Removeed task
  todoList.removeTask('home', 'sleeping and resting');
  todoList.removeTask('work', 'finish project');
  todoList.displayTasks();
    
