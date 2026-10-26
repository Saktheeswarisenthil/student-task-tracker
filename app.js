
const tasks = [
  { id: 1, title: "Complete Git notes", completed: false },
  { id: 2, title: "Prepare DevOps assignment", completed: true }
];

function showTasks() {
  console.log("Student Task Tracker");

  tasks.forEach(task => {
    console.log(
      `${task.id}. ${task.title} - ${
        task.completed ? "Completed" : "Pending"
      }`
    );
  });
}

function findTaskById(id) {
  const task = tasks.find(item => item.id === id);

  if (!task) {
    console.log(`Task ${id} was not found.`);
    return;
  }

  console.log(`Selected task: ${task.title}`);
}

findTaskById(1);
findTaskById(99);

showTasks();
