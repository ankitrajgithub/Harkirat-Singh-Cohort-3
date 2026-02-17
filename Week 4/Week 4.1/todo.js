const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

const program = new Command();
const filePath = path.join(__dirname, 'todo.json');

// Helper: Load todos
function loadTodos() {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// Helper: Save todos
function saveTodos(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

// Command: Add
program
  .command('add <task>')
  .description('Add a new todo')
  .action((task) => {
    const date=new Date();
    const todos = loadTodos();
    todos.push({ task, done: false,time: date});
    saveTodos(todos);
    console.log('✅ Todo added!');
  });

// Command: Delete
program
  .command('delete <index>')
  .description('Delete a todo by its index')
  .action((index) => {
    const todos = loadTodos();
    if (index < 0 || index >= todos.length) {
      console.log('❌ Invalid index');
      return;
    }
    todos.splice(index, 1);
    saveTodos(todos);
    console.log('🗑️ Todo deleted!');
  });

// Command: Mark as done
program
  .command('done <index>')
  .description('Mark a todo as done')
  .action((index) => {
    const todos = loadTodos();
    if (index < 0 || index >= todos.length) {
      console.log('❌ Invalid index');
      return;
    }
    todos[index].done = true;
    saveTodos(todos);
    console.log('✅ Todo marked as done!');
  });

// Command: List
program
  .command('list')
  .description('List all todos')
  .action(() => {
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log('📭 No todos found!');
      return;
    }
    console.log('📝 Your Todos:');
    todos.forEach((todo, i) => {
      const status = todo.done ? '✅' : '❌';
      console.log(`${i}: ${todo.task} ${status} ${todo.time}`);
    });
  });

program.parse(process.argv);